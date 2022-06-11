import { StorageCommandType, GetStoragePayloadCommand, StorageGetStorageCompletionMessage, SetStoragePayloadCommand, StorageSetStorageCompletionMessage } from '.';
import { XfsMessagePayload, XfsCommandMessage } from '../../Core';
/** TODO: Revisar, creo que este objeto no se llega a usar nunca */
export interface StorageCommand<N extends StorageCommandType, P extends XfsMessagePayload> extends XfsCommandMessage<N, P> {
}
/** TODO: añadir el resto de comandos */
export declare type StorageCommands = GetStoragePayloadCommand | SetStoragePayloadCommand;
/** TODO: añadir el resto de comandos */
export declare type StorageCompleteMessages = StorageGetStorageCompletionMessage | StorageSetStorageCompletionMessage;
