import { DimCommand } from '../../DimCore/DimCommand';
import { Xfs4IotDevicesType } from '../../Xfs4IotDevicesType';
import { DimCashDistribution } from '../common';
export interface DimCashDispenserPresentComplete {
    device: Xfs4IotDevicesType.CASH_DISPENSER;
    type: 'Present';
    status: 'ok' | 'nok';
    errorDescription?: string;
    error?: string;
    bills?: DimCashDistribution[];
}
export declare class DimCashDispenserPresent implements DimCommand<'Present'> {
    timeToRetract: number;
    device: Xfs4IotDevicesType;
    type: 'Present';
    constructor(timeToRetract?: number);
    toJsonString: () => string;
}
