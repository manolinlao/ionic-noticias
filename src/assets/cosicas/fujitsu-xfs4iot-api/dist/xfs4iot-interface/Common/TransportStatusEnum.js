"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportStatusEnum = void 0;
var TransportStatusEnum;
(function (TransportStatusEnum) {
    /** The transport is empty. */
    TransportStatusEnum["EMPTY"] = "empty";
    /** The transport is not empty. */
    TransportStatusEnum["NOT_EMPTY"] = "notEmpty";
    /** Items which a customer has had access to are on the transport. */
    TransportStatusEnum["NOT_EMPTY_CUSTOMER"] = "notEmptyCustomer";
    /** Due to a hardware error or other condition it is not known whether there are items on the transport. */
    TransportStatusEnum["UNKNOWN"] = "unknown";
    /** The device is not capable of reporting whether items are on the transport. */
    TransportStatusEnum["NOT_SUPPORTED"] = "notSupported";
})(TransportStatusEnum = exports.TransportStatusEnum || (exports.TransportStatusEnum = {}));
//# sourceMappingURL=TransportStatusEnum.js.map