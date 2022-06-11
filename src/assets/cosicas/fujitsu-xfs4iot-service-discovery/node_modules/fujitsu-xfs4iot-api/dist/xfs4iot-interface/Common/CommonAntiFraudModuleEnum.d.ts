export declare enum CommonAntiFraudModuleEnum {
    /** Anti-fraud module is in a good state and no foreign device is detected. */
    OK = "ok",
    /** Anti-fraud module is inoperable. */
    INOPERABLE = "inoperable",
    /** Anti-fraud module detected the presence of a foreign device. */
    DEVICE_DETECTED = "deviceDetected",
    /** The state of the anti-fraud module cannot be determined. */
    UNKNOWN = "unknown"
}
