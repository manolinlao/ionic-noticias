import { CardReaderEventType } from '.';
import { XfsEventMessage } from '../../Core';
/**
 * This event notifies the application when the device is ready for the user to insert a card.
 */
export interface CardReaderInsertCardEvent extends XfsEventMessage<CardReaderEventType.InsertCardEvent, {}> {
}
