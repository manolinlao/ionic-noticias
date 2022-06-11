import { CashDispenserCommand, CashDispenserCommandType } from '.';
import { XfsCompletionMessage, XfsCompletionMessagePayload } from '../../Core';
export declare enum CountPositionEnum {
    /** Default output position. */
    OUT_DEFAULT = "outDefault",
    /** Left output position. */
    OUT_LEFT = "outLeft",
    /** Right output position. */
    OUT_RIGHT = "outRight",
    /** Center output position. */
    OUT_CENTER = "outCenter",
    /** Top output position. */
    OUT_TOP = "outTop",
    /** Bottom output position. */
    OUT_BOTTOM = "outBottom",
    /** Front output position. */
    OUT_FRONT = "outFront",
    /** Rear output position. */
    OUT_REAR = "outRear"
}
export interface CountPayload {
    /**
     * Timeout in milliseconds for the command to complete. If set to 0, the command will not timeout but can be canceled.
     *
     * default: 0
     */
    timeout?: number;
    /**
     * Specifies the unit to empty or that all units are to be emptied. Following values are possible:
     *
     * all - All units are to be emptied.
     * <storage unit identifier> - The storage unit to be emptied as identifier.
     * Property value constraints:
     *
     * pattern: ^all$|^unit[0-9A-Za-z]+$
     */
    unit?: string;
    /**
     * Supplies the output position as one of the following values. Supported positions are reported in Common.Capabilities.
     *
     * default: "outDefault"
     *
     * See {@link CountPositionEnum}
     */
    position?: CountPositionEnum;
}
export interface CashDispenserCountCommand extends CashDispenserCommand<CashDispenserCommandType.Count, CountPayload> {
}
export declare enum CountErrorCode {
    /** A storage unit caused a problem. A Storage.StorageErrorEvent will be posted with the details. */
    CASH_UNIT_ERROR = "cashUnitError",
    /** The position specified is not supported. */
    UNSUPPORTED_POSITION = "unsupportedPosition",
    /** The safe door is open. This device requires the safe door to be closed in order to perform this operation. */
    SAFE_DOOR_OPEN = "safeDoorOpen",
    /** The device is in an exchange state (see Storage.StartExchange). */
    EXCHANGE_ACTIVE = "exchangeActive"
}
export declare enum CountReplenishmentStatusEnum {
    /** The storage unit media is in a good state. */
    OK = "ok",
    /** The storage unit is full. This is based on hardware detection, either on sensors or counts. */
    FULL = "full",
    /** The storage unit is almost full (either sensor based or exceeded the highThreshold. */
    HIGH = "high",
    /** The storage unit is almost empty (either sensor based or below the lowThreshold). */
    LOW = "low",
    /** The storage unit is empty, or insufficient items in the storage unit are preventing further dispense operations. If the storage unit has hardwareSensors, this state is not set by counts. */
    EMPTY = "empty"
}
export declare enum CountStatusEnum {
    /** The storage unit is in a good state. */
    OK = "ok",
    /** The storage unit is inoperative. */
    INOPERATIVE = "inoperative",
    /** The storage unit is missing. */
    MISSING = "missing",
    /** The storage unit has not been configured for use. */
    NOT_CONFIGURED = "notConfigured",
    /**
     * The storage unit has been inserted (including removal followed by a reinsertion) when the device was not in the exchange state - see Storage.StartExchange.
     * This storage unit cannot be used. Only applies to services which support the exchange state.
     */
    MANIPULATED = "manipulated"
}
export interface CountCountedCashUnit {
    /**
     * The number of items that were dispensed during the emptying of the storage unit.
     *
     * Property value constraints:
     *
     * minimum: 1
     */
    dispensed?: number;
    /**
     * The number of items that were counted during the emptying of the storage unit.
     *
     * Property value constraints:
     *
     * minimum: 1
     */
    counted?: number;
    /**
     * The state of the media in the unit if it can be determined.
     *
     * Note that overall status of the storage unit must be taken into account when deciding whether the storage unit is usable and whether replenishment status is applicable.
     * In particular, if the overall status is missing this will not be reported.
     *
     * See {@link CountReplenishmentStatusEnum}
     */
    replenishmentStatus?: CountReplenishmentStatusEnum;
    /**
     * The state of the unit.
     *
     * See {@link CountStatusEnum}
     */
    status?: CountStatusEnum;
}
export interface CountCountedCashUnits {
    /**
     * Counted storage unit object. Object name is the same as used in Storage.GetStorage.
     *
     * Property name constraints:
     *
     * pattern: ^unit[0-9A-Za-z]+$
     *
     * See {@link CountCountedCashUnit}
     */
    [key: string]: CountCountedCashUnit;
}
export interface CashDispenserCountCompletionMessagePayload extends XfsCompletionMessagePayload<CountErrorCode> {
    /**
     * List of counted storage unit objects.
     *
     * See {@link CountCountedCashUnits}
     */
    countedCashUnits?: CountCountedCashUnits;
}
export interface CashDispenserCountCompletionMessage extends XfsCompletionMessage<CashDispenserCommandType.Count, CountErrorCode, CashDispenserCountCompletionMessagePayload> {
}
