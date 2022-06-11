"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackImageModuleState = exports.FrontImageModuleState = exports.MagWriteModuleStateEnum = exports.ChipModuleStateEnum = exports.ChipPowderStateEnum = exports.CardReaderMediaPositionEnum = void 0;
var CardReaderMediaPositionEnum;
(function (CardReaderMediaPositionEnum) {
    /** Capability to report media position is not supported by the device (e.g. a typical swipe reader or contactless chip card reader). */
    CardReaderMediaPositionEnum["NOT_SUPPORTED"] = "notSupported";
    /** The media state cannot be determined with the device in its current state (e.g. the value of device is noDevice, powerOff, offline or hardwareError. */
    CardReaderMediaPositionEnum["UNKNOWN"] = "unknown";
    /** Media is present in the device, not in the entering position and not jammed. On the latched dip device, this indicates that the card is present in the device and the card is unlatched. */
    CardReaderMediaPositionEnum["PRESENT"] = "present";
    /** Media is not present in the device and not at the entering position. */
    CardReaderMediaPositionEnum["NOT_PRESENT"] = "notPresent";
    /** Media is jammed in the device; operator intervention is required. */
    CardReaderMediaPositionEnum["JAMMED"] = "jammed";
    /** Media is at the entry/exit slot of a motorized device. */
    CardReaderMediaPositionEnum["ENTERING"] = "entering";
    /** Media is present and latched in a latched dip card unit. This means the card can be used for chip card dialog.     */
    CardReaderMediaPositionEnum["LATCHED"] = "latched";
})(CardReaderMediaPositionEnum = exports.CardReaderMediaPositionEnum || (exports.CardReaderMediaPositionEnum = {}));
var ChipPowderStateEnum;
(function (ChipPowderStateEnum) {
    /** Capability to report the state of the chip is not supported by the ID card unit device. This value is returned for contactless chip card readers. */
    ChipPowderStateEnum["NOT_SUPPORTED"] = "notSupported";
    /** The state of the chip cannot be determined with the device in its current state. */
    ChipPowderStateEnum["UNKNOWN"] = "unknown";
    /** The chip is present, powered on and online (i.e. operational, not busy processing a request and not in an error state). */
    ChipPowderStateEnum["ONLINE"] = "online";
    /** The chip is present, powered on, and busy (unable to process a command at this time). */
    ChipPowderStateEnum["BUSY"] = "busy";
    /** The chip is present, but powered off (i.e. not contacted). */
    ChipPowderStateEnum["POWERED_OFF"] = "poweredOff";
    /** A card is currently present in the device, but has no chip. */
    ChipPowderStateEnum["NO_DEVICE"] = "noDevice";
    /** The chip is present, but inoperable due to a hardware error that prevents it from being used (e.g. MUTE, if there is an unresponsive card in the reader). */
    ChipPowderStateEnum["HARDWARE_ERROR"] = "hardwareError";
    /** There is no card in the device. */
    ChipPowderStateEnum["NO_CARD"] = "noCard";
})(ChipPowderStateEnum = exports.ChipPowderStateEnum || (exports.ChipPowderStateEnum = {}));
var ChipModuleStateEnum;
(function (ChipModuleStateEnum) {
    /** The chip card module is in a good state. */
    ChipModuleStateEnum["OK"] = "ok";
    /** The chip card module is inoperable. */
    ChipModuleStateEnum["INOPERABLE"] = "inoperable";
    /** The state of the chip card module cannot be determined. */
    ChipModuleStateEnum["UNKNOWN"] = "unknown";
    /** Reporting the chip card module status is not supported. */
    ChipModuleStateEnum["NOT_SUPPORTED"] = "notSupported";
})(ChipModuleStateEnum = exports.ChipModuleStateEnum || (exports.ChipModuleStateEnum = {}));
var MagWriteModuleStateEnum;
(function (MagWriteModuleStateEnum) {
    /** The magnetic card writing module is in a good state. */
    MagWriteModuleStateEnum["OK"] = "ok";
    /** The magnetic card writing module is inoperable. */
    MagWriteModuleStateEnum["INOPERABLE"] = "inoperable";
    /** The state of the magnetic card writing module cannot be determined. */
    MagWriteModuleStateEnum["UNKNOWN"] = "unknown";
    /** Reporting the magnetic card writing module status is not supported. */
    MagWriteModuleStateEnum["NOT_SUPPORTED"] = "notSupported";
})(MagWriteModuleStateEnum = exports.MagWriteModuleStateEnum || (exports.MagWriteModuleStateEnum = {}));
var FrontImageModuleState;
(function (FrontImageModuleState) {
    /** The front image reading module is in a good state. */
    FrontImageModuleState["OK"] = "ok";
    /** The front image reading module is inoperable. */
    FrontImageModuleState["INOPERABLE"] = "inoperable";
    /** The state of the front image reading module cannot be determined. */
    FrontImageModuleState["UNKNOWN"] = "unknown";
    /** Reporting the front image reading module status is not supported. */
    FrontImageModuleState["NOT_SUPPORTED"] = "notSupported";
})(FrontImageModuleState = exports.FrontImageModuleState || (exports.FrontImageModuleState = {}));
var BackImageModuleState;
(function (BackImageModuleState) {
    /** The back image reading module is in a good state. */
    BackImageModuleState["OK"] = "ok";
    /** The back image reading module is inoperable. */
    BackImageModuleState["INOPERABLE"] = "inoperable";
    /** The state of the back image reading module cannot be determined. */
    BackImageModuleState["UNKNOWN"] = "unknown";
    /** Reporting the back image reading module status is not supported. */
    BackImageModuleState["NOT_SUPPORTED"] = "notSupported";
})(BackImageModuleState = exports.BackImageModuleState || (exports.BackImageModuleState = {}));
//# sourceMappingURL=CardReaderStatus.js.map