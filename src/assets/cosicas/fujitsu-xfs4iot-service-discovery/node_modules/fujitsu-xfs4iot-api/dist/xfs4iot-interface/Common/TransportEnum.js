"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportEnum = void 0;
var TransportEnum;
(function (TransportEnum) {
    /** The transport is in a good state. */
    TransportEnum["OK"] = "ok";
    /** The transport is inoperative due to a hardware failure or media jam. */
    TransportEnum["INOPERATIVE"] = "inoperative";
    /** Due to a hardware error or other condition the state of the transport cannot be determined. */
    TransportEnum["UNKNOWN"] = "unknown";
    /** The physical device has no transport or transport state reporting is not supported. */
    TransportEnum["NOT_SUPPORTED"] = "notSupported";
})(TransportEnum = exports.TransportEnum || (exports.TransportEnum = {}));
//# sourceMappingURL=TransportEnum.js.map