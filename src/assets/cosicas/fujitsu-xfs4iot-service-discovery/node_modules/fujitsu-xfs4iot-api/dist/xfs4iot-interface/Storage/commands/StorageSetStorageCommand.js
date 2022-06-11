"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetStorageErrorCode = exports.SetStoragePayloadCommand = void 0;
const _1 = require(".");
const Core_1 = require("../../Core");
class SetStoragePayloadCommand {
    constructor(requestId, timeout, storage) {
        this.requestId = requestId;
        this.timeout = timeout;
        this.storage = storage;
        this.header = {
            name: _1.StorageCommandType.SetStorage,
            requestId,
            type: Core_1.XfsMessageType.COMMAND,
        };
        this.payload = { timeout, storage };
    }
}
exports.SetStoragePayloadCommand = SetStoragePayloadCommand;
var SetStorageErrorCode;
(function (SetStorageErrorCode) {
    /** Invalid unit. */
    SetStorageErrorCode["INVALID_UNIT"] = "invalidUnit";
    /** The device is not in an exchange state and a request has been made to modify information which can only be modified in an exchange state. */
    SetStorageErrorCode["NO_EXCHANGE_ACTIVE"] = "noExchangeActive";
    /** A problem occurred with a storage unit. A Storage.StorageErrorEvent will be posted with the details. */
    SetStorageErrorCode["STORAGE_UNIT_ERROR"] = "storageUnitError";
})(SetStorageErrorCode = exports.SetStorageErrorCode || (exports.SetStorageErrorCode = {}));
//# sourceMappingURL=StorageSetStorageCommand.js.map