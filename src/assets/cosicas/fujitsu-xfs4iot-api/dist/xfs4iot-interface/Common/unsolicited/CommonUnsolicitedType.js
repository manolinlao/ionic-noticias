"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonUnsolicitedType = void 0;
var CommonUnsolicitedType;
(function (CommonUnsolicitedType) {
    /**
     * This event reports that a change of common state has occurred.
     * The new value of all properties which have changed value are included in the event payload.
     * Any properties which have not changed state are omitted.
     */
    CommonUnsolicitedType["StatusChangedEvent"] = "Common.StatusChangedEvent";
    /**
     * This event reports that an error has occurred.
     * In most cases, this is in addition to being reported via the error code that is returned as the command completion.
     *
     * In order to supply the maximum information, these events should be sent as soon as an error is detected.
     * In particular, if an error is detected during the processing of a command, then the event should be sent before the command completion message.
     */
    CommonUnsolicitedType["ErrorEvent"] = "Common.ErrorEvent";
    /**
     * This event reports that the end to end security nonce value has been cleared on the device.
     * This could be because the nonce was explicitly cleared with Common.ClearCommandNonce, automatically cleared by a timeout, or cleared by actions documented for each device.
     */
    CommonUnsolicitedType["NonceClearedEvent"] = "Common.NonceClearedEvent";
})(CommonUnsolicitedType = exports.CommonUnsolicitedType || (exports.CommonUnsolicitedType = {}));
//# sourceMappingURL=CommonUnsolicitedType.js.map