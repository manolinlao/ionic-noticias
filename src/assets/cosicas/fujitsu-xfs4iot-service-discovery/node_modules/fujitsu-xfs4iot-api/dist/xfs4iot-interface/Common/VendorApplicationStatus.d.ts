export declare enum AccessLevelEnum {
    /** The application is not active. */
    NOT_ACTIVE = "notActive",
    /** The application is active for the basic access level. */
    BASIC = "basic",
    /** The application is active for the intermediate access level. */
    INTERMEDIATE = "intermediate",
    /** The application is active for the full access level. */
    FULL = "full"
}
export interface VendorApplicationStatus {
    /**
     * Reports the current access level
     *
     * See {@link AccessLevelEnum}
     */
    accessLevel?: AccessLevelEnum;
}
