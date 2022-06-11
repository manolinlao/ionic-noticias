import { WebSocket } from 'ws';
import { ServicePublisherGetServicesCompletionMessage, ServicePublisherGetServicesCommand } from 'fujitsu-xfs4iot-api';
export declare const DISCOVER_SERVICES_MSG: ServicePublisherGetServicesCommand;
/**
 * Class to discover publisher services of the xfs4iot devices.
 * It scans every port of the Xfs4Iot standard, to check wether exist a ServicePublisher or not.
 *
 * This class allows, calling the method discoverPublisherEndpoints(allowSelfSignedCertificate = false),
 * to get a WebSocket list with al ServicePublishers.
 */
export declare class Xfs4IotServiceDiscovery {
    private host;
    /**
     * Con cada peticion see incrementara en 1 el id,
     * para tener trazabilidad y rellenar los campos requestId de los mensajes
     */
    clientId: number;
    services: {
        [service: string]: {
            ws: WebSocket;
        };
    };
    constructor(host: string);
    discoverPublisherEndpoints(allowSelfSignedCertificate?: boolean): Promise<ServicePublisherGetServicesCompletionMessage[]>;
    private discoverHttp;
    private discoverHttps;
    private discoverServices;
}
