"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightDirectionEnum = exports.LightColorEnum = exports.LightFlashRateEnum = exports.LightPositionEnum = void 0;
var LightPositionEnum;
(function (LightPositionEnum) {
    /** The left position. */
    LightPositionEnum["LEFT"] = "left";
    /** The right position. */
    LightPositionEnum["RIGHT"] = "right";
    /** The center position. */
    LightPositionEnum["CENTER"] = "center";
    /** The top position. */
    LightPositionEnum["TOP"] = "top";
    /** The bottom position. */
    LightPositionEnum["BOTTOM"] = "bottom";
    /** The front position. */
    LightPositionEnum["FRONT"] = "front";
    /** The rear position. */
    LightPositionEnum["REAR"] = "rear";
})(LightPositionEnum = exports.LightPositionEnum || (exports.LightPositionEnum = {}));
var LightFlashRateEnum;
(function (LightFlashRateEnum) {
    /** The light is turned off. */
    LightFlashRateEnum["OFF"] = "off";
    /** The light is flashing slowly. */
    LightFlashRateEnum["SLOW"] = "slow";
    /** The light is flashing medium frequency. */
    LightFlashRateEnum["MEDIUM"] = "medium";
    /** The light is flashing quickly. */
    LightFlashRateEnum["QUICK"] = "quick";
    /** The light is continuous (steady). */
    LightFlashRateEnum["CONTINUOUS"] = "continuous";
})(LightFlashRateEnum = exports.LightFlashRateEnum || (exports.LightFlashRateEnum = {}));
var LightColorEnum;
(function (LightColorEnum) {
    /** The light is red. */
    LightColorEnum["RED"] = "red";
    /** The light is green. */
    LightColorEnum["GREEN"] = "green";
    /** The light is yellow. */
    LightColorEnum["YELLOW"] = "yellow";
    /** The light is blue. */
    LightColorEnum["BLUE"] = "blue";
    /** The light is cyan. */
    LightColorEnum["CYAN"] = "cyan";
    /** The light is magenta. */
    LightColorEnum["MAGENTA"] = "magenta";
    /** The light is white. */
    LightColorEnum["WHITE"] = "white";
})(LightColorEnum = exports.LightColorEnum || (exports.LightColorEnum = {}));
var LightDirectionEnum;
(function (LightDirectionEnum) {
    /** The light is indicating entry. */
    LightDirectionEnum["ENTRY"] = "entry";
    /** The light is indicating exit. */
    LightDirectionEnum["EXIT"] = "exit";
})(LightDirectionEnum = exports.LightDirectionEnum || (exports.LightDirectionEnum = {}));
//# sourceMappingURL=CommonLightStatus.js.map