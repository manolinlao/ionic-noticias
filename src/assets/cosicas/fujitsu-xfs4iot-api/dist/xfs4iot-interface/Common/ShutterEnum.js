"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShutterEnum = void 0;
var ShutterEnum;
(function (ShutterEnum) {
    /** The shutter is operational and is closed. */
    ShutterEnum["CLOSED"] = "closed";
    /** The shutter is operational and is open. */
    ShutterEnum["OPEN"] = "open";
    /** The shutter is jammed, but fully open. It is not operational. */
    ShutterEnum["JAMMED_OPEN"] = "jammedOpen";
    /** The shutter is jammed, but partially open. It is not operational. */
    ShutterEnum["JAMMED_PARTIALLY_OPEN"] = "jammedPartiallyOpen";
    /** The shutter is jammed, but fully closed. It is not operational. */
    ShutterEnum["JAMMED_CLOSED"] = "jammedClosed";
    /** The shutter is jammed, but its position is unknown. It is not operational. */
    ShutterEnum["JAMMED_UNKNOWN"] = "jammedUnknown";
    /** Due to a hardware error or other condition, the state of the shutter cannot be determined. */
    ShutterEnum["UNKNOWN"] = "unknown";
    /** The physical device has no shutter or shutter state reporting is not supported. */
    ShutterEnum["NOT_SUPPORTED"] = "notSupported";
})(ShutterEnum = exports.ShutterEnum || (exports.ShutterEnum = {}));
//# sourceMappingURL=ShutterEnum.js.map