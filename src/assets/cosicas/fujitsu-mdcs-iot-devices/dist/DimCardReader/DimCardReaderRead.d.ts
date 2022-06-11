import { DimCommand } from '../DimCore/DimCommand';
import { Xfs4IotDevicesType } from '../Xfs4IotDevicesType';
export declare enum DimCardReaderReadType {
    /** Se intentará sacar la información de las bandas */
    TRACKS = "tracks",
    /** Se intentará sacar la información emv */
    CHIP = "chip",
    /** Se intentará la lectura tanto de bandas como chip */
    ALL = "all"
}
export declare class DimCardReaderRead implements DimCommand<'Read'> {
    read: DimCardReaderReadType;
    device: Xfs4IotDevicesType;
    type: 'Read';
    constructor(read: DimCardReaderReadType);
    toJsonString: () => string;
}
