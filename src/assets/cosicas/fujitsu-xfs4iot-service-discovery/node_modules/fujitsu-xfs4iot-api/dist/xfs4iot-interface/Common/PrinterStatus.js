"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackMarkModeEnum = exports.PaperTypeEnum = exports.RetractBinsStateEnum = exports.LampEnum = exports.LevelEnum = exports.PaperEnum = exports.PruinterMediaEnum = void 0;
var PruinterMediaEnum;
(function (PruinterMediaEnum) {
    /** The capability to report the state of the print media is not supported by the device. */
    PruinterMediaEnum["NOT_SUPPORTED"] = "notSupported";
    /** The state of the print media cannot be determined with the device in its current state. */
    PruinterMediaEnum["UNKNOWN"] = "unknown";
    /**
     * Media is in the print position, on the stacker or on the transport (i.e. a passbook in the parking station is not considered to be present).
     * On devices with continuous paper supplies, this value is set when paper is under the print head.
     * On devices with no supply or individual sheet supplies, this value is set when paper/media is successfully inserted/loaded.
     */
    PruinterMediaEnum["PRESENT"] = "present";
    /** Media is not in the print position or on the stacker. */
    PruinterMediaEnum["NOT_PRESENT"] = "notPresent";
    /** Media is jammed in the device. */
    PruinterMediaEnum["JAMMED"] = "jammed";
    /** Media is at the entry/exit slot of the device. */
    PruinterMediaEnum["ENTERING"] = "entering";
    /** Media was retracted during the last command which controlled media. */
    PruinterMediaEnum["RETRACTED"] = "retracted";
})(PruinterMediaEnum = exports.PruinterMediaEnum || (exports.PruinterMediaEnum = {}));
var PaperEnum;
(function (PaperEnum) {
    /** Status cannot be determined with device in its current state. */
    PaperEnum["UNKNOWN"] = "unknown";
    /** The paper supply is full. */
    PaperEnum["FULL"] = "full";
    /** The paper supply is low. */
    PaperEnum["LOW"] = "low";
    /** The paper supply is empty. */
    PaperEnum["OUT"] = "out";
    /** The paper supply is jammed. */
    PaperEnum["JAMMED"] = "jammed";
})(PaperEnum = exports.PaperEnum || (exports.PaperEnum = {}));
var LevelEnum;
(function (LevelEnum) {
    /** Capability not supported by device. */
    LevelEnum["NOT_SUPPORTED"] = "notSupported";
    /** Status of toner or ink supply or the ribbon cannot be determined with device in its current state. */
    LevelEnum["UNKNOWN"] = "unknown";
    /** The toner or ink supply is full or the ribbon is OK. */
    LevelEnum["FULL"] = "full";
    /** The toner or ink supply is low or the print contrast with a ribbon is weak. */
    LevelEnum["LOW"] = "low";
    /** The toner or ink supply is empty or the print contrast with a ribbon is not sufficient any more. */
    LevelEnum["OUT"] = "out";
})(LevelEnum = exports.LevelEnum || (exports.LevelEnum = {}));
var LampEnum;
(function (LampEnum) {
    /** Capability not supported by device. */
    LampEnum["NOT_SUPPORTED"] = "notSupported";
    /** Status of the imaging lamp cannot be determined with device in its current state. */
    LampEnum["UNKNOWN"] = "unknown";
    /** The lamp is OK. */
    LampEnum["OK"] = "ok";
    /** The lamp should be changed. */
    LampEnum["FADING"] = "fading";
    /** The lamp is inoperative. */
    LampEnum["INOP"] = "inop";
})(LampEnum = exports.LampEnum || (exports.LampEnum = {}));
var RetractBinsStateEnum;
(function (RetractBinsStateEnum) {
    /** The retract bin of the printer is in a healthy state. */
    RetractBinsStateEnum["OK"] = "ok";
    /** The retract bin of the printer is full. */
    RetractBinsStateEnum["FULL"] = "full";
    /** Status cannot be determined with device in its current state. */
    RetractBinsStateEnum["UNKNOWN"] = "unknown";
    /** The retract bin of the printer is nearly full. */
    RetractBinsStateEnum["HIGH"] = "high";
    /** The retract bin is missing. */
    RetractBinsStateEnum["MISSING"] = "missing";
})(RetractBinsStateEnum = exports.RetractBinsStateEnum || (exports.RetractBinsStateEnum = {}));
var PaperTypeEnum;
(function (PaperTypeEnum) {
    /** No paper is loaded, reporting of this paper type is not supported or the paper type cannot be determined. */
    PaperTypeEnum["UNKNOWN"] = "unknown";
    /** The paper can be printed on only one side. */
    PaperTypeEnum["SINGLE"] = "single";
    /** The paper can be printed on both sides. */
    PaperTypeEnum["DUAL"] = "dual";
})(PaperTypeEnum = exports.PaperTypeEnum || (exports.PaperTypeEnum = {}));
var BlackMarkModeEnum;
(function (BlackMarkModeEnum) {
    /** Black mark detection is not supported. */
    BlackMarkModeEnum["NOT_SUPPORTED"] = "notSupported";
    /** The status of the black mark detection cannot be determined. */
    BlackMarkModeEnum["UNKNOWN"] = "unknown";
    /** Black mark detection and associated functionality is switched on. */
    BlackMarkModeEnum["ON"] = "on";
    /** Black mark detection and associated functionality is switched off. */
    BlackMarkModeEnum["OFF"] = "off";
})(BlackMarkModeEnum = exports.BlackMarkModeEnum || (exports.BlackMarkModeEnum = {}));
//# sourceMappingURL=PrinterStatus.js.map