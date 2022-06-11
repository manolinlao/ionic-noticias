"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataPersistenceEnum = exports.SubjectEnum = void 0;
var SubjectEnum;
(function (SubjectEnum) {
    /** The subject to be scanned is on the scanning position. */
    SubjectEnum["PRESENT"] = "present";
    /** The subject to be scanned is not on the scanning position. */
    SubjectEnum["NOT_PRESENT"] = "notPresent";
    /** The subject to be scanned cannot be determined with the device in its current state (e.g. the value of device is noDevice, powerOff, offline, or hwError). */
    SubjectEnum["UNKNOWN"] = "unknown";
    /** The physical device does not support the ability to report whether a subject is on the scanning position. */
    SubjectEnum["NOT_SUPPORTED"] = "notSupported";
})(SubjectEnum = exports.SubjectEnum || (exports.SubjectEnum = {}));
var DataPersistenceEnum;
(function (DataPersistenceEnum) {
    /**
     * Biometric data captured using the Biometric.Read can persist until all sessions are closed, the device is power failed or rebooted, or the Biometric.Read is requested again.
     * This captured biometric data can also be explicitly cleared using the Biometric.Clear or Biometric.Reset.
     */
    DataPersistenceEnum["PERSIST"] = "persist";
    /** Captured biometric data will not persist. Once the data has been either returned in the Biometric.Read or used by the Biometric.Match, then the data is cleared from the device. */
    DataPersistenceEnum["CLEAR"] = "clear";
})(DataPersistenceEnum = exports.DataPersistenceEnum || (exports.DataPersistenceEnum = {}));
//# sourceMappingURL=BiometricStatus.js.map