export declare enum LightPositionEnum {
    /** The left position. */
    LEFT = "left",
    /** The right position. */
    RIGHT = "right",
    /** The center position. */
    CENTER = "center",
    /** The top position. */
    TOP = "top",
    /** The bottom position. */
    BOTTOM = "bottom",
    /** The front position. */
    FRONT = "front",
    /** The rear position. */
    REAR = "rear"
}
export declare enum LightFlashRateEnum {
    /** The light is turned off. */
    OFF = "off",
    /** The light is flashing slowly. */
    SLOW = "slow",
    /** The light is flashing medium frequency. */
    MEDIUM = "medium",
    /** The light is flashing quickly. */
    QUICK = "quick",
    /** The light is continuous (steady). */
    CONTINUOUS = "continuous"
}
export declare enum LightColorEnum {
    /** The light is red. */
    RED = "red",
    /** The light is green. */
    GREEN = "green",
    /** The light is yellow. */
    YELLOW = "yellow",
    /** The light is blue. */
    BLUE = "blue",
    /** The light is cyan. */
    CYAN = "cyan",
    /** The light is magenta. */
    MAGENTA = "magenta",
    /** The light is white. */
    WHITE = "white"
}
export declare enum LightDirectionEnum {
    /** The light is indicating entry. */
    ENTRY = "entry",
    /** The light is indicating exit. */
    EXIT = "exit"
}
/**
 * Status information for XFS4IoT services implementing the Lights interface.
 * This will be omitted if the Lights interface is not supported.
 */
export interface CommonLightStatus {
    /**
     * The light position. Can be used for devices which have multiple input and output positions, omitted if not required.
     *
     * See {@link LightPositionEnum}
     */
    position?: LightPositionEnum;
    /**
     * The light flash rate
     *
     * See {@link LightFlashRateEnum}
     */
    flashRate?: LightFlashRateEnum;
    /**
     * The light color
     *
     * See {@link LightColorEnum}
     */
    color?: LightColorEnum;
    /**
     * The light direction
     *
     * See {@link LightDirectionEnum}
     */
    direction?: LightDirectionEnum;
}
