import { Xfs4IotDevicesType } from '../Xfs4IotDevicesType';
export var DimCardReaderReadType;
(function (DimCardReaderReadType) {
    /** Se intentará sacar la información de las bandas */
    DimCardReaderReadType["TRACKS"] = "tracks";
    /** Se intentará sacar la información emv */
    DimCardReaderReadType["CHIP"] = "chip";
    /** Se intentará la lectura tanto de bandas como chip */
    DimCardReaderReadType["ALL"] = "all";
})(DimCardReaderReadType || (DimCardReaderReadType = {}));
export class DimCardReaderRead {
    constructor(read) {
        this.read = read;
        this.device = Xfs4IotDevicesType.CARD_READER;
        this.type = 'Read';
        this.toJsonString = () => JSON.stringify({ device: this.device, type: this.type, read: this.read });
    }
}
//# sourceMappingURL=DimCardReaderRead.js.map