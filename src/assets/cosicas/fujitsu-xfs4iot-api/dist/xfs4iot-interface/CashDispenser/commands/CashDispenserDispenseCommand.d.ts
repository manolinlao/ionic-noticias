import { CashDispenserCommand, CashDispenserCommandType } from '.';
import { XfsCompletionMessage, XfsCompletionMessagePayload, XfsMessageHeader, XfsMessageType } from '../../Core';
export declare enum DispensePayloadPositionEnum {
    /** default */
    OUT_DEFAULT = "outDefault",
    /** The Dispenser has a left output position. */
    LEFT = "left",
    /** The Dispenser has a right output position. */
    RIGHT = "right",
    /** The Dispenser has a center output position. */
    CENTER = "center",
    /** The Dispenser has a top output position. */
    TOP = "top",
    /** The Dispenser has a bottom output position. */
    BOTTOM = "bottom",
    /** The Dispenser has a front output position. */
    FRONT = "front",
    /** The Dispenser has a rear output position. */
    REAR = "rear"
}
export interface DispensePayloadInnerDenomCurr {
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
export interface DispensePayloadInnerDenomVal {
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
export interface DispensePayloadInnerDenom {
    /**
     * List of currency and amount combinations for denomination requests or output. There will be one entry for each currency in the denomination. This list can be omitted on a request if values specifies the entire request.
     *
     * See {@link DispensePayloadInnerDenomCurr}
     */
    currencies?: DispensePayloadInnerDenomCurr;
    /**
     * This list specifies the number of items to take or which have been taken from the storage units. If specified in a request, the output denomination must include these items.
     *
     * The property name is storage unit object name as stated by the Storage.GetStorage command. The value of the entry is the number of items to take from that unit.
     *
     * See {@link DispensePayloadInnerDenomVal}
     */
    values?: DispensePayloadInnerDenomVal;
    /**
     * Only applies to Teller Dispensers. Amount to be paid from the teller’s cash box.
     *
     * See {@link DispensePayloadInnerDenomCurr}
     */
    cashBox?: DispensePayloadInnerDenomCurr;
}
export interface DispensePayloadDenom {
    /**
     * Specifies a denomination or a denomination request.
     *
     * See {@link DispensePayloadInnerDenom}
     */
    denomination?: DispensePayloadInnerDenom;
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
export interface DispensePayload {
    /**
     * Timeout in milliseconds for the command to complete. If set to 0, the command will not timeout but can be canceled.
     */
    timeout?: number;
    /**
     * Denomination object describing the contents of the denomination operation.
     *
     * See {@link DispensePayloadDenom}
     */
    denomination?: DispensePayloadDenom;
    /**
     * If specified, defines the output position to which the items are to be dispensed. If not specified, the items are dispensed to one of the following positions as applicable:
     * teller position if the device is a Teller Dispenser
     * intermediate stacker if the device has one
     * the default position if there is no intermediate stacker.
     *
     * default: "outDefault"
     *
     * See {@link DispensePayloadPositionEnum}
     */
    position?: DispensePayloadPositionEnum;
    /**
     * The dispense token that authorizes the dispense operation, as created by the authorizing host. See the section on end-to-end security for more information.
     *
     * The same token may be used multiple times with multiple calls to the CashDispenser.Dispense and CashDispenser.Present commands, as long as the total value stacked does not exceed the value given in the token.
     * The hardware will track the total value of the cash and will raise an invalidToken error for any attempt to dispense or present more cash than authorized by the token.
     *
     * The token contains a nonce returned by Common.GetCommandNonce which must match the nonce stored in the hardware.
     * The nonce value stored in the hardware will be cleared automatically at various times, meaning that all tokens will become invalid.
     *
     * The hardware will also track the token being used and block any attempt to use multiple tokens with the same nonce.
     * The same token must be used for all calls to dispense, until the nonce is cleared and a new nonce and token is created. Any attempt to use a different token will trigger an invalidToken error.
     *
     * For maximum security the client should also explicitly clear the command nonce (and hence invalidate and existing tokens,) with the Common.ClearCommandNonce command as soon as it's finished using the current token.
     *
     * The dispense token will follow the standard token format, and will contain the standard keys plus the following key:
     *
     * DISPENSE1: The maximum value to be dispensed. This will be a number string that may contain a fractional part. The decimal character will be ".".
     * The value, including the fractional part, will be defined by the ISO 4217 currency identifier [Ref. cashdispenser-1]. The number will be followed by the ISO 4217 currency code. The currency code will be upper case.
     *
     * For example, "123.45EUR" will be €123 and 45 cents.
     *
     * The "DISPENSE" key may appear multiple times with a number suffix. For example, DISPENSE1, DISPENSE2, DISPENSE3. The number will start at 1 and increment.
     * Each key can only be given once. Each key must have a value in a different currency. For example, DISPENSE1=100.00EUR,DISPENSE2=200.00USD
     *
     * The actual amount dispensed will be given by the denomination. The value in the token MUST be greater or equal to the amount in the denomination parameter.
     * If the Token has a lower value, or the Token is invalid for any reason, then the command will fail with an invalid data error code.
     *
     * Example token is as follows:
     *
     * NONCE=254611E63B2531576314E86527338D61,TOKENFORMAT=1,TOKENLENGTH=0164,DISPENSE1=50.00EUR,HMACSHA256=CB735612FD6141213C2827FB5A6A4F4846D7A7347B15434916FEA6AC16F3D2F2
     */
    token?: string;
}
export declare class CashDispenserDispenseCommand implements CashDispenserCommand<CashDispenserCommandType.Dispense, DispensePayload> {
    header: XfsMessageHeader<XfsMessageType.COMMAND, CashDispenserCommandType.Dispense>;
    payload: DispensePayload;
    constructor(requestId: number, timeout?: number, denomination?: DispensePayloadDenom, position?: DispensePayloadPositionEnum, token?: string);
}
export declare enum DispenseErrorCode {
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
    /**
     * A mix table is being used to determine the denomination but the amount specified in the request is not in the mix table.
     */
    AMOUNT_NOT_IN_MIX_TABLE = "amountNotInMixTable",
    /** The specified output position is not supported. */
    UNSUPPORTED_POSITION = "unsupportedPosition",
    /** Items have been left in the transport or exit slot as a result of a prior dispense, present or recycler cash-in operation. */
    ITEMS_LEFT = "itemsLeft",
    /** The Service cannot dispense items with an open output shutter. */
    SHUTTER_OPEN = "shutterOpen"
}
export interface DispenseDenomCurr {
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
export interface DispenseDenomVal {
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
export interface DispenseDenom {
    /**
     * List of currency and amount combinations for denomination requests or output. There will be one entry for each currency in the denomination. This list can be omitted on a request if values specifies the entire request.
     *
     * See {@link DispenseDenomCurr}
     */
    currencies?: DispenseDenomCurr;
    /**
     * This list specifies the number of items to take or which have been taken from the storage units. If specified in a request, the output denomination must include these items.
     *
     * The property name is storage unit object name as stated by the Storage.GetStorage command. The value of the entry is the number of items to take from that unit.
     *
     * See {@link DispenseDenomVal}
     */
    values?: DispenseDenomVal;
    /**
     * Only applies to Teller Dispensers. Amount to be paid from the teller’s cash box.
     *
     * See {@link DispenseDenomCurr}
     */
    cashBox: DispenseDenomCurr;
}
export interface DispenseStorageInUnitBox {
    /** Count of genuine cash items which are fit for recycling. */
    fit?: number;
    /** Count of genuine cash items which are unfit for recycling. */
    unfit?: number;
    /** Count of suspected counterfeit cash items. */
    suspect?: number;
    /** Count of counterfeit cash items. */
    counterfeit?: number;
    /** Count of cash items which have been identified as ink stained. */
    inked?: number;
}
export interface DispenseStorageInUnit {
    /**
     * Number of cash retract operations which resulted in items entering this storage unit. This can be used where devices do not have the capability to count or validate items after presentation.
     */
    retractOperations?: number;
    /**
     * The items deposited in the storage unit during a Cash In transaction.
     *
     * unrecognized?: number;
     */
    deposited?: {
        /**
         * Count of unrecognized items handled by the cash interface.
         */
        /**
         * Counts of a given cash item (as reported by CashManagement.GetBankNoteTypes) broken down by classification.
         *
         * See {@link DispenseStorageInUnitBox}
         */
        [key: string]: number | DispenseStorageInUnitBox;
    };
    /**
     * The items retracted into the storage unit after being accessible to a customer.
     * This may be inaccurate or not counted if items are not counted or re-validated after presentation, the number of retract operations is also reported separately in retractOperations.
     *
     * unrecognized?: number;
     */
    retracted?: {
        /**
         * Count of unrecognized items handled by the cash interface.
         */
        /**
         * Counts of a given cash item (as reported by CashManagement.GetBankNoteTypes) broken down by classification.
         *
         * See {@link DispenseStorageInUnitBox}
         */
        [key: string]: number | DispenseStorageInUnitBox;
    };
    /**
     * The items deposited in this storage unit originating from another storage unit but rejected due to being invalid. This count may be inaccurate due to the nature of rejected items.
     *
     * unrecognized?: number;
     */
    rejected?: {
        /**
         * Count of unrecognized items handled by the cash interface.
         */
        /**
         * Counts of a given cash item (as reported by CashManagement.GetBankNoteTypes) broken down by classification.
         *
         * See {@link DispenseStorageInUnitBox}
         */
        [key: string]: number | DispenseStorageInUnitBox;
    };
    /**
     * The items deposited in this storage unit originating from another storage unit but not rejected.
     *
     * unrecognized?: number;
     */
    distributed?: {
        /**
         * Count of unrecognized items handled by the cash interface.
         */
        /**
         * Counts of a given cash item (as reported by CashManagement.GetBankNoteTypes) broken down by classification.
         *
         * See {@link DispenseStorageInUnitBox}
         */
        [key: string]: number | DispenseStorageInUnitBox;
    };
    /**
     * The items which were intended to be deposited in this storage unit but are not yet deposited.
     * Typical use case for this property is tracking items after a jam during CashAcceptor.CashInEnd. This is not reset if initial is set for this unit by Storage.GetStorage.
     *
     * unrecognized?: number;
     */
    transport?: {
        /**
         * Count of unrecognized items handled by the cash interface.
         */
        /**
         * Counts of a given cash item (as reported by CashManagement.GetBankNoteTypes) broken down by classification.
         *
         * See {@link DispenseStorageInUnitBox}
         */
        [key: string]: number | DispenseStorageInUnitBox;
    };
}
export interface DispenseStorageIn {
    /**
     * List of items moved to this storage unit by this transaction or command. The property name is the same as reported by Storage.GetStorage.
     *
     * Property name constraints:
     *
     * pattern: ^unit[0-9A-Za-z]+$
     *
     * See {@link DispenseStorageInUnit}
     */
    [key: string]: DispenseStorageInUnit;
}
export interface DispenseStorageOutUnit {
    /**
     * The items dispensed from this storage unit which are or were customer accessible.
     *
     * unrecognized?: number;
     */
    presented?: {
        /**
         * Count of unrecognized items handled by the cash interface.
         */
        /**
         * Counts of a given cash item (as reported by CashManagement.GetBankNoteTypes) broken down by classification.
         *
         * See {@link DispenseStorageInUnitBox}
         */
        [key: string]: number | DispenseStorageInUnitBox;
    };
    /**
     * The items dispensed from this storage unit which were invalid and were diverted to a reject storage unit and were not customer accessible during the operation.
     *
     * unrecognized?: number;
     */
    rejected?: {
        /**
         * Count of unrecognized items handled by the cash interface.
         */
        /**
         * Counts of a given cash item (as reported by CashManagement.GetBankNoteTypes) broken down by classification.
         *
         * See {@link DispenseStorageInUnitBox}
         */
        [key: string]: number | DispenseStorageInUnitBox;
    };
    /**
     * The items dispensed from this storage unit which were moved to a storage unit other than a reject storage unit and were not customer accessible during the operation.
     *
     * unrecognized?: number;
     */
    distributed?: {
        /**
         * Count of unrecognized items handled by the cash interface.
         */
        /**
         * Counts of a given cash item (as reported by CashManagement.GetBankNoteTypes) broken down by classification.
         *
         * See {@link DispenseStorageInUnitBox}
         */
        [key: string]: number | DispenseStorageInUnitBox;
    };
    /**
     * The items dispensed from this storage unit which moved to an unknown position.
     *
     * unrecognized?: number;
     */
    unknown?: {
        /**
         * Count of unrecognized items handled by the cash interface.
         */
        /**
         * Counts of a given cash item (as reported by CashManagement.GetBankNoteTypes) broken down by classification.
         *
         * See {@link DispenseStorageInUnitBox}
         */
        [key: string]: number | DispenseStorageInUnitBox;
    };
    /**
     * The items dispensed from this storage unit which are not customer accessible and are currently stacked awaiting presentation to the customer.
     * This item list can increase and decrease as items are moved around in the device. This is not reset if initial is set for this unit by Storage.GetStorage.
     *
     * unrecognized?: number;
     */
    stacked?: {
        /**
         * Count of unrecognized items handled by the cash interface.
         */
        /**
         * Counts of a given cash item (as reported by CashManagement.GetBankNoteTypes) broken down by classification.
         *
         * See {@link DispenseStorageInUnitBox}
         */
        [key: string]: number | DispenseStorageInUnitBox;
    };
    /**
     * The items dispensed from this storage unit which are not customer accessible and were diverted to a temporary location due to being invalid and have not yet been deposited in a storage unit.
     * This item list can increase and decrease as items are moved around in the device. This is not reset if initial is set for this unit by Storage.GetStorage.
     *
     * unrecognized?: number;
     */
    diverted?: {
        /**
         * Count of unrecognized items handled by the cash interface.
         */
        /**
         * Counts of a given cash item (as reported by CashManagement.GetBankNoteTypes) broken down by classification.
         *
         * See {@link DispenseStorageInUnitBox}
         */
        [key: string]: number | DispenseStorageInUnitBox;
    };
    /**
     * The items dispensed from this storage unit which are not customer accessible and which have jammed in the transport.
     * This item list can increase and decrease as items are moved around in the device. This is not reset if initial is set for this unit by Storage.GetStorage.
     *
     * unrecognized?: number;
     */
    transport?: {
        /**
         * Count of unrecognized items handled by the cash interface.
         */
        /**
         * Counts of a given cash item (as reported by CashManagement.GetBankNoteTypes) broken down by classification.
         *
         * See {@link DispenseStorageInUnitBox}
         */
        [key: string]: number | DispenseStorageInUnitBox;
    };
}
export interface DispenseStorageOut {
    /**
     * List of items removed from this storage unit by this transaction or command. The property name is the same as reported by Storage.GetStorage.
     *
     * Property name constraints:
     *
     * pattern: ^unit[0-9A-Za-z]+$
     *
     * See {@link DispenseStorageOutUnit}
     */
    [key: string]: DispenseStorageOutUnit;
}
export interface DispenseStorage {
    /**
     * Object containing the storage units which have had items inserted during the associated operation or transaction. Only storage units whose contents have been modified are included.
     *
     * See {@link DispenseStorageIn}
     */
    in?: DispenseStorageIn;
    /**
     * Object containing the storage units which have had items removed during the associated operation or transaction. Only storage units whose contents have been modified are included.
     *
     * See {@link DispenseStorageOut}
     */
    out?: DispenseStorageOut;
}
export interface CashDispenserDispenseCompletionMessagePayload extends XfsCompletionMessagePayload<DispenseErrorCode> {
    /**
     * Denomination object describing the contents of the denomination operation.
     *
     * See {@link DispenseDenom}
     */
    denomination?: DispenseDenom;
    /**
     * Specifies how many bunches will be required to present the request. Following values are possible:
     *
     *      <number> - The number of bunches to be presented.
     *      unknown - More than one bunch is required but the precise number is unknown.
     * Property value constraints:
     *
     * pattern: ^unknown$|^[0-9]*$
     *
     * default: "1"
     *
     */
    bunches?: string;
    /**
     * Object which lists the storage units which have had items removed or inserted during the associated operation or transaction. Only storage units whose contents have been modified are included.
     *
     * See {@link DispenseStorage}
     */
    storage?: DispenseStorage;
}
export interface CashDispenserDispenseCompletionMessage extends XfsCompletionMessage<CashDispenserCommandType.Dispense, DispenseErrorCode, CashDispenserDispenseCompletionMessagePayload> {
}
