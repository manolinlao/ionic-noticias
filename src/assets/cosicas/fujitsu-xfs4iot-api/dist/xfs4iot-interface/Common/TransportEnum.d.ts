export declare enum TransportEnum {
    /** The transport is in a good state. */
    OK = "ok",
    /** The transport is inoperative due to a hardware failure or media jam. */
    INOPERATIVE = "inoperative",
    /** Due to a hardware error or other condition the state of the transport cannot be determined. */
    UNKNOWN = "unknown",
    /** The physical device has no transport or transport state reporting is not supported. */
    NOT_SUPPORTED = "notSupported"
}
