export declare enum KeyboardEnum {
    /** The keyboard is activated. */
    ON = "on",
    /** The keyboard is not activated. */
    OFF = "off",
    /** The keyboard is not available. */
    NOT_AVAILABLE = "notAvailable"
}
export declare enum KeyLockEnum {
    /** The keyboard lock switch is activated. */
    ON = "on",
    /** The keyboard lock switch is not activated. */
    OFF = "off",
    /** The keyboard lock switch is not available. */
    NOT_AVAILABLE = "notAvailable"
}
export interface TextTerminalStatus {
    /**
     * Specifies the state of the keyboard in the text terminal unit
     *
     * See {@link KeyboardEnum}
     */
    keyboard: KeyboardEnum;
    /**
     * Specifies the state of the keyboard lock of the text terminal unit
     *
     * See {@link KeyLockEnum}
     */
    keyLock: KeyLockEnum;
    /**
     * Specifies the horizontal size of the display of the text terminal unit (the number of columns that can be displayed).
     *
     * Property value constraints:
     *
     * minimum: 0
     */
    displaySizeX: number;
    /**
     * Specifies the vertical size of the display of the text terminal unit (the number of rows that can be displayed).
     *
     * Property value constraints:
     *
     * minimum: 0
     */
    displaySizeY: number;
}
