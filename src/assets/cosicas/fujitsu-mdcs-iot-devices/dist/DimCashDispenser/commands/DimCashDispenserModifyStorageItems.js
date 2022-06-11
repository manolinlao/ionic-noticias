import { Xfs4IotDevicesType } from '../../Xfs4IotDevicesType';
export class DimCashDispenserModifyStorageItems {
    constructor(storage) {
        this.storage = storage;
        this.device = Xfs4IotDevicesType.CASH_DISPENSER;
        this.type = 'ModifyStorageItems';
        this.toJsonString = () => JSON.stringify({ device: this.device, type: this.type, storage: this.storage });
    }
}
//# sourceMappingURL=DimCashDispenserModifyStorageItems.js.map