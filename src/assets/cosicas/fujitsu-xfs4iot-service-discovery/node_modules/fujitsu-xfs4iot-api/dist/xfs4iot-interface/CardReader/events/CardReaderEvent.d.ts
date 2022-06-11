import { CardReaderEventType, CardReaderEMVClessReadStatusEvent, CardReaderInsertCardEvent, CardReaderInvalidMediaEvent, CardReaderMediaDetectedEvent, CardReaderMediaInsertedEvent, CardReaderTrackDetectedEventPayload } from '.';
import { XfsEventMessage, XfsMessagePayload } from '../../Core';
/** TODO: Revisar, creo que este objeto no se llega a usar nunca */
export interface CardReaderEvent<P extends XfsMessagePayload> extends XfsEventMessage<CardReaderEventType, P> {
}
export declare type CardReaderEvents = CardReaderEMVClessReadStatusEvent | CardReaderInsertCardEvent | CardReaderInvalidMediaEvent | CardReaderMediaDetectedEvent | CardReaderMediaInsertedEvent | CardReaderTrackDetectedEventPayload;
