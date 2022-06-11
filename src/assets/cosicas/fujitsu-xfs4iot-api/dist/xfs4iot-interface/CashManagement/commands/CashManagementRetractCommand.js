"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetractErrorCode = exports.CashManagementRetractCommand = exports.RetractPayloadRetractAreaEnum = exports.RetractPayloadOutputPositionEnum = void 0;
const _1 = require(".");
const Core_1 = require("../../Core");
var RetractPayloadOutputPositionEnum;
(function (RetractPayloadOutputPositionEnum) {
    /** Default output position. */
    RetractPayloadOutputPositionEnum["OUT_DEFAULT"] = "outDefault";
    /** Left output position. */
    RetractPayloadOutputPositionEnum["OUT_LEFT"] = "outLeft";
    /** Right output position. */
    RetractPayloadOutputPositionEnum["OUT_RIGHT"] = "outRight";
    /** Center output position. */
    RetractPayloadOutputPositionEnum["OUT_CENTER"] = "outCenter";
    /** Top output position. */
    RetractPayloadOutputPositionEnum["OUT_TOP"] = "outTop";
    /** Bottom output position. */
    RetractPayloadOutputPositionEnum["OUT_BOTTOM"] = "outBottom";
    /** Front output position. */
    RetractPayloadOutputPositionEnum["OUT_FRONT"] = "outFront";
    /** Rear output position. */
    RetractPayloadOutputPositionEnum["OUT_REAR"] = "outRear";
})(RetractPayloadOutputPositionEnum = exports.RetractPayloadOutputPositionEnum || (exports.RetractPayloadOutputPositionEnum = {}));
var RetractPayloadRetractAreaEnum;
(function (RetractPayloadRetractAreaEnum) {
    /** Retract the items to a retract storage unit. */
    RetractPayloadRetractAreaEnum["RETRACT"] = "retract";
    /** Retract the items to the transport. */
    RetractPayloadRetractAreaEnum["TRANSPORT"] = "transport";
    /** Retract the items to the intermediate stacker area. */
    RetractPayloadRetractAreaEnum["STACKER"] = "stacker";
    /** Retract the items to a reject storage unit. */
    RetractPayloadRetractAreaEnum["REJECT"] = "reject";
    /** Retract the items to the storage units which would be used during a Cash In transaction including recycling storage units. */
    RetractPayloadRetractAreaEnum["ITEM_CASSETTE"] = "itemCassette";
    /** Retract the items to the storage units which would be used during a Cash In transaction but not including recycling storage units. */
    RetractPayloadRetractAreaEnum["CASH_IN"] = "cashIn";
})(RetractPayloadRetractAreaEnum = exports.RetractPayloadRetractAreaEnum || (exports.RetractPayloadRetractAreaEnum = {}));
class CashManagementRetractCommand {
    constructor(requestId, timeout, outputPosition, retractArea, index) {
        this.header = {
            name: _1.CashManagementCommandType.Retract,
            type: Core_1.XfsMessageType.COMMAND,
            requestId,
        };
        this.payload = {
            timeout,
            outputPosition,
            retractArea,
            index,
        };
    }
}
exports.CashManagementRetractCommand = CashManagementRetractCommand;
var RetractErrorCode;
(function (RetractErrorCode) {
    /** A problem occurred with a storage unit. A Storage.StorageErrorEvent will be sent with the details. */
    RetractErrorCode["CASH_UNIT_ERROR"] = "cashUnitError";
    /** There were no items to retract. */
    RetractErrorCode["NO_ITEMS"] = "noItems";
    /** The device is in an exchange state. */
    RetractErrorCode["EXCHANGE_ACTIVE"] = "exchangeActive";
    /** The shutter failed to close. */
    RetractErrorCode["SHUTTER_NOT_CLOSED"] = "shutterNotClosed";
    /** Items were present at the output position at the start of the operation, but were removed before the operation was complete - some or all of the items were not retracted. */
    RetractErrorCode["ITEMS_TAKEN"] = "itemsTaken";
    /** The index is not supported. */
    RetractErrorCode["INVALID_RETRACT_POSITION"] = "invalidRetractPosition";
    /** The retract area specified in retractArea is not supported. */
    RetractErrorCode["NOT_RETRACT_AREA"] = "notRetractArea";
    /** Foreign items have been detected inside the input position. */
    RetractErrorCode["FOREIGN_ITEMS_DETECTED"] = "foreignItemsDetected";
    /** Some or all of the items were not retracted for a reason not co */
    RetractErrorCode["INCOMPLETE_RETRACT"] = "incompleteRetract";
})(RetractErrorCode = exports.RetractErrorCode || (exports.RetractErrorCode = {}));
//
//# sourceMappingURL=CashManagementRetractCommand.js.map