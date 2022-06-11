import { CashManagementCommand, CashManagementCommandType } from '.';
import { XfsCompletionMessage, XfsCompletionMessagePayload, XfsMessageHeader, XfsMessageType } from '../../Core';
export declare enum RetractPayloadOutputPositionEnum {
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
export declare enum RetractPayloadRetractAreaEnum {
    /** Retract the items to a retract storage unit. */
    RETRACT = "retract",
    /** Retract the items to the transport. */
    TRANSPORT = "transport",
    /** Retract the items to the intermediate stacker area. */
    STACKER = "stacker",
    /** Retract the items to a reject storage unit. */
    REJECT = "reject",
    /** Retract the items to the storage units which would be used during a Cash In transaction including recycling storage units. */
    ITEM_CASSETTE = "itemCassette",
    /** Retract the items to the storage units which would be used during a Cash In transaction but not including recycling storage units. */
    CASH_IN = "cashIn"
}
export interface RetractPayload {
    /**
     * Timeout in milliseconds for the command to complete. If set to 0, the command will not timeout but can be
     * canceled.
     *
     * default: 0
     */
    timeout?: number;
    /**
     * Supplies the output position as one of the following values. Supported positions are reported in
     * Common.Capabilities.
     *
     * default: "outDefault"
     *
     * See {@link RetractPayloadOutputPositionEnum}
     */
    outputPosition?: RetractPayloadOutputPositionEnum;
    /**
     * This value specifies the area to which the items are to be retracted.
     *
     * See {@link RetractPayloadRetractAreaEnum}
     */
    retractArea?: RetractPayloadRetractAreaEnum;
    /**
     * If retractArea is set to retract this property defines the position inside the retract storage units into which the
     * cash is to be retracted. index starts with a value of 1 for the first retract position and increments by one for each
     * subsequent position. If there are several retract storage units (of type retractCassette in Storage.GetStorage),
     * index would be incremented from the first position of the first retract storage unit to the last position of the last
     * retract storage unit. The maximum value of index is the sum of maximum of each retract storage unit. If
     * retractArea is not set to retract the value of this property is ignored.
     */
    index?: number;
}
export declare class CashManagementRetractCommand implements CashManagementCommand<CashManagementCommandType.Retract, RetractPayload> {
    header: XfsMessageHeader<XfsMessageType.COMMAND, CashManagementCommandType.Retract>;
    payload: RetractPayload;
    constructor(requestId: number, timeout?: number, outputPosition?: RetractPayloadOutputPositionEnum, retractArea?: RetractPayloadRetractAreaEnum, index?: number);
}
export declare enum RetractErrorCode {
    /** A problem occurred with a storage unit. A Storage.StorageErrorEvent will be sent with the details. */
    CASH_UNIT_ERROR = "cashUnitError",
    /** There were no items to retract. */
    NO_ITEMS = "noItems",
    /** The device is in an exchange state. */
    EXCHANGE_ACTIVE = "exchangeActive",
    /** The shutter failed to close. */
    SHUTTER_NOT_CLOSED = "shutterNotClosed",
    /** Items were present at the output position at the start of the operation, but were removed before the operation was complete - some or all of the items were not retracted. */
    ITEMS_TAKEN = "itemsTaken",
    /** The index is not supported. */
    INVALID_RETRACT_POSITION = "invalidRetractPosition",
    /** The retract area specified in retractArea is not supported. */
    NOT_RETRACT_AREA = "notRetractArea",
    /** Foreign items have been detected inside the input position. */
    FOREIGN_ITEMS_DETECTED = "foreignItemsDetected",
    /** Some or all of the items were not retracted for a reason not co */
    INCOMPLETE_RETRACT = "incompleteRetract"
}
export interface RetractStorageUnitBox {
    /** Count of genuine cash items which are fit for recycling. */
    fit?: number;
    /** Count of genuine cash items which are unfit for recycling. */
    unfit?: number;
    /** Count of suspected counterfeit cash items. */
    suspect?: number;
    /** Count of counterfeit cash items. */
    counterfeit?: number;
    /** Count of cash items which have been identified as ink stained. */
    inked?: number;
}
export interface RetractStorageUnit {
    /**
     * Number of cash retract operations which resulted in items entering this storage unit. This can be used where devices do not have the capability to count or validate items after presentation.
     */
    retractOperations?: number;
    /**
     * The items deposited in the storage unit during a Cash In transaction.
     */
    deposited?: {
        /**
         * Count of unrecognized items handled by the cash interface.
         */
        /**
         * Counts of a given cash item (as reported by CashManagement.GetBankNoteTypes) broken down by classification.
         *
         * See {@link RetractStorageUnitBox}
         */
        [key: string]: number | RetractStorageUnitBox;
    };
    /**
     * The items retracted into the storage unit after being accessible to a customer.
     * This may be inaccurate or not counted if items are not counted or re-validated after presentation, the number of retract operations is also reported separately in retractOperations.
     */
    retracted?: {
        /**
         * Count of unrecognized items handled by the cash interface.
         */
        /**
         * Counts of a given cash item (as reported by CashManagement.GetBankNoteTypes) broken down by classification.
         *
         * See {@link RetractStorageUnitBox}
         */
        [key: string]: number | RetractStorageUnitBox;
    };
    /**
     * The items deposited in this storage unit originating from another storage unit but rejected due to being invalid. This count may be inaccurate due to the nature of rejected items.
     */
    rejected?: {
        /**
         * Count of unrecognized items handled by the cash interface.
         */
        /**
         * Counts of a given cash item (as reported by CashManagement.GetBankNoteTypes) broken down by classification.
         *
         * See {@link RetractStorageUnitBox}
         */
        [key: string]: number | RetractStorageUnitBox;
    };
    /**
     * The items deposited in this storage unit originating from another storage unit but not rejected.
     */
    distributed?: {
        /**
         * Count of unrecognized items handled by the cash interface.
         */
        /**
         * Counts of a given cash item (as reported by CashManagement.GetBankNoteTypes) broken down by classification.
         *
         * See {@link RetractStorageUnitBox}
         */
        [key: string]: number | RetractStorageUnitBox;
    };
    /**
     * The items which were intended to be deposited in this storage unit but are not yet deposited.
     * Typical use case for this property is tracking items after a jam during CashAcceptor.CashInEnd. This is not reset if initial is set for this unit by Storage.GetStorage.
     */
    transport?: {
        /**
         * Count of unrecognized items handled by the cash interface.
         */
        /**
         * Counts of a given cash item (as reported by CashManagement.GetBankNoteTypes) broken down by classification.
         *
         * See {@link RetractStorageUnitBox}
         */
        [key: string]: number | RetractStorageUnitBox;
    };
}
export interface RetractStorage {
    /**
     * List of items moved to this storage unit by this transaction or command. The property name is the same as
     * reported by Storage.GetStorage.
     * Property name constraints:
     * pattern: ^unit[0-9A-Za-z]+$
     *
     * See {@link RetractStorageUnit}
     */
    [key: string]: RetractStorageUnit;
}
export interface CashManagementRetractCompletionMessagePayload extends XfsCompletionMessagePayload<RetractErrorCode> {
    /**
     * List of storage units that have taken items and the type of items they have taken during the current command.
     *
     * See {@link RetractStorage}
     */
    storage?: RetractStorage;
}
export interface CashManagementRetractCompletionMessage extends XfsCompletionMessage<CashManagementCommandType.Retract, RetractErrorCode, CashManagementRetractCompletionMessagePayload> {
}
