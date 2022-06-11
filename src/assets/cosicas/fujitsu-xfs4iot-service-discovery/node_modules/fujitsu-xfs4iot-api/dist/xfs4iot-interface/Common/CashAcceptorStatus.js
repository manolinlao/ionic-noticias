"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashAcceptorPositionEnum = exports.BanknoteReaderEnum = exports.StackerItemsEnum = exports.CashAcceptorIntermediateStackerEnum = void 0;
var CashAcceptorIntermediateStackerEnum;
(function (CashAcceptorIntermediateStackerEnum) {
    /** The intermediate stacker is empty. */
    CashAcceptorIntermediateStackerEnum["EMPTY"] = "empty";
    /** The intermediate stacker is not empty. */
    CashAcceptorIntermediateStackerEnum["NOT_EMPTY"] = "notEmpty";
    /** The intermediate stacker is full. This may also be reported during a cash-in transaction where a limit specified by CashAcceptor.CashInStart has been reached. */
    CashAcceptorIntermediateStackerEnum["FULL"] = "full";
    /** Due to a hardware error or other condition, the state of the intermediate stacker cannot be determined. */
    CashAcceptorIntermediateStackerEnum["UNKNOWN"] = "unknown";
    /** The physical device has no intermediate stacker. */
    CashAcceptorIntermediateStackerEnum["NOT_SUPPORTED"] = "notSupported";
})(CashAcceptorIntermediateStackerEnum = exports.CashAcceptorIntermediateStackerEnum || (exports.CashAcceptorIntermediateStackerEnum = {}));
var StackerItemsEnum;
(function (StackerItemsEnum) {
    /** Items on the intermediate stacker have been in customer access. If the device is a cash recycler then the items on the intermediate stacker may be there as a result of a previous cash-out operation. */
    StackerItemsEnum["CUSTOMER_ACCESS"] = "customerAccess";
    /** Items on the intermediate stacker have not been in customer access. */
    StackerItemsEnum["NO_CUSTOMER_ACCESS"] = "noCustomerAccess";
    /** It is not known if the items on the intermediate stacker have been in customer access. */
    StackerItemsEnum["ACCESS_UNKNOWN"] = "accessUnknown";
    /** There are no items on the intermediate stacker or the physical device has no intermediate stacker. */
    StackerItemsEnum["NO_ITEMS"] = "noItems";
})(StackerItemsEnum = exports.StackerItemsEnum || (exports.StackerItemsEnum = {}));
var BanknoteReaderEnum;
(function (BanknoteReaderEnum) {
    /** The banknote reader is in a good state. */
    BanknoteReaderEnum["OK"] = "ok";
    /** The banknote reader is inoperable. */
    BanknoteReaderEnum["INOPERABLE"] = "inoperable";
    /** Due to a hardware error or other condition, the state of the banknote reader cannot be determined. */
    BanknoteReaderEnum["UNKNOWN"] = "unknown";
    /** The physical device has no banknote reader. */
    BanknoteReaderEnum["NOT_SUPPORTED"] = "notSupported";
})(BanknoteReaderEnum = exports.BanknoteReaderEnum || (exports.BanknoteReaderEnum = {}));
var CashAcceptorPositionEnum;
(function (CashAcceptorPositionEnum) {
    /** Default input position. */
    CashAcceptorPositionEnum["IN_DEFAULT"] = "inDefault";
    /** Left input position. */
    CashAcceptorPositionEnum["IN_LEFT"] = "inLeft";
    /** Right input position. */
    CashAcceptorPositionEnum["IN_RIGHT"] = "inRight";
    /** Center input position. */
    CashAcceptorPositionEnum["IN_CENTER"] = "inCenter";
    /** Top input position. */
    CashAcceptorPositionEnum["IN_TOP"] = "inTop";
    /** Bottom input position. */
    CashAcceptorPositionEnum["IN_BOTTOM"] = "inBottom";
    /** Front input position. */
    CashAcceptorPositionEnum["IN_FRONT"] = "inFront";
    /** Rear input position. */
    CashAcceptorPositionEnum["IN_REAR"] = "inRear";
    /** Default output position. */
    CashAcceptorPositionEnum["OUT_DEFAULT"] = "outDefault";
    /** Left output position. */
    CashAcceptorPositionEnum["OUT_LEFT"] = "outLeft";
    /** Right output position. */
    CashAcceptorPositionEnum["OUT_RIGHT"] = "outRight";
    /** Center output position. */
    CashAcceptorPositionEnum["OUT_CENTER"] = "outCenter";
    /** Top output position. */
    CashAcceptorPositionEnum["OUT_TOP"] = "outTop";
    /** Bottom output position. */
    CashAcceptorPositionEnum["OUT_BOTTOM"] = "outBottom";
    /** Front output position. */
    CashAcceptorPositionEnum["OUT_FRONT"] = "outFront";
    /** Rear output position. */
    CashAcceptorPositionEnum["OUT_REAR"] = "outRear";
})(CashAcceptorPositionEnum = exports.CashAcceptorPositionEnum || (exports.CashAcceptorPositionEnum = {}));
//# sourceMappingURL=CashAcceptorStatus.js.map