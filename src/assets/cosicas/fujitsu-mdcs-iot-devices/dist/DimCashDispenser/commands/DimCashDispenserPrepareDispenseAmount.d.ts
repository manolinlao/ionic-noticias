import { DimCommand } from '../../DimCore/DimCommand';
import { Xfs4IotDevicesType } from '../../Xfs4IotDevicesType';
export interface DimCashDispenserPrepareDispenseAmountComplete {
    device: Xfs4IotDevicesType.CASH_DISPENSER;
    type: 'PrepareDispenseAmount';
    status: 'ok' | 'nok';
    errorDescription?: string;
    error?: string;
}
export declare class DimCashDispenserPrepareDispenseAmount implements DimCommand<'PrepareDispenseAmount'> {
    total: number;
    algorithm?: string | undefined;
    currency: string;
    device: Xfs4IotDevicesType;
    type: 'PrepareDispenseAmount';
    constructor(total: number, algorithm?: string | undefined, currency?: string);
    toJsonString: () => string;
}
