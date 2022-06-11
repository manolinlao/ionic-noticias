"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xfs4IotServiceDiscovery = exports.DISCOVER_SERVICES_MSG = void 0;
/* eslint-disable no-undefined */
const ws_1 = require("ws");
const pino_1 = require("pino");
const pretty = require('pino-pretty');
const fujitsu_xfs4iot_api_1 = require("fujitsu-xfs4iot-api");
const usePinoPretty = process.env.PINO_PRETTY && !['0', 'false', 'no', ''].includes(process.env.PINO_PRETTY.toLowerCase());
const stream = usePinoPretty
    ? pretty({
        colorize: true,
        crlf: false,
        errorLikeObjectKeys: ['err', 'error'],
        errorProps: '',
        levelFirst: false,
        messageKey: 'msg',
        levelKey: 'level',
        messageFormat: false,
        timestampKey: 'time',
        translateTime: 'HH:MM:ss.l',
        ignore: 'pid,hostname,layer',
        hideObject: false,
        singleLine: false,
        destination: 1,
        sync: false,
        append: true,
        mdkdir: true,
    })
    : undefined;
// Creamos logger
const logger = (0, pino_1.pino)({
    level: process.env.PINO_LOG_LEVEL || 'info',
    name: 'Xfs4IotServiceDiscovery',
}, stream).child({ layer: 'MDCS-IOT-CORE' });
exports.DISCOVER_SERVICES_MSG = {
    header: {
        type: fujitsu_xfs4iot_api_1.XfsMessageType.COMMAND,
        name: fujitsu_xfs4iot_api_1.ServicePublisherCommandType.GetServices,
        requestId: 1,
    },
    payload: { timeout: 5000 },
};
const DEFAULT_TIMEOUT = 5000;
/**
 * Class to discover publisher services of the xfs4iot devices.
 * It scans every port of the Xfs4Iot standard, to check wether exist a ServicePublisher or not.
 *
 * This class allows, calling the method discoverPublisherEndpoints(allowSelfSignedCertificate = false),
 * to get a WebSocket list with al ServicePublishers.
 */
class Xfs4IotServiceDiscovery {
    constructor(host) {
        this.host = host;
        /**
         * Con cada peticion see incrementara en 1 el id,
         * para tener trazabilidad y rellenar los campos requestId de los mensajes
         */
        this.clientId = 1;
        this.services = {};
    }
    async discoverPublisherEndpoints(allowSelfSignedCertificate = false) {
        logger.info('Empieza el arranque del ServicePublisherDiscovery para ' +
            `encontrar todos los ServicePublisher de la maquina: ${this.host}`);
        const httpConnections = (await this.discoverHttp(allowSelfSignedCertificate)).filter((el) => el !== null);
        const httpsConnections = (await this.discoverHttps(allowSelfSignedCertificate)).filter((el) => el !== null);
        logger.info(`Se han encontrado: ${httpConnections.length} service publishers usando WS.`);
        logger.info(`Se han encontrado: ${httpsConnections.length} service publishers usando WSS.`);
        return httpConnections.concat(httpsConnections);
    }
    discoverHttp(allowSelfSignedCertificate) {
        return Promise.all(fujitsu_xfs4iot_api_1.DISCOVERY_HTTP_PORTS.map((port) => this.discoverServices(port, false, allowSelfSignedCertificate)));
    }
    discoverHttps(allowSelfSignedCertificate) {
        return Promise.all(fujitsu_xfs4iot_api_1.DISCOVERY_HTTPS_PORTS.map((port) => this.discoverServices(port, true, allowSelfSignedCertificate)));
    }
    // Devuelve un objeto WebSocket que ha recibido un evento 'open' del websocket.
    async discoverServices(port, ssl = true, allowSelfSignedCertificate = false) {
        try {
            const url = `${ssl ? 'wss' : 'ws'}://${this.host}:${port}/xfs4iot/v1.0/`;
            return await new Promise((resolve, reject) => {
                let timeout = null;
                const retWs = new ws_1.WebSocket(url, { rejectUnauthorized: !allowSelfSignedCertificate });
                retWs.on('message', (msg) => {
                    const xfsMessage = JSON.parse(`${msg}`);
                    if (xfsMessage.header.type === fujitsu_xfs4iot_api_1.XfsMessageType.COMPLETION &&
                        xfsMessage.header.name === fujitsu_xfs4iot_api_1.ServicePublisherCommandType.GetServices &&
                        xfsMessage.payload.completionCode === fujitsu_xfs4iot_api_1.XfsCompletionCodeEnum.SUCCESS) {
                        logger.trace(`ServicePublisher del vendedor: ${xfsMessage.payload.vendorName}`);
                        if (xfsMessage.payload.services && xfsMessage.payload.services.length > 0) {
                            xfsMessage.payload.services.forEach((el, ind) => {
                                logger.trace(`    ${ind} -> ${el.serviceURI}`);
                            });
                        }
                        else {
                            logger.warn('ServicePublisher sin servicios expuestos');
                        }
                        if (timeout)
                            clearTimeout(timeout);
                        resolve(xfsMessage);
                    }
                    else if (xfsMessage.header.type === fujitsu_xfs4iot_api_1.XfsMessageType.COMPLETION &&
                        xfsMessage.header.name === fujitsu_xfs4iot_api_1.ServicePublisherCommandType.GetServices) {
                        logger.error(`ServicePublisher ha devuelto un resultado de error:
                            ${xfsMessage.payload.completionCode}[${xfsMessage.payload.errorCode}]:
                            ${xfsMessage.payload.errorDescription}`);
                        if (timeout)
                            clearTimeout(timeout);
                        reject(new Error('Comando GetServices ha devuelto error'));
                    }
                });
                retWs.on('open', () => {
                    logger.debug(`discoverServices::SSL[${ssl}]::port[${port}] connection stablished: ${url}`);
                    retWs.send(JSON.stringify(exports.DISCOVER_SERVICES_MSG));
                    timeout = setTimeout(() => {
                        logger.error(`Hemos esperado: ${exports.DISCOVER_SERVICES_MSG.payload.timeout} ms (timeout del comando ` +
                            'enviado) y no ha llegado el completion. Seguimos para adelante sin esperar mas.');
                        reject(new Error('Comando GetServices ha dado timeout'));
                    }, exports.DISCOVER_SERVICES_MSG.payload.timeout || DEFAULT_TIMEOUT);
                });
                retWs.on('error', (err) => {
                    if (err.message && !err.message.includes('ECONNREFUSED')) {
                        logger.error(`discoverServices::SSL[${ssl}]::port[${port}]: ` +
                            `${err.name} ${JSON.stringify(err.message)}`);
                    }
                    reject(new Error('Error del websocket'));
                });
            }).catch((err) => {
                if (err === null) {
                    // Sera un reject(null) de arriba
                }
                else if (err === 'ECONNREFUSED') {
                    logger.debug(`discoverServices::No hay conectividad con: ${url}`);
                }
                else {
                    logger.trace(`discoverServices::Error connection port ${port}. SSL = ${ssl}. Error = ${err}`);
                }
                return null;
            });
        }
        catch (err) {
            logger.error(`discoverServices::Error connection port ${port}. Error: ${err}`);
        }
        return null;
    }
}
exports.Xfs4IotServiceDiscovery = Xfs4IotServiceDiscovery;
//# sourceMappingURL=Xfs4IotServiceDiscovery.js.map