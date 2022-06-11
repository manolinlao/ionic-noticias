import { CardReaderUnsolicitedType } from '.';
import { XfsUnsolicitedMessage } from '../../Core';
/**
 * This unsolicited event indicates the card was manually removed by the user either during processing of a command which requires the card to be present or the card is removed from the exit position.
 */
export interface CardReaderUnsolicitedMediaRemovedEvent extends XfsUnsolicitedMessage<CardReaderUnsolicitedType.MediaRemovedEvent, {}> {
}
