"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplenishmentStatusEnum = exports.CapabilitiesTypeEnum = exports.CashStatusOperation = exports.CashStatusReplenishment = exports.CashStatusAccuracy = exports.UnitStatusEnum = exports.GetStoragePayloadCommand = void 0;
const _1 = require(".");
const Core_1 = require("../../Core");
class GetStoragePayloadCommand {
    constructor(requestId, timeout) {
        this.requestId = requestId;
        this.timeout = timeout;
        this.header = {
            name: _1.StorageCommandType.GetStorage,
            requestId,
            type: Core_1.XfsMessageType.COMMAND,
        };
        this.payload = { timeout };
    }
}
exports.GetStoragePayloadCommand = GetStoragePayloadCommand;
var UnitStatusEnum;
(function (UnitStatusEnum) {
    /** The storage unit is in a good state. */
    UnitStatusEnum["OK"] = "ok";
    /** The storage unit is inoperative. */
    UnitStatusEnum["INOPERATIVE"] = "inoperative";
    /** The storage unit is missing. */
    UnitStatusEnum["MISSING"] = "missing";
    /** The storage unit has not been configured for use. */
    UnitStatusEnum["NOT_CONFIGURED"] = "notConfigured";
    /**
     * The storage unit has been inserted (including removal followed by a reinsertion) when the device was not in the exchange state - see Storage.StartExchange.
     * This storage unit cannot be used. Only applies to services which support the exchange state.
     */
    UnitStatusEnum["MANIPULATED"] = "manipulated";
})(UnitStatusEnum = exports.UnitStatusEnum || (exports.UnitStatusEnum = {}));
var CashStatusAccuracy;
(function (CashStatusAccuracy) {
    /** The hardware is not capable of determining the accuracy of count. */
    CashStatusAccuracy["NOT_SUPPORTED"] = "notSupported";
    /** The count is expected to be accurate. The notes were previously counted and there have since been no events that might have introduced inaccuracy. */
    CashStatusAccuracy["ACCURATE"] = "accurate";
    /** The count is expected to be accurate. The counts were previously set and there have since been no events that might have introduced inaccuracy. */
    CashStatusAccuracy["ACCURATE_SET"] = "accurateSet";
    /** The count is likely to be inaccurate. A jam, picking fault, or some other event may have resulted in a counting inaccuracy. */
    CashStatusAccuracy["INACCURATE"] = "inaccurate";
    /** The accuracy of count cannot be determined. This may be due to storage unit insertion or some other hardware event. */
    CashStatusAccuracy["UNKNOWN"] = "unknown";
})(CashStatusAccuracy = exports.CashStatusAccuracy || (exports.CashStatusAccuracy = {}));
var CashStatusReplenishment;
(function (CashStatusReplenishment) {
    /** The storage unit media is in a good state. */
    CashStatusReplenishment["OK"] = "ok";
    /** The storage unit is full. This is based on hardware detection, either on sensors or counts. */
    CashStatusReplenishment["FULL"] = "full";
    /** The storage unit is almost full (either sensor based or exceeded the highThreshold. */
    CashStatusReplenishment["HIGH"] = "high";
    /** The storage unit is almost empty (either sensor based or below the lowThreshold). */
    CashStatusReplenishment["LOW"] = "low";
    /** The storage unit is empty, or insufficient items in the storage unit are preventing further dispense operations. If the storage unit has hardwareSensors, this state is not set by counts. */
    CashStatusReplenishment["EMPTY"] = "empty";
})(CashStatusReplenishment = exports.CashStatusReplenishment || (exports.CashStatusReplenishment = {}));
var CashStatusOperation;
(function (CashStatusOperation) {
    /** Dispense operations are possible and deposit operations are not possible on this recycling storage unit. */
    CashStatusOperation["DISPENSE_INOPERATIVE"] = "dispenseInoperative";
    /** Deposit operations are possible and dispense operations are not possible on this recycling storage unit. */
    CashStatusOperation["DEPOSIT_INOPERATIVE"] = "depositInoperative";
})(CashStatusOperation = exports.CashStatusOperation || (exports.CashStatusOperation = {}));
var CapabilitiesTypeEnum;
(function (CapabilitiesTypeEnum) {
    /** The storage unit can retain cards. */
    CapabilitiesTypeEnum["RETAIN"] = "retain";
    /** The storage unit can dispense cards. */
    CapabilitiesTypeEnum["DISPENSE"] = "dispense";
    /** The storage unit can be used to temporarily store a card allowing another card to enter the transport. */
    CapabilitiesTypeEnum["PARK"] = "park";
})(CapabilitiesTypeEnum = exports.CapabilitiesTypeEnum || (exports.CapabilitiesTypeEnum = {}));
var ReplenishmentStatusEnum;
(function (ReplenishmentStatusEnum) {
    /** The storage unit is in a good state. */
    ReplenishmentStatusEnum["OK"] = "ok";
    /** The storage unit is full. */
    ReplenishmentStatusEnum["FULL"] = "full";
    /** The storage unit is almost full (either sensor based or above the threshold). */
    ReplenishmentStatusEnum["HIGH"] = "high";
    /** The storage unit is almost empty (either sensor based or below the threshold). */
    ReplenishmentStatusEnum["LOW"] = "low";
    /** The storage unit is empty. */
    ReplenishmentStatusEnum["EMPTY"] = "empty";
})(ReplenishmentStatusEnum = exports.ReplenishmentStatusEnum || (exports.ReplenishmentStatusEnum = {}));
//# sourceMappingURL=StorageGetStorageCommand.js.map