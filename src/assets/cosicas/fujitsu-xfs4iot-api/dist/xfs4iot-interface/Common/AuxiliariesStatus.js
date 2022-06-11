"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnhancedMicrophoneControlEnum = exports.EnhancedAudioControlEnum = exports.AudibleAlarmEnum = exports.SignageDisplayEnum = exports.ConsumerDisplayBacklightEnum = exports.HeatingEnum = exports.AudioSignalEnum = exports.AudioRateEnum = exports.OpenClosedIndicatorEnum = exports.CabinetDoorEnum = exports.VandalShieldEnum = exports.AuxSafeDoorEnum = exports.FasciaMicrophoneSensorEnum = exports.HeadsetMicrophoneSensorEnum = exports.HandsetSensorEnum = exports.OperatorCallButtonSensorEnum = exports.DisplaySensorEnum = exports.BootSwitchSensorEnum = exports.EnhancedAudioSensorEnum = exports.AmbientLightSensorEnum = exports.ProximitySensorEnum = exports.HeatSensorEnum = exports.SeismicSensorEnum = exports.TamperSensorEnum = exports.OperatorSwitchEnum = void 0;
var OperatorSwitchEnum;
(function (OperatorSwitchEnum) {
    /** The status is not available. */
    OperatorSwitchEnum["NOT_AVAILABLE"] = "notAvailable";
    /** The switch is in run mode. */
    OperatorSwitchEnum["RUN"] = "run";
    /** The switch is in maintenance mode. */
    OperatorSwitchEnum["MAINTENANCE"] = "maintenance";
    /** The switch is in supervisor mode. */
    OperatorSwitchEnum["SUPERVISOR"] = "supervisor";
})(OperatorSwitchEnum = exports.OperatorSwitchEnum || (exports.OperatorSwitchEnum = {}));
var TamperSensorEnum;
(function (TamperSensorEnum) {
    /** The status is not available. */
    TamperSensorEnum["NOT_AVAILABLE"] = "notAvailable";
    /** There is no indication of a tampering attempt. */
    TamperSensorEnum["OFF"] = "off";
    /** There has been a tampering attempt. */
    TamperSensorEnum["ON"] = "on";
})(TamperSensorEnum = exports.TamperSensorEnum || (exports.TamperSensorEnum = {}));
var SeismicSensorEnum;
(function (SeismicSensorEnum) {
    /** The status is not available. */
    SeismicSensorEnum["NOT_AVAILABLE"] = "notAvailable";
    /** The seismic activity has not been high enough to trigger the sensor. */
    SeismicSensorEnum["OFF"] = "off";
    /** The seismic or other activity has triggered the sensor. */
    SeismicSensorEnum["ON"] = "on";
})(SeismicSensorEnum = exports.SeismicSensorEnum || (exports.SeismicSensorEnum = {}));
var HeatSensorEnum;
(function (HeatSensorEnum) {
    /** The status is not available */
    HeatSensorEnum["NOT_AVAILABLE"] = "notAvailable";
    /** The heat has not been high enough to trigger the sensor. */
    HeatSensorEnum["OFF"] = "off";
    /** The heat has been high enough to trigger the sensor. */
    HeatSensorEnum["ON"] = "on";
})(HeatSensorEnum = exports.HeatSensorEnum || (exports.HeatSensorEnum = {}));
var ProximitySensorEnum;
(function (ProximitySensorEnum) {
    /** The status is not available. */
    ProximitySensorEnum["NOT_AVAILABLE"] = "notAvailable";
    /** The sensor is showing that there is someone present at the terminal. */
    ProximitySensorEnum["PRESENT"] = "present";
    /** The sensor can not sense any people around the terminal. */
    ProximitySensorEnum["NOT_PRESENT"] = "notPresent";
})(ProximitySensorEnum = exports.ProximitySensorEnum || (exports.ProximitySensorEnum = {}));
var AmbientLightSensorEnum;
(function (AmbientLightSensorEnum) {
    /** The status is not available. */
    AmbientLightSensorEnum["NOT_AVAILABLE"] = "notAvailable";
    /** The level of light is very dark. */
    AmbientLightSensorEnum["VERY_DARK"] = "veryDark";
    /** The level of light is dark. */
    AmbientLightSensorEnum["DARK"] = "dark";
    /** The level of light is medium light. */
    AmbientLightSensorEnum["MEDIUM_LIGHT"] = "mediumLight";
    /** The level of light is light. */
    AmbientLightSensorEnum["LIGHT"] = "light";
    /** The level of light is very light. */
    AmbientLightSensorEnum["VERY_LIGHT"] = "veryLight";
})(AmbientLightSensorEnum = exports.AmbientLightSensorEnum || (exports.AmbientLightSensorEnum = {}));
var EnhancedAudioSensorEnum;
(function (EnhancedAudioSensorEnum) {
    /** The status is not available. */
    EnhancedAudioSensorEnum["NOT_AVAILABLE"] = "notAvailable";
    /** There is a headset connected. */
    EnhancedAudioSensorEnum["PRESENT"] = "present";
    /** There is no headset connected. */
    EnhancedAudioSensorEnum["NOT_PRESENT"] = "notPresent";
})(EnhancedAudioSensorEnum = exports.EnhancedAudioSensorEnum || (exports.EnhancedAudioSensorEnum = {}));
var BootSwitchSensorEnum;
(function (BootSwitchSensorEnum) {
    /** The status is not available. */
    BootSwitchSensorEnum["NOT_AVAILABLE"] = "notAvailable";
    /** The sensor has not been triggered. */
    BootSwitchSensorEnum["OFF"] = "off";
    /** The terminal is about to be rebooted or shutdown. */
    BootSwitchSensorEnum["ON"] = "on";
})(BootSwitchSensorEnum = exports.BootSwitchSensorEnum || (exports.BootSwitchSensorEnum = {}));
var DisplaySensorEnum;
(function (DisplaySensorEnum) {
    /** The status is not available. */
    DisplaySensorEnum["NOT_AVAILABLE"] = "notAvailable";
    /** The Consumer Display is switched off. */
    DisplaySensorEnum["OFF"] = "off";
    /** The Consumer Display is in a good state and is turned on. */
    DisplaySensorEnum["ON"] = "on";
    /** The Consumer Display is in an error state. */
    DisplaySensorEnum["DISPLAY_ERROR"] = "displayError";
})(DisplaySensorEnum = exports.DisplaySensorEnum || (exports.DisplaySensorEnum = {}));
var OperatorCallButtonSensorEnum;
(function (OperatorCallButtonSensorEnum) {
    /** The status is not available. */
    OperatorCallButtonSensorEnum["NOT_AVAILABLE"] = "notAvailable";
    /** The Operator Call Button is released (not pressed). */
    OperatorCallButtonSensorEnum["OFF"] = "off";
    /** The Operator Call Button is being pressed. */
    OperatorCallButtonSensorEnum["ON"] = "on";
})(OperatorCallButtonSensorEnum = exports.OperatorCallButtonSensorEnum || (exports.OperatorCallButtonSensorEnum = {}));
var HandsetSensorEnum;
(function (HandsetSensorEnum) {
    /** The status is not available. */
    HandsetSensorEnum["NOT_AVAILABLE"] = "notAvailable";
    /** The Handset is on the hook. */
    HandsetSensorEnum["ON_THE_HOOK"] = "onTheHook";
    /** The Handset is off the hook. */
    HandsetSensorEnum["OFF_THE_HOOK"] = "offTheHook";
})(HandsetSensorEnum = exports.HandsetSensorEnum || (exports.HandsetSensorEnum = {}));
var HeadsetMicrophoneSensorEnum;
(function (HeadsetMicrophoneSensorEnum) {
    /** The status is not available. */
    HeadsetMicrophoneSensorEnum["NOT_AVAILABLE"] = "notAvailable";
    /** There is a headset microphone connected. */
    HeadsetMicrophoneSensorEnum["PRESENT"] = "present";
    /** There is no headset microphone connected. */
    HeadsetMicrophoneSensorEnum["NOT_PRESENT"] = "notPresent";
})(HeadsetMicrophoneSensorEnum = exports.HeadsetMicrophoneSensorEnum || (exports.HeadsetMicrophoneSensorEnum = {}));
var FasciaMicrophoneSensorEnum;
(function (FasciaMicrophoneSensorEnum) {
    /** The status is not available. */
    FasciaMicrophoneSensorEnum["NOT_AVAILABLE"] = "notAvailable";
    /** The Fascia Microphone is turned off. */
    FasciaMicrophoneSensorEnum["OFF"] = "off";
    /** The Fascia Microphone is turned on. */
    FasciaMicrophoneSensorEnum["ON"] = "on";
})(FasciaMicrophoneSensorEnum = exports.FasciaMicrophoneSensorEnum || (exports.FasciaMicrophoneSensorEnum = {}));
var AuxSafeDoorEnum;
(function (AuxSafeDoorEnum) {
    /** The status is not available. */
    AuxSafeDoorEnum["NOT_AVAILABLE"] = "notAvailable";
    /** The Safe Doors are closed. */
    AuxSafeDoorEnum["CLOSED"] = "closed";
    /** At least one of the Safe Doors is open. */
    AuxSafeDoorEnum["OPEN"] = "open";
    /** All Safe Doors are closed and locked. */
    AuxSafeDoorEnum["LOCKED"] = "locked";
    /** All Safe Doors are closed, locked and bolted. */
    AuxSafeDoorEnum["BOLTED"] = "bolted";
    /** At least one of the Safe Doors has potentially been tampered with. */
    AuxSafeDoorEnum["TAMPERED"] = "tampered";
})(AuxSafeDoorEnum = exports.AuxSafeDoorEnum || (exports.AuxSafeDoorEnum = {}));
var VandalShieldEnum;
(function (VandalShieldEnum) {
    /** The status is not available. */
    VandalShieldEnum["NOT_AVAILABLE"] = "notAvailable";
    /** The Vandal Shield is closed. */
    VandalShieldEnum["CLOSED"] = "closed";
    /** The Vandal Shield is fully open. */
    VandalShieldEnum["OPEN"] = "open";
    /** The Vandal Shield is closed and locked. */
    VandalShieldEnum["LOCKED"] = "locked";
    /** The Vandal Shield is in service position. */
    VandalShieldEnum["SERVICE"] = "service";
    /** The Vandal Shield position permits access to the keyboard. */
    VandalShieldEnum["KEYBOARD"] = "keyboard";
    /** The Vandal Shield is partially open. */
    VandalShieldEnum["PARTIALLY_OPEN"] = "partiallyOpen";
    /** The Vandal Shield is jammed. */
    VandalShieldEnum["JAMMED"] = "jammed";
    /** The Vandal Shield has potentially been tampered with. */
    VandalShieldEnum["TAMPERED"] = "tampered";
})(VandalShieldEnum = exports.VandalShieldEnum || (exports.VandalShieldEnum = {}));
var CabinetDoorEnum;
(function (CabinetDoorEnum) {
    /** The status is not available. */
    CabinetDoorEnum["NOT_AVAILABLE"] = "notAvailable";
    /** All Cabinet Doors are closed. */
    CabinetDoorEnum["CLOSED"] = "closed";
    /** At least one of the Cabinet Doors is open. */
    CabinetDoorEnum["OPEN"] = "open";
    /** All Cabinet Doors are closed and locked. */
    CabinetDoorEnum["LOCKED"] = "locked";
    /** All Cabinet Doors are closed, locked and bolted. */
    CabinetDoorEnum["BOLTED"] = "bolted";
    /** At least one of the Cabinet Doors has potentially been tampered with. */
    CabinetDoorEnum["TAMPERED"] = "tampered";
})(CabinetDoorEnum = exports.CabinetDoorEnum || (exports.CabinetDoorEnum = {}));
var OpenClosedIndicatorEnum;
(function (OpenClosedIndicatorEnum) {
    /** The status is not available. */
    OpenClosedIndicatorEnum["NOT_AVAILABLE"] = "notAvailable";
    /** The terminal is closed for a consumer. */
    OpenClosedIndicatorEnum["CLOSED"] = "closed";
    /** The terminal is open to be used by a consumer. */
    OpenClosedIndicatorEnum["OPEN"] = "open";
})(OpenClosedIndicatorEnum = exports.OpenClosedIndicatorEnum || (exports.OpenClosedIndicatorEnum = {}));
var AudioRateEnum;
(function (AudioRateEnum) {
    /** Turn on the Audio Indicator. */
    AudioRateEnum["ON"] = "on";
    /** Turn off the Audio Indicator. */
    AudioRateEnum["OFF"] = "off";
    /** Turn the Audio Indicator to continuous. */
    AudioRateEnum["CONTINUOUS"] = "continuous";
})(AudioRateEnum = exports.AudioRateEnum || (exports.AudioRateEnum = {}));
var AudioSignalEnum;
(function (AudioSignalEnum) {
    /** Sound a key click signal. */
    AudioSignalEnum["KEYPRESS"] = "keypress";
    /** Sound an exclamation signal. */
    AudioSignalEnum["EXCLAMATION"] = "exclamation";
    /** Sound a warning signal. */
    AudioSignalEnum["WARNING"] = "warning";
    /** Sound an error signal. */
    AudioSignalEnum["ERROR"] = "error";
    /** Sound a critical error signal. */
    AudioSignalEnum["CRITICAL"] = "critical";
})(AudioSignalEnum = exports.AudioSignalEnum || (exports.AudioSignalEnum = {}));
var HeatingEnum;
(function (HeatingEnum) {
    /** The status is not available. */
    HeatingEnum["NOT_AVAILABLE"] = "notAvailable";
    /** The internal heating is turned off. */
    HeatingEnum["OFF"] = "off";
    /** The internal heating is turned on. */
    HeatingEnum["ON"] = "on";
})(HeatingEnum = exports.HeatingEnum || (exports.HeatingEnum = {}));
var ConsumerDisplayBacklightEnum;
(function (ConsumerDisplayBacklightEnum) {
    /** The status is not available. */
    ConsumerDisplayBacklightEnum["NOT_AVAILABLE"] = "notAvailable";
    /** The Consumer Display Backlight is turned off. */
    ConsumerDisplayBacklightEnum["OFF"] = "off";
    /** Consumer Display Backlight is turned on. */
    ConsumerDisplayBacklightEnum["ON"] = "on";
})(ConsumerDisplayBacklightEnum = exports.ConsumerDisplayBacklightEnum || (exports.ConsumerDisplayBacklightEnum = {}));
var SignageDisplayEnum;
(function (SignageDisplayEnum) {
    /** The status is not available. */
    SignageDisplayEnum["NOT_AVAILABLE"] = "notAvailable";
    /** The Signage Display is turned off. */
    SignageDisplayEnum["OFF"] = "off";
    /** The Signage Display is turned on. */
    SignageDisplayEnum["ON"] = "on";
})(SignageDisplayEnum = exports.SignageDisplayEnum || (exports.SignageDisplayEnum = {}));
var AudibleAlarmEnum;
(function (AudibleAlarmEnum) {
    /** The status is not available. */
    AudibleAlarmEnum["NOT_AVAILABLE"] = "notAvailable";
    /** The Alarm is turned off. */
    AudibleAlarmEnum["OFF"] = "off";
    /** The Alarm is turned on. */
    AudibleAlarmEnum["ON"] = "on";
})(AudibleAlarmEnum = exports.AudibleAlarmEnum || (exports.AudibleAlarmEnum = {}));
var EnhancedAudioControlEnum;
(function (EnhancedAudioControlEnum) {
    /** The status is not available. */
    EnhancedAudioControlEnum["NOT_AVAILABLE"] = "notAvailable";
    /**
     * The Enhanced Audio Controller is in manual mode and is in the public state (i.e. audio will be played through speakers).
     * Activating a Privacy Device (headset connected/handset off-hook) will have no impact, i.e. Output will remain through the speakers & no audio will be directed to the Privacy Device.
     */
    EnhancedAudioControlEnum["PUBLIC_AUDIO_MANUAL"] = "publicAudioManual";
    /** The Enhanced Audio Controller is in auto mode and is in the public state (i.e. audio will be played through speakers). When a Privacy Device is activated, the device will go to the private state. */
    EnhancedAudioControlEnum["PUBLIC_AUDIO_AUTO"] = "publicAudioAuto";
    /** The Enhanced Audio Controller is in semi-auto mode and is in the public state (i.e. audio will be played through speakers). When a Privacy Device is activated, the device will go to the private state. */
    EnhancedAudioControlEnum["PUBLIC_AUDIO_SEMI_AUTO"] = "publicAudioSemiAuto";
    /** The Enhanced Audio Controller is in manual mode and is in the private state (i.e. audio will be played only through a connected Privacy Device). In private mode, no audio is transmitted through the speakers. */
    EnhancedAudioControlEnum["PRIVATE_AUDIO_MANUAL"] = "privateAudioManual";
    /**
     * The Enhanced Audio Controller is in auto mode and is in the private state (i.e. audio will be played only through a connected Privacy Device).
     * In private mode, no audio is transmitted through the speakers. When a Privacy Device is deactivated (headset disconnected/handset on-hook), the device will go to the public state.
     * Where there is more than one Privacy Device, the device will go to the public state only when all Privacy Devices have been deactivated.
     */
    EnhancedAudioControlEnum["PRIVATE_AUDIO_AUTO"] = "privateAudioAuto";
    /**
     * The Enhanced Audio Controller is in semi-auto mode and is in the private state (i.e. audio will be played only through a connected Privacy Device).
     * In private mode, no audio is transmitted through the speakers. When a Privacy Device is deactivated, the device will remain in the private state.
     */
    EnhancedAudioControlEnum["PRIVATE_AUDIO_SEMI_AUTO"] = "privateAudioSemiAuto";
})(EnhancedAudioControlEnum = exports.EnhancedAudioControlEnum || (exports.EnhancedAudioControlEnum = {}));
var EnhancedMicrophoneControlEnum;
(function (EnhancedMicrophoneControlEnum) {
    /** The status is not available. */
    EnhancedMicrophoneControlEnum["NOT_AVAILABLE"] = "notAvailable";
    /**
     * The Enhanced Microphone Controller is in manual mode and is in the public state (i.e. the microphone in the fascia is active).
     * Activating a Privacy Device (headset connected/handset off-hook) will have no impact, i.e. input will remain through the fascia microphone and any microphone associated with the Privacy Device will not be active.
     */
    EnhancedMicrophoneControlEnum["PUBLIC_AUDIO_MANUAL"] = "publicAudioManual";
    /** The Enhanced Microphone Controller is in auto mode and is in the public state (i.e. the microphone in the fascia is active). When a Privacy Device with a microphone is activated, the device will go to the private state. */
    EnhancedMicrophoneControlEnum["PUBLIC_AUDIO_AUTO"] = "publicAudioAuto";
    /** The Enhanced Microphone Controller is in semi-auto mode and is in the public state (i.e. the microphone in the fascia is active). When a Privacy Device with a microphone is activated, the device will go to the private state. */
    EnhancedMicrophoneControlEnum["PUBLIC_AUDIO_SEMI_AUTO"] = "publicAudioSemiAuto";
    /** The Enhanced Microphone Controller is in manual mode and is in the private state (i.e. audio input will be via a microphone in the Privacy Device). In private mode, no audio input is transmitted through the fascia microphone. */
    EnhancedMicrophoneControlEnum["PRIVATE_AUDIO_MANUAL"] = "privateAudioManual";
    /**
     * The Enhanced Microphone Controller is in auto mode and is in the private state (i.e. audio input will be via a microphone in the Privacy Device).
     * In private mode, no audio input is transmitted through the fascia microphone. When a Privacy Device with a microphone is deactivated (headset disconnected/handset on-hook), the device will go to the public state.
     * Where there is more than one Privacy Device with a microphone, the device will go to the public state only when all such Privacy Devices have been deactivated.
     */
    EnhancedMicrophoneControlEnum["PRIVATE_AUDIO_AUTO"] = "privateAudioAuto";
    /**
     * The Enhanced Microphone Controller is in semi-auto mode and is in the private state (i.e. audio input will be via a microphone in the Privacy Device).
     * In private mode, no audio is transmitted through the fascia microphone. When a Privacy Device with a microphone is deactivated, the device will remain in the private state.
     */
    EnhancedMicrophoneControlEnum["PRIVATE_AUDIO_SEMI_AUTO"] = "privateAudioSemiAuto";
})(EnhancedMicrophoneControlEnum = exports.EnhancedMicrophoneControlEnum || (exports.EnhancedMicrophoneControlEnum = {}));
//# sourceMappingURL=AuxiliariesStatus.js.map