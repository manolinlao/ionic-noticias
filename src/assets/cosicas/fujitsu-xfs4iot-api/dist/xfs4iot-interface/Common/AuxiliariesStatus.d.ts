export declare enum OperatorSwitchEnum {
    /** The status is not available. */
    NOT_AVAILABLE = "notAvailable",
    /** The switch is in run mode. */
    RUN = "run",
    /** The switch is in maintenance mode. */
    MAINTENANCE = "maintenance",
    /** The switch is in supervisor mode. */
    SUPERVISOR = "supervisor"
}
export declare enum TamperSensorEnum {
    /** The status is not available. */
    NOT_AVAILABLE = "notAvailable",
    /** There is no indication of a tampering attempt. */
    OFF = "off",
    /** There has been a tampering attempt. */
    ON = "on"
}
export declare enum SeismicSensorEnum {
    /** The status is not available. */
    NOT_AVAILABLE = "notAvailable",
    /** The seismic activity has not been high enough to trigger the sensor. */
    OFF = "off",
    /** The seismic or other activity has triggered the sensor. */
    ON = "on"
}
export declare enum HeatSensorEnum {
    /** The status is not available */
    NOT_AVAILABLE = "notAvailable",
    /** The heat has not been high enough to trigger the sensor. */
    OFF = "off",
    /** The heat has been high enough to trigger the sensor. */
    ON = "on"
}
export declare enum ProximitySensorEnum {
    /** The status is not available. */
    NOT_AVAILABLE = "notAvailable",
    /** The sensor is showing that there is someone present at the terminal. */
    PRESENT = "present",
    /** The sensor can not sense any people around the terminal. */
    NOT_PRESENT = "notPresent"
}
export declare enum AmbientLightSensorEnum {
    /** The status is not available. */
    NOT_AVAILABLE = "notAvailable",
    /** The level of light is very dark. */
    VERY_DARK = "veryDark",
    /** The level of light is dark. */
    DARK = "dark",
    /** The level of light is medium light. */
    MEDIUM_LIGHT = "mediumLight",
    /** The level of light is light. */
    LIGHT = "light",
    /** The level of light is very light. */
    VERY_LIGHT = "veryLight"
}
export declare enum EnhancedAudioSensorEnum {
    /** The status is not available. */
    NOT_AVAILABLE = "notAvailable",
    /** There is a headset connected. */
    PRESENT = "present",
    /** There is no headset connected. */
    NOT_PRESENT = "notPresent"
}
export declare enum BootSwitchSensorEnum {
    /** The status is not available. */
    NOT_AVAILABLE = "notAvailable",
    /** The sensor has not been triggered. */
    OFF = "off",
    /** The terminal is about to be rebooted or shutdown. */
    ON = "on"
}
export declare enum DisplaySensorEnum {
    /** The status is not available. */
    NOT_AVAILABLE = "notAvailable",
    /** The Consumer Display is switched off. */
    OFF = "off",
    /** The Consumer Display is in a good state and is turned on. */
    ON = "on",
    /** The Consumer Display is in an error state. */
    DISPLAY_ERROR = "displayError"
}
export declare enum OperatorCallButtonSensorEnum {
    /** The status is not available. */
    NOT_AVAILABLE = "notAvailable",
    /** The Operator Call Button is released (not pressed). */
    OFF = "off",
    /** The Operator Call Button is being pressed. */
    ON = "on"
}
export declare enum HandsetSensorEnum {
    /** The status is not available. */
    NOT_AVAILABLE = "notAvailable",
    /** The Handset is on the hook. */
    ON_THE_HOOK = "onTheHook",
    /** The Handset is off the hook. */
    OFF_THE_HOOK = "offTheHook"
}
export declare enum HeadsetMicrophoneSensorEnum {
    /** The status is not available. */
    NOT_AVAILABLE = "notAvailable",
    /** There is a headset microphone connected. */
    PRESENT = "present",
    /** There is no headset microphone connected. */
    NOT_PRESENT = "notPresent"
}
export declare enum FasciaMicrophoneSensorEnum {
    /** The status is not available. */
    NOT_AVAILABLE = "notAvailable",
    /** The Fascia Microphone is turned off. */
    OFF = "off",
    /** The Fascia Microphone is turned on. */
    ON = "on"
}
export declare enum AuxSafeDoorEnum {
    /** The status is not available. */
    NOT_AVAILABLE = "notAvailable",
    /** The Safe Doors are closed. */
    CLOSED = "closed",
    /** At least one of the Safe Doors is open. */
    OPEN = "open",
    /** All Safe Doors are closed and locked. */
    LOCKED = "locked",
    /** All Safe Doors are closed, locked and bolted. */
    BOLTED = "bolted",
    /** At least one of the Safe Doors has potentially been tampered with. */
    TAMPERED = "tampered"
}
export declare enum VandalShieldEnum {
    /** The status is not available. */
    NOT_AVAILABLE = "notAvailable",
    /** The Vandal Shield is closed. */
    CLOSED = "closed",
    /** The Vandal Shield is fully open. */
    OPEN = "open",
    /** The Vandal Shield is closed and locked. */
    LOCKED = "locked",
    /** The Vandal Shield is in service position. */
    SERVICE = "service",
    /** The Vandal Shield position permits access to the keyboard. */
    KEYBOARD = "keyboard",
    /** The Vandal Shield is partially open. */
    PARTIALLY_OPEN = "partiallyOpen",
    /** The Vandal Shield is jammed. */
    JAMMED = "jammed",
    /** The Vandal Shield has potentially been tampered with. */
    TAMPERED = "tampered"
}
export declare enum CabinetDoorEnum {
    /** The status is not available. */
    NOT_AVAILABLE = "notAvailable",
    /** All Cabinet Doors are closed. */
    CLOSED = "closed",
    /** At least one of the Cabinet Doors is open. */
    OPEN = "open",
    /** All Cabinet Doors are closed and locked. */
    LOCKED = "locked",
    /** All Cabinet Doors are closed, locked and bolted. */
    BOLTED = "bolted",
    /** At least one of the Cabinet Doors has potentially been tampered with. */
    TAMPERED = "tampered"
}
export declare enum OpenClosedIndicatorEnum {
    /** The status is not available. */
    NOT_AVAILABLE = "notAvailable",
    /** The terminal is closed for a consumer. */
    CLOSED = "closed",
    /** The terminal is open to be used by a consumer. */
    OPEN = "open"
}
export declare enum AudioRateEnum {
    /** Turn on the Audio Indicator. */
    ON = "on",
    /** Turn off the Audio Indicator. */
    OFF = "off",
    /** Turn the Audio Indicator to continuous. */
    CONTINUOUS = "continuous"
}
export declare enum AudioSignalEnum {
    /** Sound a key click signal. */
    KEYPRESS = "keypress",
    /** Sound an exclamation signal. */
    EXCLAMATION = "exclamation",
    /** Sound a warning signal. */
    WARNING = "warning",
    /** Sound an error signal. */
    ERROR = "error",
    /** Sound a critical error signal. */
    CRITICAL = "critical"
}
export interface Audio {
    /**
     * Specifies the state of the Audio Indicator
     *
     * See {@link AudioRateEnum}
     */
    rate?: AudioRateEnum;
    /**
     * Specifies the Audio sound
     *
     * See {@link AudioSignalEnum}
     */
    signal?: AudioSignalEnum;
}
export declare enum HeatingEnum {
    /** The status is not available. */
    NOT_AVAILABLE = "notAvailable",
    /** The internal heating is turned off. */
    OFF = "off",
    /** The internal heating is turned on. */
    ON = "on"
}
export declare enum ConsumerDisplayBacklightEnum {
    /** The status is not available. */
    NOT_AVAILABLE = "notAvailable",
    /** The Consumer Display Backlight is turned off. */
    OFF = "off",
    /** Consumer Display Backlight is turned on. */
    ON = "on"
}
export declare enum SignageDisplayEnum {
    /** The status is not available. */
    NOT_AVAILABLE = "notAvailable",
    /** The Signage Display is turned off. */
    OFF = "off",
    /** The Signage Display is turned on. */
    ON = "on"
}
export interface Volume {
    /**
     * Specifies the value of the Volume Control, if available.
     * The value of Volume Control is defined in an interval from 1 to 1000 where 1 is the lowest volume level and 1000 is the highest volume level.
     * he interval is defined in logarithmic steps, e.g. a volume control on a radio.
     *
     * Note: The Volume Control property is vendor-specific and therefore it is not possible to guarantee a consistent actual volume level across different vendor hardware.
     *
     * Property value constraints:
     *
     * minimum: 1
     * maximum: 1000
     */
    volumeLevel?: number;
}
export interface UPS {
    /**
     * The charge level of the UPS is low.
     *
     * default: false
     */
    low?: boolean;
    /**
     * The UPS is engaged.
     *
     * default: false
     */
    engaged?: boolean;
    /**
     * The UPS is powering the system.
     *
     * default: false
     */
    powering?: boolean;
    /**
     * The UPS was engaged when the main power went off.
     *
     * default: false
     */
    recovered?: boolean;
}
export declare enum AudibleAlarmEnum {
    /** The status is not available. */
    NOT_AVAILABLE = "notAvailable",
    /** The Alarm is turned off. */
    OFF = "off",
    /** The Alarm is turned on. */
    ON = "on"
}
export declare enum EnhancedAudioControlEnum {
    /** The status is not available. */
    NOT_AVAILABLE = "notAvailable",
    /**
     * The Enhanced Audio Controller is in manual mode and is in the public state (i.e. audio will be played through speakers).
     * Activating a Privacy Device (headset connected/handset off-hook) will have no impact, i.e. Output will remain through the speakers & no audio will be directed to the Privacy Device.
     */
    PUBLIC_AUDIO_MANUAL = "publicAudioManual",
    /** The Enhanced Audio Controller is in auto mode and is in the public state (i.e. audio will be played through speakers). When a Privacy Device is activated, the device will go to the private state. */
    PUBLIC_AUDIO_AUTO = "publicAudioAuto",
    /** The Enhanced Audio Controller is in semi-auto mode and is in the public state (i.e. audio will be played through speakers). When a Privacy Device is activated, the device will go to the private state. */
    PUBLIC_AUDIO_SEMI_AUTO = "publicAudioSemiAuto",
    /** The Enhanced Audio Controller is in manual mode and is in the private state (i.e. audio will be played only through a connected Privacy Device). In private mode, no audio is transmitted through the speakers. */
    PRIVATE_AUDIO_MANUAL = "privateAudioManual",
    /**
     * The Enhanced Audio Controller is in auto mode and is in the private state (i.e. audio will be played only through a connected Privacy Device).
     * In private mode, no audio is transmitted through the speakers. When a Privacy Device is deactivated (headset disconnected/handset on-hook), the device will go to the public state.
     * Where there is more than one Privacy Device, the device will go to the public state only when all Privacy Devices have been deactivated.
     */
    PRIVATE_AUDIO_AUTO = "privateAudioAuto",
    /**
     * The Enhanced Audio Controller is in semi-auto mode and is in the private state (i.e. audio will be played only through a connected Privacy Device).
     * In private mode, no audio is transmitted through the speakers. When a Privacy Device is deactivated, the device will remain in the private state.
     */
    PRIVATE_AUDIO_SEMI_AUTO = "privateAudioSemiAuto"
}
export declare enum EnhancedMicrophoneControlEnum {
    /** The status is not available. */
    NOT_AVAILABLE = "notAvailable",
    /**
     * The Enhanced Microphone Controller is in manual mode and is in the public state (i.e. the microphone in the fascia is active).
     * Activating a Privacy Device (headset connected/handset off-hook) will have no impact, i.e. input will remain through the fascia microphone and any microphone associated with the Privacy Device will not be active.
     */
    PUBLIC_AUDIO_MANUAL = "publicAudioManual",
    /** The Enhanced Microphone Controller is in auto mode and is in the public state (i.e. the microphone in the fascia is active). When a Privacy Device with a microphone is activated, the device will go to the private state. */
    PUBLIC_AUDIO_AUTO = "publicAudioAuto",
    /** The Enhanced Microphone Controller is in semi-auto mode and is in the public state (i.e. the microphone in the fascia is active). When a Privacy Device with a microphone is activated, the device will go to the private state. */
    PUBLIC_AUDIO_SEMI_AUTO = "publicAudioSemiAuto",
    /** The Enhanced Microphone Controller is in manual mode and is in the private state (i.e. audio input will be via a microphone in the Privacy Device). In private mode, no audio input is transmitted through the fascia microphone. */
    PRIVATE_AUDIO_MANUAL = "privateAudioManual",
    /**
     * The Enhanced Microphone Controller is in auto mode and is in the private state (i.e. audio input will be via a microphone in the Privacy Device).
     * In private mode, no audio input is transmitted through the fascia microphone. When a Privacy Device with a microphone is deactivated (headset disconnected/handset on-hook), the device will go to the public state.
     * Where there is more than one Privacy Device with a microphone, the device will go to the public state only when all such Privacy Devices have been deactivated.
     */
    PRIVATE_AUDIO_AUTO = "privateAudioAuto",
    /**
     * The Enhanced Microphone Controller is in semi-auto mode and is in the private state (i.e. audio input will be via a microphone in the Privacy Device).
     * In private mode, no audio is transmitted through the fascia microphone. When a Privacy Device with a microphone is deactivated, the device will remain in the private state.
     */
    PRIVATE_AUDIO_SEMI_AUTO = "privateAudioSemiAuto"
}
export interface MicrophoneVolume {
    /**
     * Specifies whether the Microphone Volume Control is available.
     *
     * default: false
     */
    available?: boolean;
    /**
     * Specifies the value of the Microphone Volume Control, if available.
     * The value of Volume Control is defined in an interval from 1 to 1000 where 1 is the lowest volume level and 1000 is the highest volume level.
     * The interval is defined in logarithmic steps, e.g. a volume control on a radio.
     *
     * Note: The Microphone Volume Control property is vendor-specific and therefore it is not possible to guarantee a consistent actual volume level across different vendor hardware.
     *
     * Property value constraints:
     *
     * minimum: 1
     * maximum: 1000
     */
    volumeLevel?: number;
}
export interface AuxiliariesStatus {
    /**
     * Specifies the state of the Operator switch.
     *
     * See {@link OperatorSwitchEnum}
     */
    operatorSwitch?: OperatorSwitchEnum;
    /**
     * Specifies the state of the Tamper sensor.
     *
     * See {@link TamperSensorEnum}
     */
    tamperSensor?: TamperSensorEnum;
    /**
     * Specifies the state of the Internal Tamper Sensor for the internal alarm. This sensor indicates whether the internal alarm has been tampered with (such as a burglar attempt).
     *
     * See {@link TamperSensorEnum}
     */
    internalTamperSensor?: TamperSensorEnum;
    /**
     * Specifies the state of the Seismic Sensor. This sensor indicates whether the terminal has been shaken (e.g. burglar attempt or seismic activity).
     *
     * See {@link SeismicSensorEnum}
     */
    seismicSensor?: SeismicSensorEnum;
    /**
     * Specifies the state of the Heat Sensor. This sensor is triggered by excessive heat (fire) near the terminal.
     *
     * See {@link }
     */
    heatSensor?: HeatSensorEnum;
    /**
     * Specifies the state of the Proximity Sensor. This sensor is triggered by movements around the terminal
     *
     * See {@link ProximitySensorEnum}
     */
    proximitySensor?: ProximitySensorEnum;
    /**
     * Specifies the state of the Ambient Light Sensor.
     * This sensor indicates the level of ambient light around the terminal.
     * Interpretation of this value is vendor-specific and therefore it is not guaranteed to report a consistent actual ambient light level across different vendor hardware.
     *
     * See {@link AmbientLightSensorEnum}
     */
    ambientLightSensor?: AmbientLightSensorEnum;
    /**
     * Specifies the presence or absence of a consumer’s headphone connected to the Audio Jack.
     *
     * See {@link EnhancedAudioSensorEnum}
     */
    enhancedAudioSensor?: EnhancedAudioSensorEnum;
    /**
     * Specifies the state of the Boot Switch Sensor. This sensor is triggered whenever the terminal is about to be rebooted or shutdown due to a delayed effect switch.
     *
     * See {@link BootSwitchSensorEnum}
     */
    bootSwitchSensor?: BootSwitchSensorEnum;
    /**
     * Specifies the state of the Consumer Display.
     *
     * See {@link DisplaySensorEnum}
     */
    displaySensor?: DisplaySensorEnum;
    /**
     * Specifies the state of the Operator Call Button.
     *
     * See {@link OperatorCallButtonSensorEnum}
     */
    operatorCallButtonSensor?: OperatorCallButtonSensorEnum;
    /**
     * Specifies the state of the Handset, which is a device similar to a telephone receiver.
     *
     * See {@link HandsetSensorEnum}
     */
    handsetSensor?: HandsetSensorEnum;
    /**
     * Specifies the presence or absence of a consumer’s headset microphone connected to the Microphone Jack.
     *
     * See {@link HeadsetMicrophoneSensorEnum}
     */
    headsetMicrophoneSensor?: HeadsetMicrophoneSensorEnum;
    /**
     * Specifies the state of the fascia microphone
     *
     * See {@link FasciaMicrophoneSensorEnum}
     */
    fasciaMicrophoneSensor?: FasciaMicrophoneSensorEnum;
    /**
     * Specifies the state of the Safe Doors. Safe Doors are doors that open up for secure hardware, such as the note dispenser, the security device, etc.
     *
     * See {@link AuxSafeDoorEnum}
     */
    safeDoor?: AuxSafeDoorEnum;
    /**
     * Specifies the state of the Vandal Shield. The Vandal Shield is a door that opens up for consumer access to the terminal.
     *
     * See {@link VandalShieldEnum}
     */
    vandalShield?: VandalShieldEnum;
    /**
     * Specifies the overall state of the Front Cabinet Doors. The front is defined as the side facing the customer/consumer. Cabinet Doors are doors that open up for consumables, and hardware that does not have to be in a secure place.
     *
     * See {@link CabinetDoorEnum}
     */
    cabinetFrontDoor?: CabinetDoorEnum;
    /**
     * Specifies the overall state of the Rear Cabinet Doors.
     * The rear is defined as the side opposite the side facing the customer/consumer. Cabinet Doors are doors that open up for consumables, and hardware that does not have to be in a secure place.
     *
     * See {@link CabinetDoorEnum}
     */
    cabinetRearDoor?: CabinetDoorEnum;
    /**
     * Specifies the overall state of the Left Cabinet Doors.
     * The left is defined as the side to the left as seen by the customer/consumer. Cabinet Doors are doors that open up for consumables, and hardware that does not have to be in a secure place.
     *
     * See {@link CabinetDoorEnum}
     */
    cabinetLeftDoor?: CabinetDoorEnum;
    /**
     * Specifies the overall state of the Right Cabinet Doors.
     * The right is defined as the side to the right as seen by the customer/consumer. Cabinet Doors are doors that open up for consumables, and hardware that does not have to be in a secure place.
     *
     * See {@link CabinetDoorEnum}
     */
    cabinetRightDoor?: CabinetDoorEnum;
    /**
     * Specifies the state of the Open/Closed Indicator.
     *
     * See {@link OpenClosedIndicatorEnum}
     */
    openClosedIndicator?: OpenClosedIndicatorEnum;
    /**
     * Specifies the state of the Audio Indicator.
     *
     * See {@link Audio}
     */
    audio?: Audio;
    /**
     * Specifies the state of the internal heating
     *
     * See {@link HeatingEnum}
     */
    heating?: HeatingEnum;
    /**
     * Specifies the Consumer Display Backlight
     *
     * See {@link ConsumerDisplayBacklightEnum}
     */
    consumerDisplayBacklight?: ConsumerDisplayBacklightEnum;
    /**
     * Specifies the state of the Signage Display. The Signage Display is a lighted banner or marquee that can be used to display information or an advertisement. Any dynamic data displayed must be loaded by a means external to the Service.
     *
     * See {@link SignageDisplayEnum}
     */
    signageDisplay?: SignageDisplayEnum;
    /**
     * Specifies the state of the volume control. Omitted if not available.
     *
     * See {@link Volume}
     */
    volume?: Volume;
    /**
     * Specifies the state of the Uninterruptible Power Supply. Omitted if the status is not available.
     *
     * See {@link UPS}
     */
    UPS?: UPS;
    /**
     * Species the state of the Audible Alarm device
     *
     * See {@link AudibleAlarmEnum}
     */
    audibleAlarm?: AudibleAlarmEnum;
    /**
     * Specifies the state of the Enhanced Audio Controller.
     * The Enhanced Audio Controller controls how private and public audio are broadcast when the headset is inserted into/removed from the audio jack and when the handset is off-hook/on-hook.
     * In the following, Privacy Device is used to refer to either the headset or handset.
     *
     * See {@link EnhancedAudioControlEnum}
     */
    enhancedAudioControl?: EnhancedAudioControlEnum;
    /**
     * Specifies the state of the Enhanced Microphone Controller.
     * The Enhanced Microphone Controller controls how private and public audio input are transmitted when the headset is inserted into/removed from the audio jack and when the handset is off-hook/on-hook.
     * In the following, Privacy Device is used to refer to either the headset or handset.
     *
     * See {@link EnhancedMicrophoneControlEnum}
     */
    enhancedMicrophoneControl?: EnhancedMicrophoneControlEnum;
    /**
     * See {@link MicrophoneVolume}
     */
    microphoneVolume?: MicrophoneVolume;
}
