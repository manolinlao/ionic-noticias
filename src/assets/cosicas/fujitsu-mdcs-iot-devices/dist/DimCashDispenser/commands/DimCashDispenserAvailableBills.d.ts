import { DimCommand } from '../../DimCore/DimCommand';
import { Xfs4IotDevicesType } from '../../Xfs4IotDevicesType';
import { DimCashDistribution } from '../common';
export interface DimCashDispenserAvailableBillsComplete {
    device: Xfs4IotDevicesType.CASH_DISPENSER;
    type: 'AvailableBills';
    maxBillsDispensables: number;
    bills: DimCashDistribution[];
}
export declare class DimCashDispenserAvailableBills implements DimCommand<'AvailableBills'> {
    device: Xfs4IotDevicesType;
    type: 'AvailableBills';
    toJsonString: () => string;
}
