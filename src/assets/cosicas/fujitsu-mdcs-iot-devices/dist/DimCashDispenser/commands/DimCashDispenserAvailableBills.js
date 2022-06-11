import { Xfs4IotDevicesType } from '../../Xfs4IotDevicesType';
export class DimCashDispenserAvailableBills {
    constructor() {
        this.device = Xfs4IotDevicesType.CASH_DISPENSER;
        this.type = 'AvailableBills';
        this.toJsonString = () => JSON.stringify({ type: this.type, device: this.device });
    }
}
//# sourceMappingURL=DimCashDispenserAvailableBills.js.map