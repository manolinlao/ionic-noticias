import { CashDispenserCommandType, CashDispenserPresentCommand, CashDispenserDispenseCommand, CashDispenserDenominateCommand, CashDispenserRejectCommand, CashDispenserPrepareDispenseCommand, CashDispenserCountCommand, CashDispenserGetMixTypesCommand, CashDispenserPresentCompletionMessage, CashDispenserDispenseCompletionMessage, CashDispenserDenominateCompletionMessage, CashDispenserRejectCompletionMessage, CashDispenserPrepareDispenseCompletionMessage, CashDispenserCountCompletionMessage, CashDispenserGetMixTypesCompletionMessage } from '.';
import { XfsCommandMessage, XfsMessagePayload } from '../../Core';
export interface CashDispenserCommand<N extends CashDispenserCommandType, P extends XfsMessagePayload> extends XfsCommandMessage<N, P> {
}
/** TODO: añadir el resto de comandos */
export declare type CashDispenserCommands = CashDispenserPresentCommand | CashDispenserDispenseCommand | CashDispenserDenominateCommand | CashDispenserRejectCommand | CashDispenserPrepareDispenseCommand | CashDispenserGetMixTypesCommand | CashDispenserPresentCommand | CashDispenserCountCommand;
/** TODO: añadir el resto de comandos */
export declare type CashDispenserCompleteMessages = CashDispenserPresentCompletionMessage | CashDispenserDispenseCompletionMessage | CashDispenserDenominateCompletionMessage | CashDispenserGetMixTypesCompletionMessage | CashDispenserRejectCompletionMessage | CashDispenserPrepareDispenseCompletionMessage | CashDispenserCountCompletionMessage;
