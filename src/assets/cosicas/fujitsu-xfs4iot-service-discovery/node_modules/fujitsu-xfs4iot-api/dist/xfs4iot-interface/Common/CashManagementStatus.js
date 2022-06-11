"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcceptorEnum = exports.DispenserEnum = exports.SafeDoorEnum = void 0;
var SafeDoorEnum;
(function (SafeDoorEnum) {
    /** Physical device has no safe door or safe door state reporting is not supported. */
    SafeDoorEnum["DOOR_NOT_SUPPORTED"] = "doorNotSupported";
    /** Safe door is open. */
    SafeDoorEnum["DOOR_OPEN"] = "doorOpen";
    /** Safe door is closed. */
    SafeDoorEnum["DOOR_CLOSED"] = "doorClosed";
    /** Due to a hardware error or other condition, the state of the safe door cannot be determined. */
    SafeDoorEnum["DOOR_UNKNOWN"] = "doorUnknown";
})(SafeDoorEnum = exports.SafeDoorEnum || (exports.SafeDoorEnum = {}));
var DispenserEnum;
(function (DispenserEnum) {
    /** All storage units present are in a good state. */
    DispenserEnum["OK"] = "ok";
    /** One or more of the storage units is in a low, empty, inoperative or manipulated condition. Items can still be dispensed from at least one of the storage units. */
    DispenserEnum["ATTENTION"] = "attention";
    /**
     * Due to a storage unit failure dispensing is impossible.
     * No items can be dispensed because all of the storage units are empty, missing, inoperative or in a manipulated condition.
     * This state may also occur when a reject/retract storage unit is full or no reject/retract storage unit is present, or when an application lock is set on every storage unit which can be locked.
     */
    DispenserEnum["STOP"] = "stop";
    /** Due to a hardware error or other condition, the state of the storage units cannot be determined. */
    DispenserEnum["UNKNOWN"] = "unknown";
})(DispenserEnum = exports.DispenserEnum || (exports.DispenserEnum = {}));
var AcceptorEnum;
(function (AcceptorEnum) {
    /** All storage units present are in a good state. */
    AcceptorEnum["OK"] = "ok";
    /** One or more of the storage units is in a high, full, inoperative or manipulated condition. Items can still be accepted into at least one of the storage units. */
    AcceptorEnum["ATTENTION"] = "attention";
    /**
     * Due to a storage unit failure accepting is impossible.
     * No items can be accepted because all of the storage units are in a full, inoperative or manipulated condition.
     * This state may also occur when a retract storage unit is full or no retract storage unit is present,
     * or when an application lock is set on every storage unit, or when counterfeit or suspect items are to be automatically retained within storage units, but all of the designated storage units for storing them are full or inoperative.
     */
    AcceptorEnum["STOP"] = "stop";
    /** Due to a hardware error or other condition, the state of the storage units cannot be determined. */
    AcceptorEnum["UNKNOWN"] = "unknown";
})(AcceptorEnum = exports.AcceptorEnum || (exports.AcceptorEnum = {}));
//# sourceMappingURL=CashManagementStatus.js.map