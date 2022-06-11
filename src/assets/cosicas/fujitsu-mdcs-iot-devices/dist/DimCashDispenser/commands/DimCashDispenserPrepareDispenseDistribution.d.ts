import { DimCommand } from '../../DimCore/DimCommand';
import { Xfs4IotDevicesType } from '../../Xfs4IotDevicesType';
import { DimCashDistribution } from '../common';
export interface DimCashDispenserPrepareDispenseDistributionComplete {
    device: Xfs4IotDevicesType.CASH_DISPENSER;
    type: 'PrepareDispenseDistribution';
    status: 'ok' | 'nok';
    errorDescription?: string;
    error?: string;
}
export declare class DimCashDispenserPrepareDispenseDistribution implements DimCommand<'PrepareDispenseDistribution'> {
    amount: number;
    distributions: DimCashDistribution[];
    currency: string;
    device: Xfs4IotDevicesType;
    type: 'PrepareDispenseDistribution';
    constructor(amount: number, distributions: DimCashDistribution[], currency?: string);
    toJsonString: () => string;
}
