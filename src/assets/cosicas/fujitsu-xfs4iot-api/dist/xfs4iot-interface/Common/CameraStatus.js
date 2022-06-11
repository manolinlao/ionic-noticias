"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CamerasEnum = exports.CameraMediaEnum = void 0;
var CameraMediaEnum;
(function (CameraMediaEnum) {
    /** The media is in a good state. */
    CameraMediaEnum["OK"] = "ok";
    /** The media is almost full (threshold). */
    CameraMediaEnum["HIGH"] = "high";
    /** The media is full. */
    CameraMediaEnum["FULL"] = "full";
    /** The device does not support sensing the media level. */
    CameraMediaEnum["NOT_SUPPORTED"] = "notSupported";
    /** Due to a hardware error or other condition, the state of the media cannot be determined. */
    CameraMediaEnum["UNKNOWN"] = "unknown";
})(CameraMediaEnum = exports.CameraMediaEnum || (exports.CameraMediaEnum = {}));
var CamerasEnum;
(function (CamerasEnum) {
    /** The camera is not supported. */
    CamerasEnum["NOT_SUPPORTED"] = "notSupported";
    /** The camera is in a good state. */
    CamerasEnum["OK"] = "ok";
    /** The camera is inoperative. */
    CamerasEnum["INOPERATIVE"] = "inoperative";
    /** Due to a hardware error or other condition, the state of the camera cannot be determined. */
    CamerasEnum["UNKNOWN"] = "unknown";
})(CamerasEnum = exports.CamerasEnum || (exports.CamerasEnum = {}));
//# sourceMappingURL=CameraStatus.js.map