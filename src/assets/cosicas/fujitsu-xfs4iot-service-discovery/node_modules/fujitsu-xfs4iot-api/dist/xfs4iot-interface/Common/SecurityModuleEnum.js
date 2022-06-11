"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityModuleEnum = void 0;
/** Specifies the state of the security module as one of the following: */
var SecurityModuleEnum;
(function (SecurityModuleEnum) {
    /** No security module is available. */
    SecurityModuleEnum["NOT_SUPPORTED"] = "notSupported";
    /** The security module is not ready to process cards or is inoperable. */
    SecurityModuleEnum["NOT_READY"] = "notReady";
    /** The security module is open and ready to process cards. */
    SecurityModuleEnum["OPEN"] = "open";
})(SecurityModuleEnum = exports.SecurityModuleEnum || (exports.SecurityModuleEnum = {}));
//# sourceMappingURL=SecurityModuleEnum.js.map