import { Xfs4IotDevicesType } from '../../Xfs4IotDevicesType';
export class DimCashDispenserPresent {
    // NEW JCV 19-04-22
    // constructor() {}
    // toJsonString = () => {
    //     return JSON.stringify({
    //         device: this.device,
    //         type: this.type,
    //     });
    // };
    constructor(timeToRetract = 15000) {
        this.timeToRetract = timeToRetract;
        this.device = Xfs4IotDevicesType.CASH_DISPENSER;
        this.type = 'Present';
        this.toJsonString = () => {
            return JSON.stringify({
                device: this.device,
                type: this.type,
                timeToRetract: this.timeToRetract,
            });
        };
    }
}
//# sourceMappingURL=DimCashDispenserPresent.js.map