export * from './xfs4iot-interface/Core';
export * from './xfs4iot-interface/Common';
export * from './xfs4iot-interface/ServicePublisher';
export * from './xfs4iot-interface/CardReader';
export * from './xfs4iot-interface/CashDispenser';
export * from './xfs4iot-interface/CashManagement';
export * from './xfs4iot-interface/Storage';
/**
 * El puerto 80 solo es para HTTP/WS, el 443 es solo para HTTPS/WSS.
 * Cuando una organización quiere levantar sus servicios, ha de intentar
 * abrir los puertos en el orden indicado por esta lista.
 * La idea detras de esto es que una maquina pueda tener servicios de hasta 12 proveedores distintos.
 */
export declare const DISCOVERY_HTTPS_PORTS: number[];
/**
 * Solo se puede usar http/ws (sin SSL) cuando el controller y los servicios
 * se encuentran fisicamente dentro del mismo cabinet unidos por cable.
 */
export declare const DISCOVERY_HTTP_PORTS: number[];
