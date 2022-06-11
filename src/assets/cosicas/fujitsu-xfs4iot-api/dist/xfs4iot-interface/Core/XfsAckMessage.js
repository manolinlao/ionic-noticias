"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XfsAckStatusEnum = void 0;
/**
 * One of the status codes listed below. The status codes are intentionally defined to be very simple and not cover all cases.
 * Extra information about exactly what caused a failure can be included in errorDescription non-standard debugging properties in the acknowledge message.
 */
var XfsAckStatusEnum;
(function (XfsAckStatusEnum) {
    /** The command has been accepted for execution and will complete with a completion message. */
    XfsAckStatusEnum["OK"] = "ok";
    /** Message cannot be decoded. */
    XfsAckStatusEnum["INVALID_MESSAGE"] = "invalidMessage";
    /** requestId is not greater than 0, or not greater than the previous requestId. */
    XfsAckStatusEnum["INVALID_REQUEST_ID"] = "invalidRequestID";
    /** TThere are currently too many requests queued by the service and the service cannot queue any more. */
    XfsAckStatusEnum["TOO_MANY_REQUESTS"] = "tooManyRequests";
})(XfsAckStatusEnum = exports.XfsAckStatusEnum || (exports.XfsAckStatusEnum = {}));
//# sourceMappingURL=XfsAckMessage.js.map