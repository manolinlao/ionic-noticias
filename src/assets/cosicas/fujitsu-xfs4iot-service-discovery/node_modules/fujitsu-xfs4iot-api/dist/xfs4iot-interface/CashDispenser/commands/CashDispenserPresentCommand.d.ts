import { CashDispenserCommand, CashDispenserCommandType } from '.';
import { XfsCompletionMessage, XfsCompletionMessagePayload, XfsMessageHeader, XfsMessageType } from '../../Core';
export declare enum PresentPayloadPositionEnum {
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
export interface PresentPayload {
    /**
     * Timeout in milliseconds for the command to complete. If set to 0, the command will not timeout but can be canceled.
     *
     * default: 0
     */
    timeout?: number;
    /**
     * Supplies the output position as one of the following values. Supported positions are reported in Common.Capabilities.
     * {@link PresentPayloadPositionEnum}
     *
     * default: "outDefault"
     */
    position?: PresentPayloadPositionEnum;
}
export declare class CashDispenserPresentCommand implements CashDispenserCommand<CashDispenserCommandType.Present, PresentPayload> {
    header: XfsMessageHeader<XfsMessageType.COMMAND, CashDispenserCommandType.Present>;
    payload: PresentPayload;
    constructor(requestId: number, timeout?: number);
}
export declare enum PresentErrorCode {
    /** The shutter did not open when it should have. No items presented. */
    SHUTTER_NOT_OPEN = "shutterNotOpen",
    /** The shutter is open when it should be closed. No items presented. */
    SHUTTER_OPEN = "shutterOpen",
    /** There are no items on the stacker. */
    NO_ITEMS = "noItems",
    /** The device is in an exchange state (see Storage.StartExchange). */
    EXCHANGE_ACTIVE = "exchangeActive",
    /** There was an error during the present operation - no items were presented. */
    PRESENT_ERROR_NO_ITEMS = "presentErrorNoItems",
    /** There was an error during the present operation - at least some of the items were presented. */
    PRESENT_ERROR_ITEMS = "presentErrorItems",
    /** There was an error during the present operation - the position of the items is unknown. Intervention may be required to reconcile the cash amount totals. */
    PRESENT_ERROR_UNKNOWN = "presentErrorUnknown",
    /** The position specified is not supported. */
    UNSUPPORTED_POSITION = "unsupportedPosition"
}
/**
 * Supplies the input or output position as one of the following values. If not specified, the default position applies. Supported positions are reported in Common.Capabilities.
 */
export declare enum PresentPosition {
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
export interface CashDispenserPresentCompletionMessagePayload extends XfsCompletionMessagePayload<PresentErrorCode> {
    /**
     * Supplies the input or output position as one of the following values. If not specified, the default position applies. Supported positions are reported in Common.Capabilities.
     *
     * See {@link PresentPosition}
     */
    position?: PresentPosition;
    /**
     * Specifies how many more bunches will be required to present the request. Following values are possible:
     *      <number> - The number of additional bunches to be presented.
     *      unknown - More than one additional bunch is required but the precise number is unknown.
     * Property value constraints:
     *
     * pattern: ^unknown$|^[0-9]*$
     * default: "0"
     */
    additionalBunches?: string;
}
export interface CashDispenserPresentCompletionMessage extends XfsCompletionMessage<CashDispenserCommandType.Present, PresentErrorCode, CashDispenserPresentCompletionMessagePayload> {
}
