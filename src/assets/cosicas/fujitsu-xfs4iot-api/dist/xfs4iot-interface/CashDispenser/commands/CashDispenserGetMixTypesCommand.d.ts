import { CashDispenserCommand, CashDispenserCommandType } from '.';
import { XfsCompletionMessage, XfsCompletionMessagePayload, XfsMessageHeader, XfsMessageType } from '../../Core';
export interface GetMixTypesPayload {
    /**
     * Timeout in milliseconds for the command to complete. If set to 0, the command will not timeout but can be canceled.
     *
     * default: 0
     */
    timeout?: number;
}
export declare class CashDispenserGetMixTypesCommand implements CashDispenserCommand<CashDispenserCommandType.GetMixTypes, GetMixTypesPayload> {
    header: XfsMessageHeader<XfsMessageType.COMMAND, CashDispenserCommandType.GetMixTypes>;
    payload: GetMixTypesPayload;
    constructor(requestId: number, timeout?: number);
}
export declare enum GetMixTypesMixTypeEnum {
    /** the mix is not calculated by the Service, completely specified by the application.*/
    INDIVIDUAL = "individual",
    /** the mix is calculated using one of the algorithms specified by algorithm.*/
    ALGORITHM = "algorithm",
    /** the mix is calculated using a mix table - see CashDispenser.GetMixTable. */
    TABLE = "table"
}
export declare enum GetMixTypesMixAlgorithmEnum {
    /** Select a mix requiring the minimum possible number of items. */
    MINIMUMBILLS = "minimumBills",
    /** The denomination is selected based upon criteria which ensure that over the course of its operation the storage units will empty as far as possible at the same rate and will therefore go low and then empty at approximately the same time. */
    EQUALEMPTYING = "equalEmptying",
    /** The denomination is selected based upon criteria which ensures the maximum number of storage units are used. */
    MAXCASHUNITS = "maxCashUnits"
}
export interface GetMixTypesMixesMix {
    /**
     * Specifies the mix type
     *
     * See {@link GetMixTypesMixTypeEnum}
     */
    type?: GetMixTypesMixTypeEnum;
    /**
     * If type is algorithm, specifies the algorithm type as one of the following. There are three pre-defined algorithms, additional vendor-defined algorithms can also be defined. Omitted if the mix is not an algorithm
     *
     * Property value constraints:
     *
     * pattern: ^minimumBills$|^equalEmptying$|^maxCashUnits$|^[A-Za-z0-9]*$
     *
     * <vendor-defined mix> - A vendor defined mix algorithm.
     *
     * See {@link GetMixTypesMixAlgorithmEnum}
     */
    algorithm?: string | GetMixTypesMixAlgorithmEnum;
    /** Name of the table or algorithm used. May be omitted. */
    name?: string;
}
export interface GetMixTypesMixes {
    /**
     * An object containing a single mix specification. The property name is assigned by the Service.
     *
     * Property name constraints:
     *
     * pattern: ^mix[0-9A-Za-z]+$
     *
     * See {@link GetMixTypesMixesMix}
     */
    [key: string]: GetMixTypesMixesMix;
}
export interface CashDispenseGetMixTypesCompletionMessagePayload extends XfsCompletionMessagePayload<{}> {
    /**
     * Object containing mix specifications including mix tables and pre-defined algorithms. The property name of each mix can be used as the mix in the CashDispenser.Dispense and CashDispenser.Denominate commands.
     *
     * Mix tables are defined by CashDispenser.SetMixTable. A mix table's definition can be queried using its property name as input to CashDispenser.GetMixTable.
     *
     * See {@link GetMixTypesMixes}
     */
    mixes?: GetMixTypesMixes;
}
export interface CashDispenserGetMixTypesCompletionMessage extends XfsCompletionMessage<CashDispenserCommandType.GetMixTypes, {}, CashDispenseGetMixTypesCompletionMessagePayload> {
}
