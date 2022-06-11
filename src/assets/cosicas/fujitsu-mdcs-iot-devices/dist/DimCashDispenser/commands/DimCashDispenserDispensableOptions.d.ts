import { DimCommand } from '../../DimCore/DimCommand';
import { Xfs4IotDevicesType } from '../../Xfs4IotDevicesType';
import { DimCashDistribution } from '../common';
export interface DimCashDispenserDispensableOptionsComplete {
    device: Xfs4IotDevicesType.CASH_DISPENSER;
    type: 'DispensableOptions';
    status: 'ok' | 'nok';
    options: {
        id: string;
        algorithm: string;
        name: string;
        bills: DimCashDistribution[];
        amount: number;
    }[];
}
export declare class DimCashDispenserDispensableOptions implements DimCommand<'DispensableOptions'> {
    amount: number;
    currency: string;
    device: Xfs4IotDevicesType;
    type: 'DispensableOptions';
    constructor(amount: number, currency?: string);
    toJsonString: () => string;
}
