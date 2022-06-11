import { DimCashDispenserAvailableBills, DimCashDispenserAvailableBillsComplete, DimCashDispenserModifyStorageItems, DimCashDispenserModifyStorageItemsComplete, DimCashDispenserPresent, DimCashDispenserPresentComplete, DimCashDispenserDispensableOptions, DimCashDispenserDispensableOptionsComplete, DimDevice, ProcessCommandFunc, DimCashDispenserGetBoxes, DimCashDispenserGetBoxesComplete, DimCashDispenserRetractComplete, DimCashDispenserRetract } from '..';
export interface DimCashDispenser extends DimDevice {
    /**
     * Funcion asíncrona
     * (permite hacer un await para esperar el resultado y es lo mismo que esperar el callback de success).
     *
     * Ver: https://mdcs-deb2.intranet/git/xfs4iot/mdcs-iot-devices/wiki/cash-dispenser#availablebills
     *
     * Tiene 3 callbacks para ir informando del estado.
     *
     * @param success
     * @param error
     * @param final
     */
    availableBills: ProcessCommandFunc<DimCashDispenserAvailableBills, DimCashDispenserAvailableBillsComplete>;
    dispensableOptions: ProcessCommandFunc<DimCashDispenserDispensableOptions, DimCashDispenserDispensableOptionsComplete>;
    /**
     * Funcion asíncrona
     * (permite hacer un await para esperar el resultado y es lo mismo que esperar el callback de success).
     *
     * Ver: https://mdcs-deb2.intranet/git/xfs4iot/mdcs-iot-devices/wiki/cash-dispenser#availablebills
     *
     * Tiene 3 callbacks para ir informando del estado.
     *
     * @param success
     * @param error
     * @param final
     */
    modifyStorageItems: ProcessCommandFunc<DimCashDispenserModifyStorageItems, DimCashDispenserModifyStorageItemsComplete>;
    present: ProcessCommandFunc<DimCashDispenserPresent, DimCashDispenserPresentComplete>;
    boxesInfo: ProcessCommandFunc<DimCashDispenserGetBoxes, DimCashDispenserGetBoxesComplete>;
    retract: ProcessCommandFunc<DimCashDispenserRetract, DimCashDispenserRetractComplete>;
}
