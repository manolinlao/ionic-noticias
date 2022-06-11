import { DimDevice, ProcessCommandFunc } from '../DimCore/DimDevice';
import { DimCardReaderRead } from './DimCardReaderRead';
import { DimCardReaderReadComplete } from './DimCardReaderReadComplete';
export interface DimCardReader extends DimDevice {
    /**
     * Funcion asíncrona
     * (permite hacer un await para esperar el resultado y es lo mismo que esperar el callback de success).
     *
     * Ver: https://mdcs-deb2.intranet/git/xfs4iot/mdcs-iot-devices/wiki/card-reader
     *
     * Tiene 3 callbacks para ir informando del estado.
     *
     * @param success
     * @param error
     * @param final
     */
    read: ProcessCommandFunc<DimCardReaderRead, DimCardReaderReadComplete>;
}
