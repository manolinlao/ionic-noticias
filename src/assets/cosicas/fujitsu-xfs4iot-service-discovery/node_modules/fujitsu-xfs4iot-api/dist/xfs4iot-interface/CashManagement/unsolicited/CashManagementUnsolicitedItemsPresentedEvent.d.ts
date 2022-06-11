import { CashManagementUnsolicitedType } from '.';
import { XfsUnsolicitedMessage } from '../../Core';
export declare enum ItemsPresentedEventPayloadPositionEnum {
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
export interface ItemsPresentedEventPayloadPosition {
    /**
     * Supplies the input or output position as one of the following values. If not specified, the default position applies. Supported positions are reported in Common.Capabilities.
     *
     * See {@link ItemsPresentedEventPayloadPositionEnum}
     */
    position?: ItemsPresentedEventPayloadPositionEnum;
    /**
     * Specifies how many more bunches will be required to present the request. Following values are possible:
     *
     * <number> - The number of additional bunches to be presented.
     * unknown - More than one additional bunch is required but the precise number is unknown.
     * Property value constraints:
     *
     * pattern: ^unknown$|^[0-9]*$
     * default: "0"
     */
    additionalBunches?: string;
}
/**
 * This specifies that items have been presented to the user, and the shutter has been opened to allow the user to take the items.
 */
export interface CashManagementUnsolicitedItemsPresentedEventPayload {
    /**
     * See {@link ItemsPresentedEventPayloadPosition}
     */
    [key: string]: ItemsPresentedEventPayloadPosition;
}
export interface CashManagementUnsolicitedItemsPresentedEvent extends XfsUnsolicitedMessage<CashManagementUnsolicitedType.ItemsPresentedEvent, CashManagementUnsolicitedItemsPresentedEventPayload> {
}
