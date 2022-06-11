export declare enum ShutterEnum {
    /** The shutter is operational and is closed. */
    CLOSED = "closed",
    /** The shutter is operational and is open. */
    OPEN = "open",
    /** The shutter is jammed, but fully open. It is not operational. */
    JAMMED_OPEN = "jammedOpen",
    /** The shutter is jammed, but partially open. It is not operational. */
    JAMMED_PARTIALLY_OPEN = "jammedPartiallyOpen",
    /** The shutter is jammed, but fully closed. It is not operational. */
    JAMMED_CLOSED = "jammedClosed",
    /** The shutter is jammed, but its position is unknown. It is not operational. */
    JAMMED_UNKNOWN = "jammedUnknown",
    /** Due to a hardware error or other condition, the state of the shutter cannot be determined. */
    UNKNOWN = "unknown",
    /** The physical device has no shutter or shutter state reporting is not supported. */
    NOT_SUPPORTED = "notSupported"
}
