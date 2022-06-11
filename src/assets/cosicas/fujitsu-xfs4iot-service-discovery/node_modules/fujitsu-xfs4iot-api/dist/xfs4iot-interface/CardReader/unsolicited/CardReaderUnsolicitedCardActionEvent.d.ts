import { CardReaderUnsolicitedType } from '.';
import { XfsUnsolicitedMessage } from '../../Core';
export interface CardReaderUnsolicitedCardActionEventPayload {
    /**
     * Position where the card was moved from. Possible values are:
     *
     * unknown -> The position of the card cannot be determined.
     *
     * exit -> The card was in the exit position
     *
     * transport -> The card was in the transport position.
     *
     * "storage unit identifier" -> The card was in a storage unit with matching identifier. The storage unit type must be park.
     *
     * Property value constraints:
     *
     * pattern: ^unknown$|^exit$|^transport$|^unit[0-9A-Za-z]+$
     */
    from?: 'unknown' | 'exit' | 'transport' | string;
    /**
     * Position where the card was moved to. Possible values are:
     *
     * exit -> The card was moved to the exit position.
     *
     * transport -> The card was moved to the transport position.
     *
     * "storage unit identifier" -> The card was moved to the storage unit with matching identifier. The storage unit type must be retain.
     *
     * Property value constraints:
     *
     * pattern: ^exit$|^transport$|^unit[0-9A-Za-z]+$
     */
    to?: 'exit' | 'transport' | string;
}
/**
 * This unsolicited event indicates the card was manually removed by the user either during processing of a command which requires the card to be present or the card is removed from the exit position.
 */
export interface CardReaderUnsolicitedCardActionEvent extends XfsUnsolicitedMessage<CardReaderUnsolicitedType.CardActionEvent, CardReaderUnsolicitedCardActionEventPayload> {
}
