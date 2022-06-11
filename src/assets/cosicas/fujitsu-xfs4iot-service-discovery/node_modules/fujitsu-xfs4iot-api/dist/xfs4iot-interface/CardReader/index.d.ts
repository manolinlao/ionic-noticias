import { XfsInterface } from '../Core';
import { CardReaderCommands, CardReaderCompleteMessages } from './commands';
import { CardReaderEvents } from './events';
import { CardReaderUnsoliciteds } from './unsolicited';
export * from './commands';
export * from './unsolicited';
export * from './events';
export interface CardReaderInterface extends XfsInterface {
    commands: CardReaderCommands;
    completionMessages: CardReaderCompleteMessages;
    events: CardReaderEvents;
    unsoliciteds: CardReaderUnsoliciteds;
}
