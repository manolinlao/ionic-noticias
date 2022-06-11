"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonExchangeEnum = void 0;
var CommonExchangeEnum;
(function (CommonExchangeEnum) {
    /** Exchange is not supported on this service. */
    CommonExchangeEnum["NOT_SUPPORTED"] = "notSupported";
    /** Exchange is active on this service. Commands which interact with the device may be rejected with an error code as appropriate. */
    CommonExchangeEnum["ACTIVE"] = "active";
    /** Exchange is not active on this service. */
    CommonExchangeEnum["INACTIVE"] = "inactive";
})(CommonExchangeEnum = exports.CommonExchangeEnum || (exports.CommonExchangeEnum = {}));
//# sourceMappingURL=CommonExchangeEnum.js.map