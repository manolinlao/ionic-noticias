"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionStatusEnum = void 0;
var PositionStatusEnum;
(function (PositionStatusEnum) {
    /** The position is empty. */
    PositionStatusEnum["EMPTY"] = "empty";
    /** The position is not empty. */
    PositionStatusEnum["NOT_EMPTY"] = "notEmpty";
    /** Due to a hardware error or other condition, the state of the position cannot be determined. */
    PositionStatusEnum["UNKNOWN"] = "unknown";
    /** The device is not capable of reporting whether items are at the position. */
    PositionStatusEnum["NOT_SUPPORTED"] = "notSupported";
})(PositionStatusEnum = exports.PositionStatusEnum || (exports.PositionStatusEnum = {}));
//# sourceMappingURL=PositionStatusEnum.js.map