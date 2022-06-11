export declare enum SubjectEnum {
    /** The subject to be scanned is on the scanning position. */
    PRESENT = "present",
    /** The subject to be scanned is not on the scanning position. */
    NOT_PRESENT = "notPresent",
    /** The subject to be scanned cannot be determined with the device in its current state (e.g. the value of device is noDevice, powerOff, offline, or hwError). */
    UNKNOWN = "unknown",
    /** The physical device does not support the ability to report whether a subject is on the scanning position. */
    NOT_SUPPORTED = "notSupported"
}
export declare enum DataPersistenceEnum {
    /**
     * Biometric data captured using the Biometric.Read can persist until all sessions are closed, the device is power failed or rebooted, or the Biometric.Read is requested again.
     * This captured biometric data can also be explicitly cleared using the Biometric.Clear or Biometric.Reset.
     */
    PERSIST = "persist",
    /** Captured biometric data will not persist. Once the data has been either returned in the Biometric.Read or used by the Biometric.Match, then the data is cleared from the device. */
    CLEAR = "clear"
}
export interface BiometricStatus {
    /**
     * Specifies the state of the subject to be scanned (e.g. finger, palm, retina, etc)
     *
     * See {@link SubjectEnum}
     */
    subject: SubjectEnum;
    /**
     * Indicates whether or not scanned biometric data has been captured using the Biometric.Read and is currently stored and ready for comparison.
     * true if data has been captured and is stored, false if no scanned data is present. This will be set to false when scanned data is cleared using the Biometric.Clear.
     */
    capture: boolean;
    /**
     * Specifies the current data persistence mode. The data persistence mode controls how biometric data that has been captured using the Biometric.Read will be handled.
     *
     * See {@link DataPersistenceEnum}
     */
    dataPersistence: DataPersistenceEnum;
    /**
     * Specifies how much of the reserved storage specified by the templateStorage capability is remaining for the storage of templates in bytes. if omitted, this property is not supported.
     *
     * Property value constraints:
     *
     * minimum: 0
     */
    remainingStorage: number;
}
