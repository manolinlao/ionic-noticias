import { XfsMessage, XfsMessagePayload, XfsMessageType } from '.';
import { CardReaderCommands } from '../CardReader';
import { CashDispenserCommands } from '../CashDispenser';
import { StorageCommands } from '../Storage';
import { CommonCommands } from '../Common';
import { CashManagementCommands } from '../CashManagement';
/**
 * The start of a command will be initiated by the client with a command message, requesting the service performs the specified action. The message uses the standard header properties with type set to command.
 *
 * The requestId is given by the client and allows the client to link messages sent in response to the command back to the original command. For example, the completion message for this command will contain the same requestId.
 *
 * The requestId must be greater than or equal to 1 and incremented between each command, 0 is reserved for unsolicited events.
 * The client is responsible for ensuring that each requestId is unique for a single connection. They do not have to be unique across connections. The request is identified by a combination of the requestId and the connection.
 *
 * The Service will remember the last requestId and reject any requestId for a new command which is lower or equal to the previous requestId. Other than that the service will not track the requestId.
 */
export interface XfsCommandMessage<N, P extends XfsMessagePayload> extends XfsMessage<XfsMessageType.COMMAND, N, P> {
}
/** TODO: añadir el resto de comandos de cada unidad. */
export declare type XfsCommandMessages = CommonCommands | CardReaderCommands | CashDispenserCommands | StorageCommands | CashManagementCommands;
