import { XfsInterface } from '../Core';
import { CashDispenserCommands, CashDispenserCompleteMessages } from './commands';
export * from './commands';
export interface CashDispenserInterface extends XfsInterface {
    commands: CashDispenserCommands;
    completionMessages: CashDispenserCompleteMessages;
}
