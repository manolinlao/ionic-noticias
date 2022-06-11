import { CommonUnsolicitedType, CommonUnsolicitedStatusChangedEvent } from '.';
import { XfsMessagePayload, XfsUnsolicitedMessage } from '../../Core';
/** TODO: Revisar, creo que este objeto no se llega a usar nunca */
export interface CommonUnsolicited<P extends XfsMessagePayload> extends XfsUnsolicitedMessage<CommonUnsolicitedType, P> {
}
export declare type CommonUnsoliciteds = CommonUnsolicitedStatusChangedEvent;
