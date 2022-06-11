import { CommonCommandType, CommonStatusCommand, CommonStatusCommandCompletionMessage } from '.';
import { XfsMessagePayload, XfsCommandMessage } from '../../Core';
export interface CommonCommand<N extends CommonCommandType, P extends XfsMessagePayload> extends XfsCommandMessage<N, P> {
}
/** TODO: añadir el resto de comandos */
export declare type CommonCommands = CommonStatusCommand;
/** TODO: añadir el resto de comandos */
export declare type CommonStatusCompleteMessages = CommonStatusCommandCompletionMessage;
