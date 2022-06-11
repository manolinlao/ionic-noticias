"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonEndToEndSecurityEnum = void 0;
var CommonEndToEndSecurityEnum;
(function (CommonEndToEndSecurityEnum) {
    /** E2E security is not supported by this hardware. Any command can be called without a token. */
    CommonEndToEndSecurityEnum["NOT_SUPPORTED"] = "notSupported";
    /** E2E security is supported by this hardware but it is not currently enforced, for example because required keys aren't loaded. It's currently possible to perform E2E commands without a token. */
    CommonEndToEndSecurityEnum["NOT_ENFORCED"] = "notEnforced";
    /** E2E security is supported but not correctly configured, for example because required keys aren't loaded. Any attempt to perform any command protected by E2E security will fail. */
    CommonEndToEndSecurityEnum["NOT_CONFIGURED"] = "notConfigured";
    /** E2E security is supported and correctly configured. E2E security will be enforced. Calling E2E protected commands will only be possible if a valid token is given. */
    CommonEndToEndSecurityEnum["ENFORCED"] = "enforced";
})(CommonEndToEndSecurityEnum = exports.CommonEndToEndSecurityEnum || (exports.CommonEndToEndSecurityEnum = {}));
//# sourceMappingURL=CommonEndToEndSecurityEnum.js.map