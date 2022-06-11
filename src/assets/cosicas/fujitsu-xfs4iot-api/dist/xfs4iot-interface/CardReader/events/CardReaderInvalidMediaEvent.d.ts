import { CardReaderEventType } from '.';
import { XfsEventMessage } from '../../Core';
/**
 * This event specifies that the media the user is attempting to insert is not a valid card or it is a card but it is in the wrong orientation.
 */
export interface CardReaderInvalidMediaEvent extends XfsEventMessage<CardReaderEventType.InvalidMediaEvent, {}> {
}
