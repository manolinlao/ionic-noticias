import { CardReaderEventType } from '.';
import { XfsEventMessage } from '../../Core';
/**
 * This event specifies that a card was inserted into the device.
 */
export interface CardReaderMediaInsertedEvent extends XfsEventMessage<CardReaderEventType.MediaInsertedEvent, {}> {
}
