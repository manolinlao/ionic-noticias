export declare enum ScannerEnum {
    /** Scanner is enabled for reading. */
    ON = "on",
    /** Scanner is disabled. */
    OFF = "off",
    /** Scanner is inoperative due to a hardware error. */
    INOPERATIVE = "inoperative",
    /** Scanner status cannot be determined. */
    UNKNOWN = "unknown"
}
export interface BarcodeReaderStatus {
    /**
     * Specifies the scanner status (laser, camera or other technology)
     *
     * See {@link ScannerEnum}
     */
    scanner?: ScannerEnum;
}
