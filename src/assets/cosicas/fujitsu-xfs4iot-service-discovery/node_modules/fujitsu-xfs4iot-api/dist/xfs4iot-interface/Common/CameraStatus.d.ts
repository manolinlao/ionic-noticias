export declare enum CameraMediaEnum {
    /** The media is in a good state. */
    OK = "ok",
    /** The media is almost full (threshold). */
    HIGH = "high",
    /** The media is full. */
    FULL = "full",
    /** The device does not support sensing the media level. */
    NOT_SUPPORTED = "notSupported",
    /** Due to a hardware error or other condition, the state of the media cannot be determined. */
    UNKNOWN = "unknown"
}
/**
 * room?: Specifies the state of the recording media of the camera that monitors the whole self-service area.
 *
 * person?: Specifies the state of the recording media of the camera that monitors the person standing in front of the self-service machine.
 *
 * exitSlot?: Specifies the state of the recording media of the camera that monitors the exit slot(s) of the self-service machine.
 *
 */
export interface Media {
    /**
     * See {@link CameraMediaEnum}
     */
    [key: string]: CameraMediaEnum;
}
export declare enum CamerasEnum {
    /** The camera is not supported. */
    NOT_SUPPORTED = "notSupported",
    /** The camera is in a good state. */
    OK = "ok",
    /** The camera is inoperative. */
    INOPERATIVE = "inoperative",
    /** Due to a hardware error or other condition, the state of the camera cannot be determined. */
    UNKNOWN = "unknown"
}
/**
 * room?: Specifies the state of the camera that monitors the whole self-service area.
 *
 * person?: Specifies the state of the camera that monitors the person standing in front of the self-service machine.
 *
 * exitSlot?: Specifies the state of the camera that monitors the exit slot(s) of the self-service machine.
 *
 */
export interface Cameras {
    /**
     * See {@link CamerasEnum}
     */
    [key: string]: CamerasEnum;
}
/**
 * room?:: Specifies the number of pictures stored on the recording media of the room camera.
 * Property value constraints:
 * minimum: 0
 *
 * person?: Specifies the number of pictures stored on the recording media of the person camera.
 * Property value constraints:
 * minimum: 0
 *
 * exitSlot?: Specifies the number of pictures stored on the recording media of the exit slot camera.
 * Property value constraints:
 * minimum: 0
 *
 */
export interface Pictures {
    /**
     * Property value constraints:
     *
     * minimum: 0
     */
    [key: string]: number;
}
export interface CameraStatus {
    /**
     * Specifies the state of the recording media of the cameras as one of the following. For a device which stores pictures on a hard disk drive or other general-purpose storage, this will be notSupported.
     *
     * See {@link Media}
     */
    media?: Media;
    /**
     * Specifies the state of the cameras.
     *
     * See {@link Cameras}
     */
    cameras?: Cameras;
    /**
     * Specifies the number of pictures stored on the recording media of the cameras. For a device which stores pictures on a hard disk drive or other general-purpose storage, the value of the property should be 0.
     *
     * See {@link Pictures}
     */
    pictures?: Pictures;
}
