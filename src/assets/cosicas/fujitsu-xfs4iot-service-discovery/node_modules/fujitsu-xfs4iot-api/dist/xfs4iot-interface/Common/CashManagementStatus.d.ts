export declare enum SafeDoorEnum {
    /** Physical device has no safe door or safe door state reporting is not supported. */
    DOOR_NOT_SUPPORTED = "doorNotSupported",
    /** Safe door is open. */
    DOOR_OPEN = "doorOpen",
    /** Safe door is closed. */
    DOOR_CLOSED = "doorClosed",
    /** Due to a hardware error or other condition, the state of the safe door cannot be determined. */
    DOOR_UNKNOWN = "doorUnknown"
}
export declare enum DispenserEnum {
    /** All storage units present are in a good state. */
    OK = "ok",
    /** One or more of the storage units is in a low, empty, inoperative or manipulated condition. Items can still be dispensed from at least one of the storage units. */
    ATTENTION = "attention",
    /**
     * Due to a storage unit failure dispensing is impossible.
     * No items can be dispensed because all of the storage units are empty, missing, inoperative or in a manipulated condition.
     * This state may also occur when a reject/retract storage unit is full or no reject/retract storage unit is present, or when an application lock is set on every storage unit which can be locked.
     */
    STOP = "stop",
    /** Due to a hardware error or other condition, the state of the storage units cannot be determined. */
    UNKNOWN = "unknown"
}
export declare enum AcceptorEnum {
    /** All storage units present are in a good state. */
    OK = "ok",
    /** One or more of the storage units is in a high, full, inoperative or manipulated condition. Items can still be accepted into at least one of the storage units. */
    ATTENTION = "attention",
    /**
     * Due to a storage unit failure accepting is impossible.
     * No items can be accepted because all of the storage units are in a full, inoperative or manipulated condition.
     * This state may also occur when a retract storage unit is full or no retract storage unit is present,
     * or when an application lock is set on every storage unit, or when counterfeit or suspect items are to be automatically retained within storage units, but all of the designated storage units for storing them are full or inoperative.
     */
    STOP = "stop",
    /** Due to a hardware error or other condition, the state of the storage units cannot be determined. */
    UNKNOWN = "unknown"
}
export interface CashManagementStatus {
    /**
     * Supplies the state of the safe door.
     *
     * See {@link SafeDoorEnum}
     */
    safeDoor?: SafeDoorEnum;
    /**
     * Supplies the state of the storage units for dispensing cash.
     *
     * See {@link DispenserEnum}
     */
    dispenser?: DispenserEnum;
    /**
     * Supplies the state of the storage units for accepting cash.
     *
     * See {@link AcceptorEnum}
     */
    acceptor?: AcceptorEnum;
}
