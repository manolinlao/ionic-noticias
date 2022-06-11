import { XfsMessage, XfsMessageType } from '.';
/**
 * One of the status codes listed below. The status codes are intentionally defined to be very simple and not cover all cases.
 * Extra information about exactly what caused a failure can be included in errorDescription non-standard debugging properties in the acknowledge message.
 */
export declare enum XfsAckStatusEnum {
    /** The command has been accepted for execution and will complete with a completion message. */
    OK = "ok",
    /** Message cannot be decoded. */
    INVALID_MESSAGE = "invalidMessage",
    /** requestId is not greater than 0, or not greater than the previous requestId. */
    INVALID_REQUEST_ID = "invalidRequestID",
    /** TThere are currently too many requests queued by the service and the service cannot queue any more. */
    TOO_MANY_REQUESTS = "tooManyRequests"
}
export interface XfsAckPayload {
    /** See {@link XfsAckStatusEnum} */
    status: XfsAckStatusEnum;
    /**
     * If status is not ok this will give a human readable description of what caused the error.
     * This may include details which help diagnose the cause.
     *
     * The format of this string should not be relied on.
     */
    errorDescription?: string;
}
/**
 * As soon as the service has received and decoded the command message it will send an acknowledge message to indicate that the command message has been received and queued.
 * This will normally include the requestId so that the client can identify which command it relates to (unless an error occurs which prevents the requestId being included).
 * The message uses the standard header properties with type set to acknowledge.
 *
 * Sending the acknowledge message immediately allows the client to handle network errors and lost messages more quickly.
 * It can set a short timeout and expect to receive the acknowledge within that timeout, and continue with error handling if it does not.
 *
 * Receiving the acknowledge message does not give any guarantees about what the service will do with the command, or even that it can be executed.
 * Any errors will be reported in the completion message for the command, not in the acknowledge.
 *
 * The only exception is when it would be impossible for the service to send a useful completion message, such as if there's no requestId to include in the completion message.
 * In this small number of cases an error code will be included in the acknowledge message.
 *
 * The acknowledge message contains the following standard payload properties.
 */
export interface XfsAckMessage<N> extends XfsMessage<XfsMessageType.ACK, N, XfsAckPayload> {
}
