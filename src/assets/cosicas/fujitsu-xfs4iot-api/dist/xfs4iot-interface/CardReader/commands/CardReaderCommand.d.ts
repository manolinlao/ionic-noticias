import { CardReaderCommandType, CardReaderReadRawDataCommand, CardReaderWriteRawDataCommand, CardReaderReadRawDataCompletionMessage, CardReaderWriteRawDataCompletionMessage } from '.';
import { XfsMessagePayload, XfsCommandMessage } from '../../Core';
/** TODO: Revisar, creo que este objeto no se llega a usar nunca */
export interface CardReaderCommand<N extends CardReaderCommandType, P extends XfsMessagePayload> extends XfsCommandMessage<N, P> {
}
/** TODO: añadir el resto de comandos */
export declare type CardReaderCommands = CardReaderReadRawDataCommand | CardReaderWriteRawDataCommand;
/** TODO: añadir el resto de comandos */
export declare type CardReaderCompleteMessages = CardReaderReadRawDataCompletionMessage | CardReaderWriteRawDataCompletionMessage;
