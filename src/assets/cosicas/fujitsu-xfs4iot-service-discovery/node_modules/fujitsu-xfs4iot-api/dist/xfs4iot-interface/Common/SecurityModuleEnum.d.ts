/** Specifies the state of the security module as one of the following: */
export declare enum SecurityModuleEnum {
    /** No security module is available. */
    NOT_SUPPORTED = "notSupported",
    /** The security module is not ready to process cards or is inoperable. */
    NOT_READY = "notReady",
    /** The security module is open and ready to process cards. */
    OPEN = "open"
}
