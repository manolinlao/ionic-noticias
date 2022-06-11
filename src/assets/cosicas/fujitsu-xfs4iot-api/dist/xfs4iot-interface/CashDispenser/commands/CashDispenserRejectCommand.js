"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RejectErrorCode = void 0;
var RejectErrorCode;
(function (RejectErrorCode) {
    /** A storage unit caused a problem. A Storage.StorageErrorEvent will be posted with the details. */
    RejectErrorCode["CASH_UNIT_ERROR"] = "cashUnitError";
    /** There were no items to reject. */
    RejectErrorCode["NO_ITEMS"] = "noItems";
    /** The device is in an exchange state (see Storage.StartExchange). */
    RejectErrorCode["EXCHANGE_ACTIVE"] = "exchangeActive";
})(RejectErrorCode = exports.RejectErrorCode || (exports.RejectErrorCode = {}));
//# sourceMappingURL=CashDispenserRejectCommand.js.map