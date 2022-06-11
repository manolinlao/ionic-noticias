import { StorageUnsolicitedType, StorageUnsolicitedStorageChangedEvent } from '.';
import { XfsMessagePayload, XfsUnsolicitedMessage } from '../../Core';
export interface StorageUnsolicited<P extends XfsMessagePayload> extends XfsUnsolicitedMessage<StorageUnsolicitedType, P> {
}
export declare type StorageUnsoliciteds = StorageUnsolicitedStorageChangedEvent;
