import { XfsMessageType } from '.';
/**
 * XfsMessageHeader: Headers are consistent across all XFS4IoT Message Types. All of the following attributes are mandatory.
 */
export interface XfsMessageHeader<T extends XfsMessageType, N> {
    /** The message type see {@link XfsMessageType} */
    type: T;
    /**
     * The message name, for example Common.Status.
     */
    name: N;
    /**
     * Unique request identifier supplied by the client used to correlate the command with acknowledge, event and completion messages.
     *
     * For unsolicited messages the value will be zero.
     * For all other message types this will be an integer.
     *
     * The client will supply values that are positive, incremental and
     * start with 1, so that unsolicited events can be distinguished. The service will check that the requestID does
     * not conflict with a currently executing or queued command request from the same client and reject if it
     * does.
     */
    requestId: number;
}
