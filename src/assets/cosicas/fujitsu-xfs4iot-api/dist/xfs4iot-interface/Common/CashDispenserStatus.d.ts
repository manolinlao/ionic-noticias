import { PositionStatusEnum, ShutterEnum, TransportEnum, TransportStatusEnum } from '.';
export declare enum CashDispenserIntermediateStackerEnum {
    /** The intermediate stacker is empty. */
    EMPTY = "empty",
    /** The intermediate stacker is not empty. The items have not been in customer access. */
    NOT_EMPTY = "notEmpty",
    /** The intermediate stacker is not empty. The items have been in customer access. If the device is a recycler then the items on the intermediate stacker may be there as a result of a previous cash-in operation. */
    NOT_EMPTY_CUSTOMER = "notEmptyCustomer",
    /** The intermediate stacker is not empty. It is not known if the items have been in customer access. */
    NOT_EMPTY_UNKNOWN = "notEmptyUnknown",
    /** Due to a hardware error or other condition, the state of the intermediate stacker cannot be determined. */
    UNKNOWN = "unknown",
    /** The physical device has no intermediate stacker. */
    NOT_SUPPORTED = "notSupported"
}
export declare enum CashDispenserPositionEnum {
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
export interface CashDispenserPosition {
    /**
     * Supplies the output position as one of the following values
     *
     *  default: "outDefault"
     *
     *  See {@link PositionEnum}
     */
    position?: CashDispenserPositionEnum;
    /**
     * Supplies the state of the shutter.
     *
     * See {@link ShutterEnum}
     */
    shutter?: ShutterEnum;
    /**
     * Returns information regarding items which may be at the output position. If the device is a recycler it is possible that the output position will not be empty due to a previous cash-in operation
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
     * Returns information regarding items which may be on the transport. If the device is a recycler device it is possible that the transport will not be empty due to a previous cash-in operation.
     *
     * See {@link TransportStatusEnum}
     */
    transportStatus?: TransportStatusEnum;
}
export interface CashDispenserStatus {
    /**
     * Supplies the state of the intermediate stacker. These bills are typically present on the intermediate stacker as a result of a retract operation or because a dispense has been performed without a subsequent present
     *
     * See {@link IntermediateStackerEnum}
     */
    intermediateStacker?: CashDispenserIntermediateStackerEnum;
    /** Array of structures for each position to which items can be dispensed or presented. */
    positions?: CashDispenserPosition[];
}
