export declare enum PruinterMediaEnum {
    /** The capability to report the state of the print media is not supported by the device. */
    NOT_SUPPORTED = "notSupported",
    /** The state of the print media cannot be determined with the device in its current state. */
    UNKNOWN = "unknown",
    /**
     * Media is in the print position, on the stacker or on the transport (i.e. a passbook in the parking station is not considered to be present).
     * On devices with continuous paper supplies, this value is set when paper is under the print head.
     * On devices with no supply or individual sheet supplies, this value is set when paper/media is successfully inserted/loaded.
     */
    PRESENT = "present",
    /** Media is not in the print position or on the stacker. */
    NOT_PRESENT = "notPresent",
    /** Media is jammed in the device. */
    JAMMED = "jammed",
    /** Media is at the entry/exit slot of the device. */
    ENTERING = "entering",
    /** Media was retracted during the last command which controlled media. */
    RETRACTED = "retracted"
}
export declare enum PaperEnum {
    /** Status cannot be determined with device in its current state. */
    UNKNOWN = "unknown",
    /** The paper supply is full. */
    FULL = "full",
    /** The paper supply is low. */
    LOW = "low",
    /** The paper supply is empty. */
    OUT = "out",
    /** The paper supply is jammed. */
    JAMMED = "jammed"
}
/**
 * upper?: The state of the upper paper supply.
 *
 * lower?: The state of the lower paper supply.
 *
 * external?: The state of the external paper supply.
 *
 * aux?: The state of the auxiliary paper supply.
 *
 * aux2?: The state of the second auxiliary paper supply.
 *
 * park?: The state of the parking station paper supply.
 *
 */
export interface Paper {
    /**
     * See {@link PaperEnum}
     */
    [key: string]: PaperEnum;
}
export declare enum LevelEnum {
    /** Capability not supported by device. */
    NOT_SUPPORTED = "notSupported",
    /** Status of toner or ink supply or the ribbon cannot be determined with device in its current state. */
    UNKNOWN = "unknown",
    /** The toner or ink supply is full or the ribbon is OK. */
    FULL = "full",
    /** The toner or ink supply is low or the print contrast with a ribbon is weak. */
    LOW = "low",
    /** The toner or ink supply is empty or the print contrast with a ribbon is not sufficient any more. */
    OUT = "out"
}
export declare enum LampEnum {
    /** Capability not supported by device. */
    NOT_SUPPORTED = "notSupported",
    /** Status of the imaging lamp cannot be determined with device in its current state. */
    UNKNOWN = "unknown",
    /** The lamp is OK. */
    OK = "ok",
    /** The lamp should be changed. */
    FADING = "fading",
    /** The lamp is inoperative. */
    INOP = "inop"
}
export declare enum RetractBinsStateEnum {
    /** The retract bin of the printer is in a healthy state. */
    OK = "ok",
    /** The retract bin of the printer is full. */
    FULL = "full",
    /** Status cannot be determined with device in its current state. */
    UNKNOWN = "unknown",
    /** The retract bin of the printer is nearly full. */
    HIGH = "high",
    /** The retract bin is missing. */
    MISSING = "missing"
}
export interface RetractBins {
    /**
     * Specifies the state of the printer retract bin
     *
     * See {@link RetractBinsStateEnum}
     */
    state?: RetractBinsStateEnum;
    /**
     * The number of media retracted to this bin. This value is persistent; it may be reset to 0 by the Printer.ResetCount command.
     *
     * Property value constraints:
     *
     * minimum: 0
     */
    count?: number;
}
export declare enum PaperTypeEnum {
    /** No paper is loaded, reporting of this paper type is not supported or the paper type cannot be determined. */
    UNKNOWN = "unknown",
    /** The paper can be printed on only one side. */
    SINGLE = "single",
    /** The paper can be printed on both sides. */
    DUAL = "dual"
}
/**
 * upper?: The upper paper supply paper type.
 *
 * lower?: The lower paper supply paper type.
 *
 * external?: The external paper supply paper type.
 *
 * aux?: The auxililliary paper supply paper type.
 *
 * aux2?: The second auxililliary paper supply paper type.
 *
 * park?: The parking station paper supply paper type.
 *
 */
export interface PaperType {
    /**
     * See {@link PaperTypeEnum}
     */
    [key: string]: PaperTypeEnum;
}
export declare enum BlackMarkModeEnum {
    /** Black mark detection is not supported. */
    NOT_SUPPORTED = "notSupported",
    /** The status of the black mark detection cannot be determined. */
    UNKNOWN = "unknown",
    /** Black mark detection and associated functionality is switched on. */
    ON = "on",
    /** Black mark detection and associated functionality is switched off. */
    OFF = "off"
}
export interface PrinterStatus {
    /**
     * Specifies the state of the print media (i.e. receipt, statement, passbook, etc.) as one of the following values. This field does not apply to journal printers.
     *
     * See {@link PruinterMediaEnum}
     */
    media?: PruinterMediaEnum;
    /**
     * Specifies the state of paper supplies as one of the following values.
     *
     * See {@link Paper}
     */
    paper?: Paper;
    /**
     * Specifies the state of the toner or ink supply or the state of the ribbon
     *
     * See {@link LevelEnum}
     */
    toner?: LevelEnum;
    /**
     * Specifies the status of the stamping ink in the printer.
     *
     * See {@link LevelEnum}
     */
    ink?: LevelEnum;
    /**
     * Specifies the status of the printer imaging lamp
     *
     * See {@link LampEnum}
     */
    lamp?: LampEnum;
    /**
     * An array of bin state objects. If no retain bins are supported, the array will be empty.
     *
     * See {@link RetractBins}
     */
    retractBins?: RetractBins[];
    /** The number of media on stacker; applicable only to printers with stacking capability. */
    mediaOnStacker?: number;
    /**
     * Specifies the type of paper loaded
     *
     * See {@link PaperType}
     */
    paperType?: PaperType;
    /**
     * Specifies the status of the black mark detection and associated functionality
     *
     * See {@link BlackMarkModeEnum}
     */
    blackMarkMode?: BlackMarkModeEnum;
}
