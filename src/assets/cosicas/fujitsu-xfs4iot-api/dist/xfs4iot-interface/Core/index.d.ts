import { XfsCommandMessages } from './XfsCommandMessage';
import { XfsCompletionMessages } from './XfsCompletionMessage';
import { XfsEventMessages } from './XfsEventMessage';
import { XfsUnsolicitedMessages } from './XfsUnsolicitedMessage';
export * from './XfsAckMessage';
export * from './XfsCommandMessage';
export * from './XfsCompletionMessage';
export * from './XfsEventMessage';
export * from './XfsMessage';
export * from './XfsMessageHeader';
export * from './XfsMessagePayload';
export * from './XfsMessageType';
export * from './XfsUnsolicitedMessage';
export interface XfsInterface {
    commands?: XfsCommandMessages;
    completionMessages?: XfsCompletionMessages;
    events?: XfsEventMessages;
    unsoliciteds?: XfsUnsolicitedMessages;
}
