import { CardReaderUnsolicitedType, CardReaderUnsolicitedCardActionEvent, CardReaderUnsolicitedMediaRemovedEvent } from '.';
import { XfsMessagePayload, XfsUnsolicitedMessage } from '../../Core';
/** TODO: Revisar, creo que este objeto no se llega a usar nunca */
export interface CardReaderUnsolicited<P extends XfsMessagePayload> extends XfsUnsolicitedMessage<CardReaderUnsolicitedType, P> {
}
export declare type CardReaderUnsoliciteds = CardReaderUnsolicitedCardActionEvent | CardReaderUnsolicitedMediaRemovedEvent;
