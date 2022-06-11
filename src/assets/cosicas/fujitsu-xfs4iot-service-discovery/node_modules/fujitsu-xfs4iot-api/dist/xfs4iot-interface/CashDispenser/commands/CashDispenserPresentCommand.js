"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresentPosition = exports.PresentErrorCode = exports.CashDispenserPresentCommand = exports.PresentPayloadPositionEnum = void 0;
const _1 = require(".");
const Core_1 = require("../../Core");
var PresentPayloadPositionEnum;
(function (PresentPayloadPositionEnum) {
    /** Default output position. */
    PresentPayloadPositionEnum["OUT_DEFAULT"] = "outDefault";
    /** Left output position. */
    PresentPayloadPositionEnum["OUT_LEFT"] = "outLeft";
    /** Right output position. */
    PresentPayloadPositionEnum["OUT_RIGHT"] = "outRight";
    /** Center output position. */
    PresentPayloadPositionEnum["OUT_CENTER"] = "outCenter";
    /** Top output position. */
    PresentPayloadPositionEnum["OUT_TOP"] = "outTop";
    /** Bottom output position. */
    PresentPayloadPositionEnum["OUT_BOTTOM"] = "outBottom";
    /** Front output position. */
    PresentPayloadPositionEnum["OUT_FRONT"] = "outFront";
    /** Rear output position. */
    PresentPayloadPositionEnum["OUT_REAR"] = "outRear";
})(PresentPayloadPositionEnum = exports.PresentPayloadPositionEnum || (exports.PresentPayloadPositionEnum = {}));
class CashDispenserPresentCommand {
    constructor(requestId, timeout) {
        this.header = {
            name: _1.CashDispenserCommandType.Present,
            type: Core_1.XfsMessageType.COMMAND,
            requestId,
        };
        this.payload = {
            timeout,
        };
    }
}
exports.CashDispenserPresentCommand = CashDispenserPresentCommand;
var PresentErrorCode;
(function (PresentErrorCode) {
    /** The shutter did not open when it should have. No items presented. */
    PresentErrorCode["SHUTTER_NOT_OPEN"] = "shutterNotOpen";
    /** The shutter is open when it should be closed. No items presented. */
    PresentErrorCode["SHUTTER_OPEN"] = "shutterOpen";
    /** There are no items on the stacker. */
    PresentErrorCode["NO_ITEMS"] = "noItems";
    /** The device is in an exchange state (see Storage.StartExchange). */
    PresentErrorCode["EXCHANGE_ACTIVE"] = "exchangeActive";
    /** There was an error during the present operation - no items were presented. */
    PresentErrorCode["PRESENT_ERROR_NO_ITEMS"] = "presentErrorNoItems";
    /** There was an error during the present operation - at least some of the items were presented. */
    PresentErrorCode["PRESENT_ERROR_ITEMS"] = "presentErrorItems";
    /** There was an error during the present operation - the position of the items is unknown. Intervention may be required to reconcile the cash amount totals. */
    PresentErrorCode["PRESENT_ERROR_UNKNOWN"] = "presentErrorUnknown";
    /** The position specified is not supported. */
    PresentErrorCode["UNSUPPORTED_POSITION"] = "unsupportedPosition";
})(PresentErrorCode = exports.PresentErrorCode || (exports.PresentErrorCode = {}));
/**
 * Supplies the input or output position as one of the following values. If not specified, the default position applies. Supported positions are reported in Common.Capabilities.
 */
var PresentPosition;
(function (PresentPosition) {
    /** Default input position. */
    PresentPosition["IN_DEFAULT"] = "inDefault";
    /** Left input position. */
    PresentPosition["IN_LEFT"] = "inLeft";
    /** Right input position. */
    PresentPosition["IN_RIGHT"] = "inRight";
    /** Center input position. */
    PresentPosition["IN_CENTER"] = "inCenter";
    /** Top input position. */
    PresentPosition["IN_TOP"] = "inTop";
    /** Bottom input position. */
    PresentPosition["IN_BOTTOM"] = "inBottom";
    /** Front input position. */
    PresentPosition["IN_FRONT"] = "inFront";
    /** Rear input position. */
    PresentPosition["IN_REAR"] = "inRear";
    /** Default output position. */
    PresentPosition["OUT_DEFAULT"] = "outDefault";
    /** Left output position. */
    PresentPosition["OUT_LEFT"] = "outLeft";
    /** Right output position. */
    PresentPosition["OUT_RIGHT"] = "outRight";
    /** Center output position. */
    PresentPosition["OUT_CENTER"] = "outCenter";
    /** Top output position. */
    PresentPosition["OUT_TOP"] = "outTop";
    /** Bottom output position. */
    PresentPosition["OUT_BOTTOM"] = "outBottom";
    /** Front output position. */
    PresentPosition["OUT_FRONT"] = "outFront";
    /** Rear output position. */
    PresentPosition["OUT_REAR"] = "outRear";
})(PresentPosition = exports.PresentPosition || (exports.PresentPosition = {}));
//# sourceMappingURL=CashDispenserPresentCommand.js.map