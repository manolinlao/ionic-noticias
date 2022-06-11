import { UnitStatusEnum } from 'fujitsu-xfs4iot-api';
import { DimCommand } from '../../DimCore/DimCommand';
import { Xfs4IotDevicesType } from '../../Xfs4IotDevicesType';
export declare enum BoxType {
    OUT = "out",
    IN = "in",
    RECYCLER = "recycler",
    NONE = "none"
}
export declare enum RetractTypeEnum {
    ALL = "all",
    CASH_IN = "cashIn",
    CASH_OUT = "cashOut",
    NONE = "none"
}
export interface BillNumber {
    fit?: number;
    unfit?: number;
    suspect?: number;
    counterfeit?: number;
    inked?: number;
}
export interface BillDenomination {
    name: string;
    denom: number;
    currency: string;
    /**
     * Billetes en la última carga/descarga.
     *
     * Lo tipico es que para cajetines de entrada sea un vaciado a 0s y para
     * cajetines de salida sea un llenado. Pero no se descarta porder inicializar
     * un cajetín de entrada con X billetes sospechosos o entintados o lo que sea, igual
     * que no se descarta que en un cajetín de salida se inicialice a 0 (por ejemplo un cajero situado en una zona
     * que ingresan mucho y es de reciclaje, donde no interesa llenarlo porque acaba llenandose igualmente)
     */
    initialBills: BillNumber;
    /**
     * Billetes que quedan actualmente.
     *
     * Para cajetines de tipo entrada estos son los iniciales (que suelen ser 0) +
     * deposited + retracted + rejected + distributed
     * Los de tipo "transport" aun no están dentro del cajetín, pero en teoria, estan por llegar.
     *
     * Para cajetines de tipo salida  estos son los iniciales - presented - rejected - distributed - unkown -
     * stacked - diverted - transport
     *
     * Para cajetines reciclables hay que juntar ambas logicas: iniciales +
     * deposited + retracted + rejected + distributed - presented - rejected - distributed - unkown -
     * stacked - diverted - transport
     */
    currentBills: BillNumber;
}
export interface DimDispenserBox {
    id: string;
    highThreshold: number;
    lowThreshold: number;
    allowReject: boolean;
    boxType: BoxType;
    capacity?: number;
    status: UnitStatusEnum;
    serialNumber?: string;
    retractType: RetractTypeEnum;
    denominations: BillDenomination[];
}
export interface DimCashDispenserGetBoxesComplete {
    device: Xfs4IotDevicesType.CASH_DISPENSER;
    type: 'BoxesInfo';
    boxes: DimDispenserBox[];
}
export declare class DimCashDispenserGetBoxes implements DimCommand<'BoxesInfo'> {
    device: Xfs4IotDevicesType;
    type: 'BoxesInfo';
    toJsonString: () => string;
}
