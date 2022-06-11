import { ServicePublisherCommandType, ServicePublisherGetServicesCommand, ServicePublisherGetServicesCompletionMessage } from '.';
import { XfsCommandMessage, XfsMessagePayload } from '../../Core';
export interface ServicePublisherCommand<N extends ServicePublisherCommandType, P extends XfsMessagePayload> extends XfsCommandMessage<N, P> {
}
export declare type ServicePublisherCommands = ServicePublisherGetServicesCommand;
export declare type ServicePublisherCompleteMessages = ServicePublisherGetServicesCompletionMessage;
