import { CashManagementUnsolicitedType, CashManagementUnsolicitedItemsTakenEvent, CashManagementUnsolicitedItemsPresentedEvent } from '.';
import { XfsMessagePayload, XfsUnsolicitedMessage } from '../../Core';
export interface CashManagementUnsolicited<P extends XfsMessagePayload> extends XfsUnsolicitedMessage<CashManagementUnsolicitedType, P> {
}
export declare type CashManagementUnsoliciteds = CashManagementUnsolicitedItemsTakenEvent | CashManagementUnsolicitedItemsPresentedEvent;
