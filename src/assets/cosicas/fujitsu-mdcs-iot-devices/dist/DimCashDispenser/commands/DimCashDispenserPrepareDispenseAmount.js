import { Xfs4IotDevicesType } from '../../Xfs4IotDevicesType';
export class DimCashDispenserPrepareDispenseAmount {
    constructor(total, algorithm, currency = 'EUR') {
        this.total = total;
        this.algorithm = algorithm;
        this.currency = currency;
        this.device = Xfs4IotDevicesType.CASH_DISPENSER;
        this.type = 'PrepareDispenseAmount';
        this.toJsonString = () => JSON.stringify({
            device: this.device,
            type: this.type,
            total: this.total,
            algorithm: this.algorithm,
            currency: this.currency,
        });
    }
}
//# sourceMappingURL=DimCashDispenserPrepareDispenseAmount.js.map