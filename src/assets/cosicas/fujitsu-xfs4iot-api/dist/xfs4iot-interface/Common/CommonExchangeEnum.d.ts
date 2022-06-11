export declare enum CommonExchangeEnum {
    /** Exchange is not supported on this service. */
    NOT_SUPPORTED = "notSupported",
    /** Exchange is active on this service. Commands which interact with the device may be rejected with an error code as appropriate. */
    ACTIVE = "active",
    /** Exchange is not active on this service. */
    INACTIVE = "inactive"
}
