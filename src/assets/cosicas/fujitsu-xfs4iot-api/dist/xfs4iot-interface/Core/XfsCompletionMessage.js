"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XfsCompletionCodeEnum = void 0;
/**
 * After a command message has been received and associated acknowledge message sent, the completion code, either success or an error code, will be included in the completion message for that command.
 * The interface specification will define command specific error codes that are valid for each completion message.
 * No other error codes will be returned by the Service for the completion message.
 */
var XfsCompletionCodeEnum;
(function (XfsCompletionCodeEnum) {
    /**  success. */
    XfsCompletionCodeEnum["SUCCESS"] = "success";
    /**  Check the errorCode property for the command specific error code. */
    XfsCompletionCodeEnum["COMMAND_ERROR_CODE"] = "commandErrorCode";
    /**  Canceled using the Common.Cancel command. */
    XfsCompletionCodeEnum["CANCELED"] = "canceled";
    /**  Timed out after the client specified timeout. */
    XfsCompletionCodeEnum["TIMEOUT"] = "timeOut";
    /**  The device is not ready or timed out. */
    XfsCompletionCodeEnum["DEVICE_NOT_READY"] = "deviceNotReady";
    /**  An error occurred on the device. */
    XfsCompletionCodeEnum["HARDWARE_ERROR"] = "hardwareError";
    /**  An internal inconsistency or other unexpected error occurred. */
    XfsCompletionCodeEnum["INTERNAL_ERROR"] = "internalError";
    /**  The command is not supported by the service. */
    XfsCompletionCodeEnum["INVALID_COMMAND"] = "invalidCommand";
    /**  The requestId is invalid. */
    XfsCompletionCodeEnum["INVALID_REQUESTID"] = "invalidRequestID";
    /**  The command is valid for the interface, but is not supported by the service or device. */
    XfsCompletionCodeEnum["UNSUPPORTED_COMMAND"] = "unsupportedCommand";
    /**  The command message contains invalid data. */
    XfsCompletionCodeEnum["INVALID_DATA"] = "invalidData";
    /**  The user is preventing proper operation of the device. */
    XfsCompletionCodeEnum["USER_ERROR"] = "userError";
    /**  The command message contains data that is valid for the interface command, but is not supported by the service or device. */
    XfsCompletionCodeEnum["UNSUPPORTED_DATA"] = "unsupportedData";
    /**  The user is attempting a fraudulent act on the device. */
    XfsCompletionCodeEnum["FRAUD_ATTEMPT"] = "fraudAttempt";
    /**  The command request is not valid at this time or in the device's current state. */
    XfsCompletionCodeEnum["SEQUENCE_ERROR"] = "sequenceError";
    /**  The command request cannot be performed because it requires authorization. */
    XfsCompletionCodeEnum["AUTHORIZATION_REQUIRED"] = "authorizationRequired";
    /**  The value of the nonce stored in the hardware was cleared, for example by a power failure. */
    XfsCompletionCodeEnum["NO_COMMAND_NONCE"] = "noCommandNonce";
    /**  The security token is invalid. */
    XfsCompletionCodeEnum["INVALID_TOKEN"] = "invalidToken";
    /**  The value of the nonce in the security token does not match the stored value. */
    XfsCompletionCodeEnum["INVALID_TOKEN_NONCE"] = "invalidTokenNonce";
    /**  The value of the HMAC in the security token is incorrect. */
    XfsCompletionCodeEnum["INVALID_TOKEN_HMAC"] = "invalidTokenHMAC";
    /**  The token format version value is not recognized, or the token format is somehow invalid. */
    XfsCompletionCodeEnum["INVALID_TOKEN_FORMAT"] = "invalidTokenFormat";
    /**  The key used for the HMAC for a token has not been loaded and the token cannot be validated. */
    XfsCompletionCodeEnum["INVALID_TOKEN_KEY_NO_VALUE"] = "invalidTokenKeyNoValue";
})(XfsCompletionCodeEnum = exports.XfsCompletionCodeEnum || (exports.XfsCompletionCodeEnum = {}));
//# sourceMappingURL=XfsCompletionMessage.js.map