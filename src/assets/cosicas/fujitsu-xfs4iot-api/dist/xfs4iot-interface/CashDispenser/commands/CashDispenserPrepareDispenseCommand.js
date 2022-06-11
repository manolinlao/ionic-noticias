"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrepareDispenseActionEnum = void 0;
var PrepareDispenseActionEnum;
(function (PrepareDispenseActionEnum) {
    /** Initiates the action to prepare for the next dispense command. This command does not wait until the device is ready to dispense before returning a completion event, it completes as soon as the preparation has been initiated. */
    PrepareDispenseActionEnum["START"] = "start";
    /** Stops the previously activated dispense preparation. For example the motor of the transport will be stopped. This should be used if for some reason the subsequent dispense operation is no longer required. */
    PrepareDispenseActionEnum["STOP"] = "stop";
})(PrepareDispenseActionEnum = exports.PrepareDispenseActionEnum || (exports.PrepareDispenseActionEnum = {}));
//# sourceMappingURL=CashDispenserPrepareDispenseCommand.js.map