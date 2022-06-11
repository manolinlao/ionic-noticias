import { XfsMessageHeader, XfsMessagePayload, XfsMessageType } from '.';
/**
 * XfsMessage: All the message types follow the same JSON structure conforming of a mandatory header and payload
 */
export interface XfsMessage<T extends XfsMessageType, N, P extends XfsMessagePayload> {
    /** containing properties that are common across all messages to allow the payload to be identified */
    header: XfsMessageHeader<T, N>;
    /**
     * containing properties that are specific to the message. It should be noted that not all messages
     * require payload properties, so the payload may be empty
     */
    payload: P;
}
