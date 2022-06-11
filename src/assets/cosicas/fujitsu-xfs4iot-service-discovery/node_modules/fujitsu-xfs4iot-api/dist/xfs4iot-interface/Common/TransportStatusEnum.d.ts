export declare enum TransportStatusEnum {
    /** The transport is empty. */
    EMPTY = "empty",
    /** The transport is not empty. */
    NOT_EMPTY = "notEmpty",
    /** Items which a customer has had access to are on the transport. */
    NOT_EMPTY_CUSTOMER = "notEmptyCustomer",
    /** Due to a hardware error or other condition it is not known whether there are items on the transport. */
    UNKNOWN = "unknown",
    /** The device is not capable of reporting whether items are on the transport. */
    NOT_SUPPORTED = "notSupported"
}
