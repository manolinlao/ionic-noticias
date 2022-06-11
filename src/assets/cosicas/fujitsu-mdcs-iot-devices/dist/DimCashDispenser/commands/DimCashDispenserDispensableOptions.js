import { Xfs4IotDevicesType } from '../../Xfs4IotDevicesType';
export class DimCashDispenserDispensableOptions {
    constructor(amount, currency = 'EUR') {
        this.amount = amount;
        this.currency = currency;
        this.device = Xfs4IotDevicesType.CASH_DISPENSER;
        this.type = 'DispensableOptions';
        this.toJsonString = () => JSON.stringify({ type: this.type, device: this.device, amount: this.amount, currency: this.currency });
    }
}
//# sourceMappingURL=DimCashDispenserDispensableOptions.js.map