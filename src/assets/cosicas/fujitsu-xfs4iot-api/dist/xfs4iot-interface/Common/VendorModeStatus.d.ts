export declare enum VendorModeDeviceEnum {
    /** The Vendor Mode service is available. */
    ONLINE = "online",
    /** The Vendor Mode service is not available */
    OFFLINE = "offline"
}
export declare enum VendorModeServiceEnum {
    /** Vendor Mode enter request pending. */
    ENTER_PENDING = "enterPending",
    /** Vendor Mode active. */
    ACTIVE = "active",
    /** Vendor Mode exit request pending. */
    EXIT_PENDING = "exitPending",
    /** Vendor Mode inactive. */
    INACTIVE = "inactive"
}
export interface VendorModeStatus {
    /**
     * Specifies the status of the Vendor Mode Service.
     *
     * See {@link VendorModeDevice}
     */
    device?: VendorModeDeviceEnum;
    /**
     * Specifies the service state
     *
     * See {@link VendorModeServiceEnum}
     */
    service?: VendorModeServiceEnum;
}
