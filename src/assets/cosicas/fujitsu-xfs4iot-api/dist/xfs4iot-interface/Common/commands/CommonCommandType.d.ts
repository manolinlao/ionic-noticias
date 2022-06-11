export declare enum CommonCommandType {
    /**
     * This command is used to obtain the overall status of the Service.
     * The status includes common status information and can include zero or more interface specific status objects, depending on the interfaces the Service supports.
     * It may also return vendor-specific status information.
     *
     * This command can be used while in Vendor Mode.
     */
    Status = "Common.Status",
    /**
     * This command retrieves the capabilities of the service. It may also return vendor specific capability information.
     *
     * This command can be used while in Vendor Mode.
     */
    Capabilities = "Common.Capabilities"
}
