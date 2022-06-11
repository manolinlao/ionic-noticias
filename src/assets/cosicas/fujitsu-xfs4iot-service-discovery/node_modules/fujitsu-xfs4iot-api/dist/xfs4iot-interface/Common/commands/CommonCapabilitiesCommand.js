"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashDispenserTypeEnum = exports.ResponseSecurityEnum = exports.EndToEndSecurityRequiredEnum = exports.CommonCapabilitiesCommand = void 0;
const _1 = require(".");
const Core_1 = require("../../Core");
class CommonCapabilitiesCommand {
    constructor(requestId, timeout) {
        this.header = {
            name: _1.CommonCommandType.Capabilities,
            type: Core_1.XfsMessageType.COMMAND,
            requestId,
        };
        this.payload = {
            timeout,
        };
    }
}
exports.CommonCapabilitiesCommand = CommonCapabilitiesCommand;
var EndToEndSecurityRequiredEnum;
(function (EndToEndSecurityRequiredEnum) {
    /** The device is capable of supporting E2E security, but it will not be enforced if not configured, for example because the required keys are not loaded. */
    EndToEndSecurityRequiredEnum["IF_CONFIGURED"] = "ifConfigured";
    /**
     * E2E security is supported and enforced at all times. Failure to supply the required security details will lead to errors.
     * If E2E security is not correctly configured, for example because the required keys are not loaded, all secured commands will fail with an error.
     */
    EndToEndSecurityRequiredEnum["ALWAYS"] = "always";
})(EndToEndSecurityRequiredEnum = exports.EndToEndSecurityRequiredEnum || (exports.EndToEndSecurityRequiredEnum = {}));
var ResponseSecurityEnum;
(function (ResponseSecurityEnum) {
    /** The device is incapable of returning a response token. */
    ResponseSecurityEnum["NOT_SUPPORTED"] = "notSupported";
    /** The device is capable of supporting E2E security if correctly configured. If E2E security has not been correctly configured, for example because the required keys are not loaded, commands will complete without a security token. */
    ResponseSecurityEnum["IF_CONFIGURED"] = "ifConfigured";
    /** A security token will be included with command responses. If E2E security is not correctly configured, for example because the required keys are not loaded, the command will complete with an error. */
    ResponseSecurityEnum["ALWAYS"] = "always";
})(ResponseSecurityEnum = exports.ResponseSecurityEnum || (exports.ResponseSecurityEnum = {}));
var CashDispenserTypeEnum;
(function (CashDispenserTypeEnum) {
    /**  - The Dispenser is a Teller Bill Dispenser. */
    CashDispenserTypeEnum["TELLER_BILL"] = "tellerBill";
    /**  - The Dispenser is a Self-Service Bill Dispenser. */
    CashDispenserTypeEnum["SELF_SERVICE_BILL"] = "selfServiceBill";
    /**  - The Dispenser is a Teller Coin Dispenser. */
    CashDispenserTypeEnum["TELLER_COIN"] = "tellerCoin";
    /**  - The Dispenser is a Self-Service Coin Dispenser. */
    CashDispenserTypeEnum["SELF_SERVICE_COIN"] = "selfServiceCoin";
})(CashDispenserTypeEnum = exports.CashDispenserTypeEnum || (exports.CashDispenserTypeEnum = {}));
//# sourceMappingURL=CommonCapabilitiesCommand.js.map