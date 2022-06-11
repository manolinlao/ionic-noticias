export interface AutoBeepMode {
    /**
     * Specifies whether an automatic tone will be generated for all active keys.
     *
     * default: false
     */
    activeAvailable?: boolean;
    /**
     * Specifies whether an automatic tone will be generated for all inactive keys.
     *
     * default: false
     */
    inactiveAvailable?: boolean;
}
export interface KeyboardStatus {
    /**
     * Specifies whether automatic beep tone on key press is active or not. Active and inactive key beeping is reported independently.
     *
     * See {@link AutoBeepMode}
     */
    autoBeepMode: AutoBeepMode;
}
