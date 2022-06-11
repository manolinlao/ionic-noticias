import { Xfs4IotDevicesType } from '../../Xfs4IotDevicesType';
export class DimCashDispenserRetract {
    constructor() {
        this.device = Xfs4IotDevicesType.CASH_DISPENSER;
        this.type = 'Retract';
        this.toJsonString = () => {
            return JSON.stringify({
                device: this.device,
                type: this.type,
            });
        };
    }
}
//# sourceMappingURL=DimCashDispenserRetract.js.map