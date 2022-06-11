import { Xfs4IotDevicesType } from '../Xfs4IotDevicesType';
import { DimCommand } from './DimCommand';
export declare class DimCommandError implements DimCommand<'CommandError'> {
    device: Xfs4IotDevicesType;
    private originalCommand;
    private error;
    type: 'CommandError';
    constructor(device: Xfs4IotDevicesType, originalCommand: string, error: string);
    toJsonString: () => string;
}
