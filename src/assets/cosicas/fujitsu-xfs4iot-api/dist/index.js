"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DISCOVERY_HTTP_PORTS = exports.DISCOVERY_HTTPS_PORTS = void 0;
/* eslint-disable no-magic-numbers */
__exportStar(require("./xfs4iot-interface/Core"), exports);
__exportStar(require("./xfs4iot-interface/Common"), exports);
__exportStar(require("./xfs4iot-interface/ServicePublisher"), exports);
__exportStar(require("./xfs4iot-interface/CardReader"), exports);
__exportStar(require("./xfs4iot-interface/CashDispenser"), exports);
__exportStar(require("./xfs4iot-interface/CashManagement"), exports);
__exportStar(require("./xfs4iot-interface/Storage"), exports);
const CUSTOM_XFS_PORTS = [5846, 5847, 5848, 5849, 5850, 5851, 5852, 5853, 5854, 5855, 5856];
/**
 * El puerto 80 solo es para HTTP/WS, el 443 es solo para HTTPS/WSS.
 * Cuando una organización quiere levantar sus servicios, ha de intentar
 * abrir los puertos en el orden indicado por esta lista.
 * La idea detras de esto es que una maquina pueda tener servicios de hasta 12 proveedores distintos.
 */
exports.DISCOVERY_HTTPS_PORTS = [443].concat(CUSTOM_XFS_PORTS);
/**
 * Solo se puede usar http/ws (sin SSL) cuando el controller y los servicios
 * se encuentran fisicamente dentro del mismo cabinet unidos por cable.
 */
exports.DISCOVERY_HTTP_PORTS = [80].concat(CUSTOM_XFS_PORTS);
//# sourceMappingURL=index.js.map