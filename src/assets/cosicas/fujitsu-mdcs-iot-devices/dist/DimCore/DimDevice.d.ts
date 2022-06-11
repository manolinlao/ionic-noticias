import { CommonCapabilitiesCommandCompletionMessage, CommonStatusCommandCompletionMessage } from 'fujitsu-xfs4iot-api';
import { DimCommand } from './DimCommand';
export declare type ProcessCommandFunc<T extends DimCommand<string>, R> = (command: T, success: (result: string) => void, error: (err: string) => void, final?: () => void) => Promise<R | null>;
export interface DimDevice {
    init(callback: Function, capabilities: CommonCapabilitiesCommandCompletionMessage, status: CommonStatusCommandCompletionMessage): void;
    stop(callback?: Function): void;
    processCommand: ProcessCommandFunc<DimCommand<string>, any>;
    cleanWsConnections: () => void;
}
