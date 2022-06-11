import { SecurityModuleEnum } from '.';
export declare enum CardReaderMediaPositionEnum {
    /** Capability to report media position is not supported by the device (e.g. a typical swipe reader or contactless chip card reader). */
    NOT_SUPPORTED = "notSupported",
    /** The media state cannot be determined with the device in its current state (e.g. the value of device is noDevice, powerOff, offline or hardwareError. */
    UNKNOWN = "unknown",
    /** Media is present in the device, not in the entering position and not jammed. On the latched dip device, this indicates that the card is present in the device and the card is unlatched. */
    PRESENT = "present",
    /** Media is not present in the device and not at the entering position. */
    NOT_PRESENT = "notPresent",
    /** Media is jammed in the device; operator intervention is required. */
    JAMMED = "jammed",
    /** Media is at the entry/exit slot of a motorized device. */
    ENTERING = "entering",
    /** Media is present and latched in a latched dip card unit. This means the card can be used for chip card dialog.     */
    LATCHED = "latched"
}
export declare enum ChipPowderStateEnum {
    /** Capability to report the state of the chip is not supported by the ID card unit device. This value is returned for contactless chip card readers. */
    NOT_SUPPORTED = "notSupported",
    /** The state of the chip cannot be determined with the device in its current state. */
    UNKNOWN = "unknown",
    /** The chip is present, powered on and online (i.e. operational, not busy processing a request and not in an error state). */
    ONLINE = "online",
    /** The chip is present, powered on, and busy (unable to process a command at this time). */
    BUSY = "busy",
    /** The chip is present, but powered off (i.e. not contacted). */
    POWERED_OFF = "poweredOff",
    /** A card is currently present in the device, but has no chip. */
    NO_DEVICE = "noDevice",
    /** The chip is present, but inoperable due to a hardware error that prevents it from being used (e.g. MUTE, if there is an unresponsive card in the reader). */
    HARDWARE_ERROR = "hardwareError",
    /** There is no card in the device. */
    NO_CARD = "noCard"
}
export declare enum ChipModuleStateEnum {
    /** The chip card module is in a good state. */
    OK = "ok",
    /** The chip card module is inoperable. */
    INOPERABLE = "inoperable",
    /** The state of the chip card module cannot be determined. */
    UNKNOWN = "unknown",
    /** Reporting the chip card module status is not supported. */
    NOT_SUPPORTED = "notSupported"
}
export declare enum MagWriteModuleStateEnum {
    /** The magnetic card writing module is in a good state. */
    OK = "ok",
    /** The magnetic card writing module is inoperable. */
    INOPERABLE = "inoperable",
    /** The state of the magnetic card writing module cannot be determined. */
    UNKNOWN = "unknown",
    /** Reporting the magnetic card writing module status is not supported. */
    NOT_SUPPORTED = "notSupported"
}
export declare enum FrontImageModuleState {
    /** The front image reading module is in a good state. */
    OK = "ok",
    /** The front image reading module is inoperable. */
    INOPERABLE = "inoperable",
    /** The state of the front image reading module cannot be determined. */
    UNKNOWN = "unknown",
    /** Reporting the front image reading module status is not supported. */
    NOT_SUPPORTED = "notSupported"
}
export declare enum BackImageModuleState {
    /** The back image reading module is in a good state. */
    OK = "ok",
    /** The back image reading module is inoperable. */
    INOPERABLE = "inoperable",
    /** The state of the back image reading module cannot be determined. */
    UNKNOWN = "unknown",
    /** Reporting the back image reading module status is not supported. */
    NOT_SUPPORTED = "notSupported"
}
/** Status information for XFS4IoT services implementing the CardReader interface. This will be omitted if the CardReader interface is not supported. */
export interface CardReaderStatus {
    /**
     * Specifies the transport/exit position media state
     *
     * See {@link SecurityModuleEnum}
     */
    media?: CardReaderMediaPositionEnum;
    /**
     * Specifies the state of the security module
     *
     * See {@link SecurityModuleEnum}
     */
    security?: SecurityModuleEnum;
    /**
     * Specifies the state of the chip controlled by this service.
     * Depending on the value of capabilities response, this can either be the chip on the currently inserted user card or the chip on a permanently connected chip card.
     *
     * See {@link ChipPowderStateEnum}
     */
    chipPower?: ChipPowderStateEnum;
    /**
     * Specifies the state of the chip card module reader
     *
     * See {@link ChipModuleStateEnum}
     */
    chipModule?: ChipModuleStateEnum;
    /**
     * Specifies the state of the magnetic card writer
     *
     * See {@link MagWriteModuleStateEnum}
     */
    magWriteModule?: MagWriteModuleStateEnum;
    /**
     * Specifies the state of the front image reader
     *
     * See {@link FrontImageModuleState}
     */
    frontImageModule?: FrontImageModuleState;
    /**
     * Specifies the state of the back image reader
     *
     * See {@link BackImageModuleState}
     */
    backImageModule?: BackImageModuleState;
}
