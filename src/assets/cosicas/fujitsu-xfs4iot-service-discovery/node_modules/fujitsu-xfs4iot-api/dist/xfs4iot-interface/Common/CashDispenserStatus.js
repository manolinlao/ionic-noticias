"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashDispenserPositionEnum = exports.CashDispenserIntermediateStackerEnum = void 0;
var CashDispenserIntermediateStackerEnum;
(function (CashDispenserIntermediateStackerEnum) {
    /** The intermediate stacker is empty. */
    CashDispenserIntermediateStackerEnum["EMPTY"] = "empty";
    /** The intermediate stacker is not empty. The items have not been in customer access. */
    CashDispenserIntermediateStackerEnum["NOT_EMPTY"] = "notEmpty";
    /** The intermediate stacker is not empty. The items have been in customer access. If the device is a recycler then the items on the intermediate stacker may be there as a result of a previous cash-in operation. */
    CashDispenserIntermediateStackerEnum["NOT_EMPTY_CUSTOMER"] = "notEmptyCustomer";
    /** The intermediate stacker is not empty. It is not known if the items have been in customer access. */
    CashDispenserIntermediateStackerEnum["NOT_EMPTY_UNKNOWN"] = "notEmptyUnknown";
    /** Due to a hardware error or other condition, the state of the intermediate stacker cannot be determined. */
    CashDispenserIntermediateStackerEnum["UNKNOWN"] = "unknown";
    /** The physical device has no intermediate stacker. */
    CashDispenserIntermediateStackerEnum["NOT_SUPPORTED"] = "notSupported";
})(CashDispenserIntermediateStackerEnum = exports.CashDispenserIntermediateStackerEnum || (exports.CashDispenserIntermediateStackerEnum = {}));
var CashDispenserPositionEnum;
(function (CashDispenserPositionEnum) {
    /** Default output position. */
    CashDispenserPositionEnum["OUT_DEFAULT"] = "outDefault";
    /** Left output position. */
    CashDispenserPositionEnum["OUT_LEFT"] = "outLeft";
    /** Right output position. */
    CashDispenserPositionEnum["OUT_RIGHT"] = "outRight";
    /** Center output position. */
    CashDispenserPositionEnum["OUT_CENTER"] = "outCenter";
    /** Top output position. */
    CashDispenserPositionEnum["OUT_TOP"] = "outTop";
    /** Bottom output position. */
    CashDispenserPositionEnum["OUT_BOTTOM"] = "outBottom";
    /** Front output position. */
    CashDispenserPositionEnum["OUT_FRONT"] = "outFront";
    /** Rear output position. */
    CashDispenserPositionEnum["OUT_REAR"] = "outRear";
})(CashDispenserPositionEnum = exports.CashDispenserPositionEnum || (exports.CashDispenserPositionEnum = {}));
//# sourceMappingURL=CashDispenserStatus.js.map