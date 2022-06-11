import { XfsMessage, XfsMessagePayload, XfsMessageType } from '.';
import { CardReaderUnsoliciteds } from '../CardReader';
import { CashManagementUnsoliciteds } from '../CashManagement';
import { StorageUnsoliciteds } from '../Storage';
import { CommonUnsolicitedStatusChangedEvent } from '../Common';
/**
 * The Service will also send unsolicited events to the client to signal events that can happen at any time, independent of command handling. These can happen before, during, or after any command handling.
 * The message uses the standard header properties with type set to unsolicited.
 *
 * To allow clients to react to events quickly, unsolicited messages should be sent as soon as possible.
 * For example, it should avoid queuing events until after the current command has been processed if it does not have to.
 *
 * Since unsolicited events are not linked to command handling, they do not have a matching requestId.
 * The event header will contain a requestId of 0.
 * Unsolicited events are also broadcast to all clients, on all open connections.
 *
 * Each interface chapter defines the unsolicited events relevant to the interface.
 *
 * For compatibility with future specification changes, and to permit custom extensions by service implementors, the client should ignore any events that it does not recognize.
 */
export interface XfsUnsolicitedMessage<N, P extends XfsMessagePayload> extends XfsMessage<XfsMessageType.UNSOLICITED, N, P> {
}
/** TODO añadir el resto de unsoliciteds de cada unidad. */
export declare type XfsUnsolicitedMessages = CommonUnsolicitedStatusChangedEvent | CardReaderUnsoliciteds | StorageUnsoliciteds | CashManagementUnsoliciteds;
