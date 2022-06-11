import { DimCommand } from '../../DimCore/DimCommand';
import { Xfs4IotDevicesType } from '../../Xfs4IotDevicesType';
export interface DimCashDispenserModifyStorageItemsComplete {
    device: Xfs4IotDevicesType.CASH_DISPENSER;
    type: 'ModifyStorageItems';
    status: 'ok' | 'nok';
    errorDescription?: string;
    error?: string;
}
export interface DimCashDispenserStorageCharge {
    unit: string;
    currency: string;
    /**
     * Absolute value of a cash item or items. May be a floating point value to allow for coins and notes which have a value which is not a whole multiple of the currency unit.
     *
     * If applied to a storage unit, this applies to all contents, may be 0 if mixed and may only be modified in an exchange state if applicable.
     */
    value: number;
    box: string;
    items: number;
}
export declare class DimCashDispenserModifyStorageItems implements DimCommand<'ModifyStorageItems'> {
    storage: DimCashDispenserStorageCharge[];
    device: Xfs4IotDevicesType;
    type: 'ModifyStorageItems';
    constructor(storage: DimCashDispenserStorageCharge[]);
    toJsonString: () => string;
}
