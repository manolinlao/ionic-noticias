import { DimCommand } from '../../DimCore/DimCommand';
import { Xfs4IotDevicesType } from '../../Xfs4IotDevicesType';
export interface DimCashDispenserRetractComplete {
    device: Xfs4IotDevicesType.CASH_DISPENSER;
    type: 'Retract';
    status: 'ok' | 'nok';
    errorDescription?: string;
    error?: string;
}
export declare class DimCashDispenserRetract implements DimCommand<'Retract'> {
    device: Xfs4IotDevicesType;
    type: 'Retract';
    constructor();
    toJsonString: () => string;
}
