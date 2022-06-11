import { CardReaderEventType } from '.';
import { XfsEventMessage, XfsMessagePayload } from '../../Core';
export interface CardReaderMediaDetectedEventPayload extends XfsMessagePayload {
    /**
     * Specifies a card position or jammed state as one of the following:
     *
     * exit -> A card is at the exit position.
     *
     * transport -> A card is in the transport position.
     *
     * "storage unit identifier" -> A card is in the identified retain or park storage unit.
     *
     * jammed -> A card is jammed in the device.
     *
     * Property value constraints:
     *
     * pattern: ^exit$|^transport$|^jammed$|^unit[0-9A-Za-z]+$
     */
    position: string;
}
/**
 * This is generated if media is detected during a CardReader.Reset.
 * The event payload informs the application of the position or state of a card on the completion of the CardReader.
 * Reset command. For devices with park storage units, there will be one event for each card found.
 */
export interface CardReaderMediaDetectedEvent extends XfsEventMessage<CardReaderEventType.MediaDetectedEvent, CardReaderMediaDetectedEventPayload> {
}
