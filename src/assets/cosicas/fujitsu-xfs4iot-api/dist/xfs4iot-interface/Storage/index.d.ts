import { XfsInterface } from '../Core';
import { StorageCommands, StorageCompleteMessages } from './commands';
import { StorageUnsoliciteds } from './unsolicited';
export * from './unsolicited';
export * from './commands';
export * from './StorageCashTypes';
export * from './StorageDispenserBox';
export * from './StorageItems';
export * from './StorageCardConfiguration';
export interface StorageInterface extends XfsInterface {
    commands: StorageCommands;
    completionMessages: StorageCompleteMessages;
    unsoliciteds: StorageUnsoliciteds;
}
