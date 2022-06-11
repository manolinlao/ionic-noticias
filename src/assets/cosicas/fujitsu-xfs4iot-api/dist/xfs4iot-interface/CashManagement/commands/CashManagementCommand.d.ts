import { CashManagementCommandType, CashManagementRetractCommand, CashManagementRetractCompletionMessage } from '.';
import { XfsCommandMessage, XfsMessagePayload } from '../../Core';
export interface CashManagementCommand<N extends CashManagementCommandType, P extends XfsMessagePayload> extends XfsCommandMessage<N, P> {
}
/** TODO: añadir el resto de comandos */
export declare type CashManagementCommands = CashManagementRetractCommand;
/** TODO: añadir el resto de comandos */
export declare type CashManagementCompleteMessages = CashManagementRetractCompletionMessage;
