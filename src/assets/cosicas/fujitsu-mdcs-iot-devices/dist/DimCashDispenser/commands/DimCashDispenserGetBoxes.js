import { Xfs4IotDevicesType } from '../../Xfs4IotDevicesType';
export var BoxType;
(function (BoxType) {
    BoxType["OUT"] = "out";
    BoxType["IN"] = "in";
    BoxType["RECYCLER"] = "recycler";
    BoxType["NONE"] = "none";
})(BoxType || (BoxType = {}));
export var RetractTypeEnum;
(function (RetractTypeEnum) {
    RetractTypeEnum["ALL"] = "all";
    RetractTypeEnum["CASH_IN"] = "cashIn";
    RetractTypeEnum["CASH_OUT"] = "cashOut";
    RetractTypeEnum["NONE"] = "none";
})(RetractTypeEnum || (RetractTypeEnum = {}));
export class DimCashDispenserGetBoxes {
    constructor() {
        this.device = Xfs4IotDevicesType.CASH_DISPENSER;
        this.type = 'BoxesInfo';
        this.toJsonString = () => JSON.stringify({ type: this.type, device: this.device });
    }
}
//# sourceMappingURL=DimCashDispenserGetBoxes.js.map