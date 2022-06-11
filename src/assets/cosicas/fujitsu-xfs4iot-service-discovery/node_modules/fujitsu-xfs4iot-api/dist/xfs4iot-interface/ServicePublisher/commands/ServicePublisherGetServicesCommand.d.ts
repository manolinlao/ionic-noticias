import { ServicePublisherCommand, ServicePublisherCommandType } from '.';
import { XfsCompletionMessage, XfsCompletionMessagePayload } from '../../Core';
export interface ServicePublisherPayload {
    timeout?: number;
}
export interface ServicePublisherGetServicesCommand extends ServicePublisherCommand<ServicePublisherCommandType.GetServices, ServicePublisherPayload> {
}
export interface ServicePublisherGetServicesCompletionMessagePayload extends XfsCompletionMessagePayload<{}> {
    /** Freeform string naming the hardware vendor. */
    vendorName?: string;
    /** Array of one or more services exposed by the publisher. */
    services?: {
        /**
         * The URI which can be used to contact this individual service.
         *
         * Property value constraints:
         *
         * format: URI
         */
        serviceURI: string;
    }[];
}
export interface ServicePublisherGetServicesCompletionMessage extends XfsCompletionMessage<ServicePublisherCommandType, {}, ServicePublisherGetServicesCompletionMessagePayload> {
}
