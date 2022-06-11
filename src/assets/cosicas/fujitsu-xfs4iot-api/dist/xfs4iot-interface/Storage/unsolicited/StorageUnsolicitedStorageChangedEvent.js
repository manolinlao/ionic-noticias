"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageChangedEventReplStatus = exports.StorageChangedEventCardCpbltTypeEnum = exports.StorageChangedEventOpStatusEnum = exports.StorageChangedEventStatusEnum = exports.StorageChangedEventAccuracyEnum = exports.StorageChangedEventPayloadStatusEnum = void 0;
var StorageChangedEventPayloadStatusEnum;
(function (StorageChangedEventPayloadStatusEnum) {
    /** The storage unit is in a good state. */
    StorageChangedEventPayloadStatusEnum["OK"] = "ok";
    /** The storage unit is inoperative. */
    StorageChangedEventPayloadStatusEnum["INOPERATIVE"] = "inoperative";
    /** The storage unit is missing. */
    StorageChangedEventPayloadStatusEnum["MISSING"] = "missing";
    /** The storage unit has not been configured for use. */
    StorageChangedEventPayloadStatusEnum["NOT_CONFIGURED"] = "notConfigured";
    /**
     * The storage unit has been inserted (including removal followed by a reinsertion) when the device was not in the exchange state - see Storage.StartExchange.
     * This storage unit cannot be used. Only applies to services which support the exchange state.
     */
    StorageChangedEventPayloadStatusEnum["MANIPULATED"] = "manipulated";
})(StorageChangedEventPayloadStatusEnum = exports.StorageChangedEventPayloadStatusEnum || (exports.StorageChangedEventPayloadStatusEnum = {}));
var StorageChangedEventAccuracyEnum;
(function (StorageChangedEventAccuracyEnum) {
    /** The hardware is not capable of determining the accuracy of count. */
    StorageChangedEventAccuracyEnum["NOT_SUPPORTED"] = "notSupported";
    /** The count is expected to be accurate. The notes were previously counted and there have since been no events that might have introduced inaccuracy. */
    StorageChangedEventAccuracyEnum["ACCURATE"] = "accurate";
    /** The count is expected to be accurate. The counts were previously set and there have since been no events that might have introduced inaccuracy. */
    StorageChangedEventAccuracyEnum["ACCURATE_SET"] = "accurateSet";
    /** The count is likely to be inaccurate. A jam, picking fault, or some other event may have resulted in a counting inaccuracy. */
    StorageChangedEventAccuracyEnum["INACCURATE"] = "inaccurate";
    /** The accuracy of count cannot be determined. This may be due to storage unit insertion or some other hardware event. */
    StorageChangedEventAccuracyEnum["UNKNOWN"] = "unknown";
})(StorageChangedEventAccuracyEnum = exports.StorageChangedEventAccuracyEnum || (exports.StorageChangedEventAccuracyEnum = {}));
var StorageChangedEventStatusEnum;
(function (StorageChangedEventStatusEnum) {
    /** The storage unit media is in a good state. */
    StorageChangedEventStatusEnum["OK"] = "ok";
    /** The storage unit is full. This is based on hardware detection, either on sensors or counts. */
    StorageChangedEventStatusEnum["FULL"] = "full";
    /** The storage unit is almost full (either sensor based or exceeded the highThreshold. */
    StorageChangedEventStatusEnum["HIGH"] = "high";
    /** The storage unit is almost empty (either sensor based or below the lowThreshold). */
    StorageChangedEventStatusEnum["LOW"] = "low";
    /** The storage unit is empty, or insufficient items in the storage unit are preventing further dispense operations. If the storage unit has hardwareSensors, this state is not set by counts. */
    StorageChangedEventStatusEnum["EMPTY"] = "empty";
})(StorageChangedEventStatusEnum = exports.StorageChangedEventStatusEnum || (exports.StorageChangedEventStatusEnum = {}));
var StorageChangedEventOpStatusEnum;
(function (StorageChangedEventOpStatusEnum) {
    /** Dispense operations are possible and deposit operations are not possible on this recycling storage unit. */
    StorageChangedEventOpStatusEnum["DISPENSE_INOPERATIVE"] = "dispenseInoperative";
    /** Deposit operations are possible and dispense operations are not possible on this recycling storage unit. */
    StorageChangedEventOpStatusEnum["DEPOSIT_INOPERATIVE"] = "depositInoperative";
})(StorageChangedEventOpStatusEnum = exports.StorageChangedEventOpStatusEnum || (exports.StorageChangedEventOpStatusEnum = {}));
var StorageChangedEventCardCpbltTypeEnum;
(function (StorageChangedEventCardCpbltTypeEnum) {
    /** The storage unit can retain cards. */
    StorageChangedEventCardCpbltTypeEnum["RETAIN"] = "retain";
    /** The storage unit can dispense cards. */
    StorageChangedEventCardCpbltTypeEnum["DISPENSE"] = "dispense";
    /** The storage unit can be used to temporarily store a card allowing another card to enter the transport. */
    StorageChangedEventCardCpbltTypeEnum["PARK"] = "park";
})(StorageChangedEventCardCpbltTypeEnum = exports.StorageChangedEventCardCpbltTypeEnum || (exports.StorageChangedEventCardCpbltTypeEnum = {}));
var StorageChangedEventReplStatus;
(function (StorageChangedEventReplStatus) {
    /** The storage unit is in a good state. */
    StorageChangedEventReplStatus["OK"] = "ok";
    /** The storage unit is full. */
    StorageChangedEventReplStatus["FULL"] = "full";
    /** The storage unit is almost full (either sensor based or above the threshold) */
    StorageChangedEventReplStatus["HIGH"] = "high";
    /** The storage unit is almost empty (either sensor based or below the threshold). */
    StorageChangedEventReplStatus["LOW"] = "low";
    /** The storage unit is empty */
    StorageChangedEventReplStatus["EMPTY"] = "empty";
})(StorageChangedEventReplStatus = exports.StorageChangedEventReplStatus || (exports.StorageChangedEventReplStatus = {}));
//# sourceMappingURL=StorageUnsolicitedStorageChangedEvent.js.map