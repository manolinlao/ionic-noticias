import { XfsMessage, XfsMessagePayload, XfsMessageType } from '.';
import { CardReaderCompleteMessages } from '../CardReader';
import { CashDispenserCompleteMessages } from '../CashDispenser';
import { StorageCompleteMessages } from '../Storage';
import { CommonStatusCompleteMessages } from '../Common';
import { CashManagementCompleteMessages } from '../CashManagement';
/**
 * After a command message has been received and associated acknowledge message sent, the completion code, either success or an error code, will be included in the completion message for that command.
 * The interface specification will define command specific error codes that are valid for each completion message.
 * No other error codes will be returned by the Service for the completion message.
 */
export declare enum XfsCompletionCodeEnum {
    /**  success. */
    SUCCESS = "success",
    /**  Check the errorCode property for the command specific error code. */
    COMMAND_ERROR_CODE = "commandErrorCode",
    /**  Canceled using the Common.Cancel command. */
    CANCELED = "canceled",
    /**  Timed out after the client specified timeout. */
    TIMEOUT = "timeOut",
    /**  The device is not ready or timed out. */
    DEVICE_NOT_READY = "deviceNotReady",
    /**  An error occurred on the device. */
    HARDWARE_ERROR = "hardwareError",
    /**  An internal inconsistency or other unexpected error occurred. */
    INTERNAL_ERROR = "internalError",
    /**  The command is not supported by the service. */
    INVALID_COMMAND = "invalidCommand",
    /**  The requestId is invalid. */
    INVALID_REQUESTID = "invalidRequestID",
    /**  The command is valid for the interface, but is not supported by the service or device. */
    UNSUPPORTED_COMMAND = "unsupportedCommand",
    /**  The command message contains invalid data. */
    INVALID_DATA = "invalidData",
    /**  The user is preventing proper operation of the device. */
    USER_ERROR = "userError",
    /**  The command message contains data that is valid for the interface command, but is not supported by the service or device. */
    UNSUPPORTED_DATA = "unsupportedData",
    /**  The user is attempting a fraudulent act on the device. */
    FRAUD_ATTEMPT = "fraudAttempt",
    /**  The command request is not valid at this time or in the device's current state. */
    SEQUENCE_ERROR = "sequenceError",
    /**  The command request cannot be performed because it requires authorization. */
    AUTHORIZATION_REQUIRED = "authorizationRequired",
    /**  The value of the nonce stored in the hardware was cleared, for example by a power failure. */
    NO_COMMAND_NONCE = "noCommandNonce",
    /**  The security token is invalid. */
    INVALID_TOKEN = "invalidToken",
    /**  The value of the nonce in the security token does not match the stored value. */
    INVALID_TOKEN_NONCE = "invalidTokenNonce",
    /**  The value of the HMAC in the security token is incorrect. */
    INVALID_TOKEN_HMAC = "invalidTokenHMAC",
    /**  The token format version value is not recognized, or the token format is somehow invalid. */
    INVALID_TOKEN_FORMAT = "invalidTokenFormat",
    /**  The key used for the HMAC for a token has not been loaded and the token cannot be validated. */
    INVALID_TOKEN_KEY_NO_VALUE = "invalidTokenKeyNoValue"
}
export interface XfsCompletionMessagePayload<E> extends XfsMessagePayload {
    completionCode?: XfsCompletionCodeEnum;
    errorDescription?: string;
    errorCode?: E;
}
/**
 * If a command is accepted, there will be one completion message. If an acknowledge message with an error code is returned to the command message then the command will not be executed, and no completion message will be sent.
 *
 * The message uses the standard header properties with type set to completion.
 * The completion message will contain the requestId from the original command message, so that the client can link the message back to the command.
 * After the completion message for a command has been sent with a particular requestId, no more messages will be sent with that requestId.
 *
 * Each completion message will contain as much information as possible to avoid requiring extra events.
 * For example, when a command is used to fetch information from the Service then the information will be included in the completion message.
 * When a command results in particular information, like reading a card, then that information is included in the completion message.
 * The exact information included in each completion message is defined in the interface document that defines that completion message.
 *
 * Examples of completion messages are shown in the example sequence.
 *
 * After a command message has been received and associated acknowledge sent, the completion code, either success or an error code, will be included in the completion message for that command.
 * The interface chapter may define command specific error codes that are valid for each completion message. No other error codes will be returned by the service for the completion message.
 *
 * The completion message payload completionCode property contains one of the values defined in Completion Codes.
 *
 * When an error occurs, optional vendor specific information may be included in the errorDescription property.
 */
export interface XfsCompletionMessage<N, E, P extends XfsCompletionMessagePayload<E>> extends XfsMessage<XfsMessageType.COMPLETION, N, P> {
}
/** TODO: a??adir el resto de completions de cada unidad. */
export declare type XfsCompletionMessages = CommonStatusCompleteMessages | CardReaderCompleteMessages | CashDispenserCompleteMessages | StorageCompleteMessages | CashManagementCompleteMessages;
