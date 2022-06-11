"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountStatusEnum = exports.CountReplenishmentStatusEnum = exports.CountErrorCode = exports.CountPositionEnum = void 0;
var CountPositionEnum;
(function (CountPositionEnum) {
    /** Default output position. */
    CountPositionEnum["OUT_DEFAULT"] = "outDefault";
    /** Left output position. */
    CountPositionEnum["OUT_LEFT"] = "outLeft";
    /** Right output position. */
    CountPositionEnum["OUT_RIGHT"] = "outRight";
    /** Center output position. */
    CountPositionEnum["OUT_CENTER"] = "outCenter";
    /** Top output position. */
    CountPositionEnum["OUT_TOP"] = "outTop";
    /** Bottom output position. */
    CountPositionEnum["OUT_BOTTOM"] = "outBottom";
    /** Front output position. */
    CountPositionEnum["OUT_FRONT"] = "outFront";
    /** Rear output position. */
    CountPositionEnum["OUT_REAR"] = "outRear";
})(CountPositionEnum = exports.CountPositionEnum || (exports.CountPositionEnum = {}));
var CountErrorCode;
(function (CountErrorCode) {
    /** A storage unit caused a problem. A Storage.StorageErrorEvent will be posted with the details. */
    CountErrorCode["CASH_UNIT_ERROR"] = "cashUnitError";
    /** The position specified is not supported. */
    CountErrorCode["UNSUPPORTED_POSITION"] = "unsupportedPosition";
    /** The safe door is open. This device requires the safe door to be closed in order to perform this operation. */
    CountErrorCode["SAFE_DOOR_OPEN"] = "safeDoorOpen";
    /** The device is in an exchange state (see Storage.StartExchange). */
    CountErrorCode["EXCHANGE_ACTIVE"] = "exchangeActive";
})(CountErrorCode = exports.CountErrorCode || (exports.CountErrorCode = {}));
var CountReplenishmentStatusEnum;
(function (CountReplenishmentStatusEnum) {
    /** The storage unit media is in a good state. */
    CountReplenishmentStatusEnum["OK"] = "ok";
    /** The storage unit is full. This is based on hardware detection, either on sensors or counts. */
    CountReplenishmentStatusEnum["FULL"] = "full";
    /** The storage unit is almost full (either sensor based or exceeded the highThreshold. */
    CountReplenishmentStatusEnum["HIGH"] = "high";
    /** The storage unit is almost empty (either sensor based or below the lowThreshold). */
    CountReplenishmentStatusEnum["LOW"] = "low";
    /** The storage unit is empty, or insufficient items in the storage unit are preventing further dispense operations. If the storage unit has hardwareSensors, this state is not set by counts. */
    CountReplenishmentStatusEnum["EMPTY"] = "empty";
})(CountReplenishmentStatusEnum = exports.CountReplenishmentStatusEnum || (exports.CountReplenishmentStatusEnum = {}));
var CountStatusEnum;
(function (CountStatusEnum) {
    /** The storage unit is in a good state. */
    CountStatusEnum["OK"] = "ok";
    /** The storage unit is inoperative. */
    CountStatusEnum["INOPERATIVE"] = "inoperative";
    /** The storage unit is missing. */
    CountStatusEnum["MISSING"] = "missing";
    /** The storage unit has not been configured for use. */
    CountStatusEnum["NOT_CONFIGURED"] = "notConfigured";
    /**
     * The storage unit has been inserted (including removal followed by a reinsertion) when the device was not in the exchange state - see Storage.StartExchange.
     * This storage unit cannot be used. Only applies to services which support the exchange state.
     */
    CountStatusEnum["MANIPULATED"] = "manipulated";
})(CountStatusEnum = exports.CountStatusEnum || (exports.CountStatusEnum = {}));
//# sourceMappingURL=CashDispenserCountCommand.js.map