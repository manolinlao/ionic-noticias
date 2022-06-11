import { XfsInterface } from '../Core';
import { CashManagementUnsoliciteds } from './unsolicited';
import { CashManagementCommands, CashManagementCompleteMessages } from './commands';
export * from './commands';
export * from './unsolicited';
export interface CashManagementInterface extends XfsInterface {
    unsoliciteds: CashManagementUnsoliciteds;
    commands: CashManagementCommands;
    completionMessages: CashManagementCompleteMessages;
}
