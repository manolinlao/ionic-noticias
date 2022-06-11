import { Xfs4IotDevicesType } from '../../Xfs4IotDevicesType';
export class DimCashDispenserPrepareDispenseDistribution {
    constructor(amount, distributions, currency = 'EUR') {
        this.amount = amount;
        this.distributions = distributions;
        this.currency = currency;
        this.device = Xfs4IotDevicesType.CASH_DISPENSER;
        this.type = 'PrepareDispenseDistribution';
        this.toJsonString = () => JSON.stringify({
            device: this.device,
            type: this.type,
            amount: this.amount,
            distributions: this.distributions,
            currency: this.currency,
        });
    }
}
//# sourceMappingURL=DimCashDispenserPrepareDispenseDistribution.js.map