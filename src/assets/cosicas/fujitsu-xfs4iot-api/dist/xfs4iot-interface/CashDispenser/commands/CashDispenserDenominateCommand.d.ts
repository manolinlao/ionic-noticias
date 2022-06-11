import { CashDispenserCommand, CashDispenserCommandType, DispensePayloadDenom } from '.';
import { XfsCompletionMessage, XfsCompletionMessagePayload, XfsMessageHeader, XfsMessageType } from '../../Core';
export interface DenominateDenomCurr {
    /**
     * The absolute amount to be or which has been denominated or dispensed of the currency. The property name is the ISO 4217 currency identifier [Ref. cashdispenser-1].
     * The property value can include a decimal point to specify fractions of the currency, for example coins.
     *
     * Property name constraints:
     *
     * pattern: ^[A-Z]{3}$
     * Property value constraints:
     *
     * minimum: 0.001
     */
    [key: string]: number;
}
export interface DenominateDenomValues {
    /**
     * The number of items have been dispensed from the specified storage unit to meet the request.
     *
     * Property name constraints:
     *
     * pattern: ^unit[0-9A-Za-z]+$
     * Property value constraints:
     *
     * minimum: 1
     */
    [key: string]: number;
}
export interface DenominateDenomination {
    /**
     * List of currency and amount combinations for denomination requests or output. There will be one entry for each currency in the denomination. This list can be omitted on a request if values specifies the entire request.
     *
     * See {@link DenominateDenomCurr}
     */
    currencies?: DenominateDenomCurr;
    /**
     * This list specifies the number of items to take or which have been taken from the storage units. If specified in a request, the output denomination must include these items.
     *
     * The property name is storage unit object name as stated by the Storage.GetStorage command. The value of the entry is the number of items to take from that unit.
     *
     * See {@link DenominateDenomValues}
     */
    values?: DenominateDenomValues;
    /**
     * Only applies to Teller Dispensers. Amount to be paid from the teller’s cash box.
     *
     * See {@link DenominateDenomCurr}
     */
    cashBox?: DenominateDenomCurr;
}
export interface DenominatePayload {
    /**
     * Timeout in milliseconds for the command to complete. If set to 0, the command will not timeout but can be canceled.
     *
     * default: 0
     */
    timeout?: number;
    /**
     * Specifies a denomination or a denomination request.
     *
     * See {@link DenominateDenomination}
     */
    denomination?: DenominateDenomination;
    /**
     * Mix algorithm or house mix table to be used as defined by mixes reported by CashDispenser.GetMixTypes. May be omitted if the request is entirely specified by counts.
     *
     * Property value constraints:
     *
     * pattern: ^mix[0-9A-Za-z]+$
     */
    mix?: string;
    /**
     * Only applies to Teller Dispensers. Identification of teller.
     */
    tellerID?: number;
}
export declare class CashDispenserDenominateCommand implements CashDispenserCommand<CashDispenserCommandType.Denominate, DenominatePayload> {
    header: XfsMessageHeader<XfsMessageType.COMMAND, CashDispenserCommandType.Denominate>;
    payload: DenominatePayload;
    constructor(requestId: number, timeout?: number, denomination?: DispensePayloadDenom);
}
export declare enum DenominateErrorCode {
    /** There are no storage units in the device of the currency specified in the request. */
    INVALID_CURRENCY = "invalidCurrency",
    /** Invalid teller ID. This error will never be generated by a Self-Service device. */
    INVALID_TELLER_ID = "invalidTellerID",
    /** There is a problem with a storage unit. A Storage.StorageErrorEvent will be posted with the details. */
    CASH_UNIT_ERROR = "cashUnitError",
    /** No mix is specified and the sum of the values for counts and cashBox does not match the non-zero currencies specified. */
    INVALID_DENOMINATION = "invalidDenomination",
    /** Unknown mix algorithm. */
    INVALID_MIX_NUMBER = "invalidMixNumber",
    /** The storage units specified in the request were not all of the same currency and this device does not support multiple currencies. */
    NO_CURRENCY_MIX = "noCurrencyMix",
    /** The amount is not dispensable by the device. This error code is also returned if a unit is specified in the counts list which is not a dispensing storage unit, e.g., a retract/reject storage unit. */
    NOT_DISPENSABLE = "notDispensable",
    /** The request requires too many items to be dispensed. */
    TOO_MANY_ITEMS = "tooManyItems",
    /** The device is in an exchange state (see Storage.StartExchange). */
    EXCHANGE_ACTIVE = "exchangeActive",
    /** Cash box amount needed, however teller is not assigned a cash box. */
    NO_CASH_BOX_PRESENT = "noCashBoxPresent",
    /** A mix table is being used to determine the denomination but the amount specified in the request is not in the mix table. */
    AMOUNT_NOT_IN_MIX_TABLE = "amountNotInMixTable"
}
export interface CashDispenserDenominateCompletionMessagePayload extends XfsCompletionMessagePayload<DenominateErrorCode> {
    /**
     * List of currency and amount combinations for denomination requests or output. There will be one entry for each currency in the denomination. This list can be omitted on a request if values specifies the entire request.
     *
     * See {@link DenominateDenomCurr}
     */
    currencies?: DenominateDenomCurr;
    /**
     * This list specifies the number of items to take or which have been taken from the storage units. If specified in a request, the output denomination must include these items.
     *
     * The property name is storage unit object name as stated by the Storage.GetStorage command. The value of the entry is the number of items to take from that unit.
     *
     * See {@link DenominateDenomValues}
     */
    values?: DenominateDenomValues;
    /**
     * Only applies to Teller Dispensers. Amount to be paid from the teller’s cash box.
     *
     * See {@link DenominateDenomCurr}
     */
    cashBox?: DenominateDenomCurr;
}
export interface CashDispenserDenominateCompletionMessage extends XfsCompletionMessage<CashDispenserCommandType.Denominate, DenominateErrorCode, CashDispenserDenominateCompletionMessagePayload> {
}
