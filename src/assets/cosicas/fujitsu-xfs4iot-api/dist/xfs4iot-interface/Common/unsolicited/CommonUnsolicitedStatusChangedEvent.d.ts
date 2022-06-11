import { CommonUnsolicitedType } from '.';
import { CommonStatus } from '..';
import { XfsUnsolicitedMessage } from '../../Core';
/**
 * This unsolicited event indicates the card was manually removed by the user either during processing of a command which requires the card to be present or the card is removed from the exit position.
 */
export interface CommonUnsolicitedStatusChangedEvent extends XfsUnsolicitedMessage<CommonUnsolicitedType.StatusChangedEvent, Partial<CommonStatus>> {
}
