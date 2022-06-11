import { PositionStatusEnum, ShutterEnum, TransportEnum, TransportStatusEnum } from '.';
export declare enum CashAcceptorIntermediateStackerEnum {
    /** The intermediate stacker is empty. */
    EMPTY = "empty",
    /** The intermediate stacker is not empty. */
    NOT_EMPTY = "notEmpty",
    /** The intermediate stacker is full. This may also be reported during a cash-in transaction where a limit specified by CashAcceptor.CashInStart has been reached. */
    FULL = "full",
    /** Due to a hardware error or other condition, the state of the intermediate stacker cannot be determined. */
    UNKNOWN = "unknown",
    /** The physical device has no intermediate stacker. */
    NOT_SUPPORTED = "notSupported"
}
export declare enum StackerItemsEnum {
    /** Items on the intermediate stacker have been in customer access. If the device is a cash recycler then the items on the intermediate stacker may be there as a result of a previous cash-out operation. */
    CUSTOMER_ACCESS = "customerAccess",
    /** Items on the intermediate stacker have not been in customer access. */
    NO_CUSTOMER_ACCESS = "noCustomerAccess",
    /** It is not known if the items on the intermediate stacker have been in customer access. */
    ACCESS_UNKNOWN = "accessUnknown",
    /** There are no items on the intermediate stacker or the physical device has no intermediate stacker. */
    NO_ITEMS = "noItems"
}
export declare enum BanknoteReaderEnum {
    /** The banknote reader is in a good state. */
    OK = "ok",
    /** The banknote reader is inoperable. */
    INOPERABLE = "inoperable",
    /** Due to a hardware error or other condition, the state of the banknote reader cannot be determined. */
    UNKNOWN = "unknown",
    /** The physical device has no banknote reader. */
    NOT_SUPPORTED = "notSupported"
}
export declare enum CashAcceptorPositionEnum {
    /** Default input position. */
    IN_DEFAULT = "inDefault",
    /** Left input position. */
    IN_LEFT = "inLeft",
    /** Right input position. */
    IN_RIGHT = "inRight",
    /** Center input position. */
    IN_CENTER = "inCenter",
    /** Top input position. */
    IN_TOP = "inTop",
    /** Bottom input position. */
    IN_BOTTOM = "inBottom",
    /** Front input position. */
    IN_FRONT = "inFront",
    /** Rear input position. */
    IN_REAR = "inRear",
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
export interface CashAcceptorPosition {
    /**
     * Supplies the input or output position as one of the following values. If not specified, the default position applies. Supported positions are reported in Common.Capabilities.
     *
     * See {@link PositionEnum}
     */
    position?: CashAcceptorPositionEnum;
    /**
     * Supplies the state of the shutter.
     *
     * See {@link ShutterEnum}
     */
    shutter?: ShutterEnum;
    /**
     * The status of the input or output position.
     *
     * See {@link PositionStatusEnum}
     */
    positionStatus?: PositionStatusEnum;
    /**
     * Supplies the state of the transport mechanism. The transport is defined as any area leading to or from the position.
     *
     * See {@link TransportEnum}
     */
    transport?: TransportEnum;
    /**
     * Returns information regarding items which may be on the transport. If the device is a recycler device it is possible that the transport will not be empty due to a previous dispense operation.
     *
     * See {@link TransportStatusEnum}
     */
    transportStatus?: TransportStatusEnum;
}
export interface CashAcceptorStatus {
    /**
     * Supplies the state of the intermediate stacker.
     *
     * See {@link IntermediateStackerEnum}
     */
    intermediateStacker?: CashAcceptorIntermediateStackerEnum;
    /**
     * This field informs the application whether items on the intermediate stacker have been in customer access.
     *
     * See {@link StackerItemsEnum}
     */
    stackerItems?: StackerItemsEnum;
    /**
     * Supplies the state of the banknote reader.
     *
     * See {@link BanknoteReaderEnum}
     */
    banknoteReader?: BanknoteReaderEnum;
    /**
     * The drop box is an area within the Cash Acceptor where items which have caused a problem during an operation are stored.
     * This field specifies the status of the drop box. If true, some items are stored in the drop box due to a cash-in transaction which caused a problem.
     * If false, the drop box is empty or there is no drop box.
     */
    dropBox?: boolean;
    /**
     * Array of structures reporting status for each position from which items can be accepted.
     */
    positions?: CashAcceptorPosition[];
}
