"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonAntiFraudModuleEnum = void 0;
var CommonAntiFraudModuleEnum;
(function (CommonAntiFraudModuleEnum) {
    /** Anti-fraud module is in a good state and no foreign device is detected. */
    CommonAntiFraudModuleEnum["OK"] = "ok";
    /** Anti-fraud module is inoperable. */
    CommonAntiFraudModuleEnum["INOPERABLE"] = "inoperable";
    /** Anti-fraud module detected the presence of a foreign device. */
    CommonAntiFraudModuleEnum["DEVICE_DETECTED"] = "deviceDetected";
    /** The state of the anti-fraud module cannot be determined. */
    CommonAntiFraudModuleEnum["UNKNOWN"] = "unknown";
})(CommonAntiFraudModuleEnum = exports.CommonAntiFraudModuleEnum || (exports.CommonAntiFraudModuleEnum = {}));
//# sourceMappingURL=CommonAntiFraudModuleEnum.js.map