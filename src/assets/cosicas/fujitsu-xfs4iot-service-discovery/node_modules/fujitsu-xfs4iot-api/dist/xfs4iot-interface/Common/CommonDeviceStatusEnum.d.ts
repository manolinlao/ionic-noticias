export declare enum CommonDeviceStatusEnum {
    /** The device is online. This is returned when the device is present and operational. */
    ONLINE = "online",
    /** The device is offline (e.g., the operator has taken the device offline by turning a switch or breaking an interlock). */
    OFFLINE = "offline",
    /** The device is powered off or physically not connected. */
    POWER_OFF = "powerOff",
    /** The device is not intended to be there, e.g. this type of self service machine does not contain such a device or it is internally not configured. */
    NO_DEVICE = "noDevice",
    /** The device is inoperable due to a hardware error. */
    HARDWARE_ERROR = "hardwareError",
    /** The device is present but a person is preventing proper device operation. */
    USER_ERROR = "userError",
    /** The device is busy and unable to process a command at this time. */
    DEVICE_BUSY = "deviceBusy",
    /** The device is present but is inoperable because it has detected a fraud attempt. */
    FRAUD_ATTEMPT = "fraudAttempt",
    /** The device has detected a potential fraud attempt and is capable of remaining in service. In this case the application should make the decision as to whether to take the device offline. */
    POTENTIAL_FRAUD = "potentialFraud",
    /**
     * The device is starting and performing whatever initialization is necessary.
     * This can be reported after the connection is made but before the device is ready to accept commands.
     * This must only be a temporary state, the Service must report a different state as soon as possible.
     * If an error causes initialization to fail then the state should change to hardwareError.
     */
    STARTING = "starting"
}
