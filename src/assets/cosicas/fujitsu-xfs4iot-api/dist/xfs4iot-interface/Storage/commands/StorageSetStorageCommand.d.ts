import { StorageCommand, StorageCommandType } from '.';
import { XfsCompletionMessagePayload, XfsCompletionMessage, XfsMessageHeader, XfsMessageType } from '../../Core';
import { StorageCashTypes, StorageDispenserBox, StorageItems } from '..';
export interface SetStorageConfiguration {
    /**
     * The types of operation the unit is capable of or configured to perform. This is a combination of one or more operations. May only be modified in an exchange state if applicable.
     *
     * See {@link StorageCashTypes}
     */
    types?: StorageCashTypes;
    /**
     * The types of cash media the unit is capable of storing or configured to store. This is a combination of one or more item types.
     * May only be modified in an exchange state if applicable. See Note Classification for more information about cash classification levels.
     *
     * See {@link StorageItems}
     */
    items?: StorageItems;
    /**
     * ISO 4217 currency identifier [Ref. cashmanagement-1]. May only be modified in an exchange state if applicable. May be omitted if the unit is configured to store mixed currencies or non-cash items.
     *
     * Property value constraints:
     *
     * pattern: ^[A-Z]{3}$
     */
    currency?: string;
    /**
     * Absolute value of a cash item or items. May be a floating point value to allow for coins and notes which have a value which is not a whole multiple of the currency unit.
     *
     * If applied to a storage unit, this applies to all contents, may be 0 if mixed and may only be modified in an exchange state if applicable.
     *
     * Property value constraints:
     *
     * minimum: 0
     */
    value?: number;
    /**
     * If specified, replenishmentStatus is set to high if the total number of items in the storage unit is greater than this number. The total number is not reported directly, but derived from initial + in - out.
     *
     * If not specified, high is based on hardware sensors if supported - see hardwareSensors.
     *
     * Property value constraints:
     *
     * minimum: 1
     */
    highThreshold?: number;
    /**
     * If specified, replenishmentStatus is set to low if total number of items in the storage unit is less than this number. The total number is not reported directly, but derived from initial + in - out.
     *
     * If not specified, low is based on hardware sensors if supported - see hardwareSensors.
     *
     * Property value constraints:
     *
     * minimum: 1
     */
    lowThreshold?: number;
    /**
     * If true, items cannot be accepted into the storage unit in Cash In operations.
     */
    appLockIn?: boolean;
    /**
     * If true, items cannot be dispensed from the storage unit in Cash Out operations.
     */
    appLockOut?: boolean;
    /**
     * An array containing multiple cash items, listing what a storage unit is capable of or configured to handle. Each member is the object name of a cash item reported by CashManagement.GetBankNoteTypes.
     */
    cashItems?: string[];
    /**
     * Application configured name of the unit.
     */
    name?: string;
    /**
     * If specified, this is the number of retract operations allowed into the unit. Only applies to retract units. If retractOperations equals this number, then no further retracts are allowed into this storage unit.
     *
     * If not specified, the maximum number is not limited by counts.
     *
     * Property value constraints:
     *
     * minimum: 1
     */
    maxRetracts?: number;
}
export interface SetStorageInitial {
    /**
     * Counts of a given cash item (as reported by CashManagement.GetBankNoteTypes) broken down by classification.
     *
     * See {@link StorageDispenserBox}
     */
    [key: string]: number | StorageDispenserBox;
}
export interface SetStorageStatus {
    /**
     * The cash related items which are in the storage unit at the last replenishment. If specified, out and in are reset to empty.
     *
     * See {@link SetStorageInitial}
     */
    initial?: SetStorageInitial;
}
export interface SetStorageCash {
    /**
     * Indicates what this storage unit is configured as or is being configured to do - where applicable the supported options can be derived from capabilities.
     *
     * If the Service supports an exchange state, only a subset of these parameters may be modified unless in an exchange. Parameters which may only be modified in an exchange state are listed.
     *
     * See {@link SetStorageConfiguration}
     */
    configuration?: SetStorageConfiguration;
    /**
     * See {@link SetStorageStatus}
     */
    status?: SetStorageStatus;
}
export interface SetStorageCardConfig {
    /** The identifier that may be used to identify the type of cards in the storage unit. This is only applicable to dispense type storage units. */
    cardID?: string;
    /**
     * If the threshold value is non zero, hardware sensors in the storage unit do not trigger Storage.StorageThresholdEvent events.
     *
     * If non zero, when count reaches the threshold value:
     *
     * For retain type storage units, a high threshold will be sent.
     * For dispense type storage units, a low threshold will be sent.
     * Property value constraints:
     *
     * minimum: 0
     */
    threshold?: number;
}
export interface SetStorageCardStatus {
    /**
     * The number of cards in the storage unit at the last replenishment. If specified, count is set to match this value and retainCount is set to zero.
     *
     * Property value constraints:
     *
     * minimum: 0
     */
    initialCount?: number;
}
export interface SetStorageCard {
    /**
     * Indicates the card storage unit configuration.
     *
     * See {@link SetStorageCardConfig}
     */
    configuration?: SetStorageCardConfig;
    /**
     * Indicates the card storage unit status being set.
     *
     * See {@link SetStorageCardStatus}
     */
    status?: SetStorageCardStatus;
}
export interface SetStorageUnit {
    /**
     * The cash related contents and configuration of the unit.
     *
     * See {@link SetStorageCash}
     */
    cash?: SetStorageCash;
    /**
     * The card related contents and configuration of the unit.
     *
     * See {@link SetStorageCard}
     */
    card?: SetStorageCard;
}
export interface SetStorageStorage {
    /**
     * The object contains a single storage unit.
     *
     * Property name constraints:
     *
     * pattern: ^unit[0-9A-Za-z]+$
     *
     * See {@link SetStorageUnit}
     */
    [key: string]: SetStorageUnit;
}
export interface SetStoragePayload {
    /**
     * Timeout in milliseconds for the command to complete. If set to 0, the command will not timeout but can be canceled.
     *
     * default: 0
     */
    timeout?: number;
    /**
     * Object containing storage unit information.
     *
     * See {@link SetStorageStorage}
     */
    storage?: SetStorageStorage;
}
export declare class SetStoragePayloadCommand implements StorageCommand<StorageCommandType.SetStorage, SetStoragePayload> {
    private requestId;
    private timeout?;
    private storage?;
    header: XfsMessageHeader<XfsMessageType.COMMAND, StorageCommandType.SetStorage>;
    payload: SetStoragePayload;
    constructor(requestId: number, timeout?: number | undefined, storage?: SetStorageStorage | undefined);
}
export declare enum SetStorageErrorCode {
    /** Invalid unit. */
    INVALID_UNIT = "invalidUnit",
    /** The device is not in an exchange state and a request has been made to modify information which can only be modified in an exchange state. */
    NO_EXCHANGE_ACTIVE = "noExchangeActive",
    /** A problem occurred with a storage unit. A Storage.StorageErrorEvent will be posted with the details. */
    STORAGE_UNIT_ERROR = "storageUnitError"
}
export interface StorageSetStorageCompletionMessagePayload extends XfsCompletionMessagePayload<SetStorageErrorCode> {
}
export interface StorageSetStorageCompletionMessage extends XfsCompletionMessage<StorageCommandType.GetStorage, SetStorageErrorCode, StorageSetStorageCompletionMessagePayload> {
}
