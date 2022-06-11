import { XfsMessage, XfsMessagePayload, XfsMessageType } from '.';
import { CardReaderEvents } from '../CardReader';
/**
 * During the processing of the command the service can send multiple solicited events, as defined in the interface chapters.
 * This is used to inform the client when something significant happens that it may need to react to, like a card being inserted or a key being pressed.
 *
 * Each solicited event will contain the original requestId in the header, and will only be sent on the connection that the original command was received on,
 * so that individual solicited events can be linked to the original command by the client.
 *
 * For compatibility with future specification changes, and to permit custom extensions by service implementors, the client should ignore any events that it does not recognize.
 */
export interface XfsEventMessage<N, P extends XfsMessagePayload> extends XfsMessage<XfsMessageType.EVENT, N, P> {
}
/** TODO: añadir el resto de eventos de cada unidad. */
export declare type XfsEventMessages = CardReaderEvents;
