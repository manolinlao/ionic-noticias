import { StorageCommand, StorageCommandType } from '.';
import { XfsCompletionMessagePayload, XfsCompletionMessage, XfsMessageHeader, XfsMessageType } from '../../Core';
import { StorageCardConfiguration, StorageCashTypes, StorageDispenserBox, StorageItems } from '..';
export interface GetStoragePayload {
    /**
     * Timeout in milliseconds for the command to complete. If set to 0, the command will not timeout but can be canceled.
     *
     * default: 0
     */
    timeout?: number;
}
export declare class GetStoragePayloadCommand implements StorageCommand<StorageCommandType.GetStorage, GetStoragePayload> {
    private requestId;
    private timeout?;
    header: XfsMessageHeader<XfsMessageType.COMMAND, StorageCommandType.GetStorage>;
    payload: GetStoragePayload;
    constructor(requestId: number, timeout?: number | undefined);
}
export declare enum UnitStatusEnum {
    /** The storage unit is in a good state. */
    OK = "ok",
    /** The storage unit is inoperative. */
    INOPERATIVE = "inoperative",
    /** The storage unit is missing. */
    MISSING = "missing",
    /** The storage unit has not been configured for use. */
    NOT_CONFIGURED = "notConfigured",
    /**
     * The storage unit has been inserted (including removal followed by a reinsertion) when the device was not in the exchange state - see Storage.StartExchange.
     * This storage unit cannot be used. Only applies to services which support the exchange state.
     */
    MANIPULATED = "manipulated"
}
export interface CashCapabilities {
    /**
     * The types of operation the unit is capable of or configured to perform. This is a combination of one or more operations. May only be modified in an exchange state if applicable.
     *
     * See {@link StorageCashTypes}
     */
    types?: StorageCashTypes;
    /**
     * The types of cash media the unit is capable of storing or configured to store.
     * This is a combination of one or more item types. May only be modified in an exchange state if applicable. See Note Classification for more information about cash classification levels
     *
     * See {@link StorageItems}
     */
    items?: StorageItems;
    /** Indicates whether the storage unit has sensors which report the status. If true, then hardware sensors will override count-based replenishment status for empty and full. Other replenishment states can be overridden by counts. */
    hardwareSensors?: boolean;
    /**
     * If items can be retracted into this storage unit, this is the number of areas within the storage unit which allow physical separation of different bunches.
     * If there is no physical separation of retracted bunches within this storage unit, this value is 1.
     *
     * Property value constraints:
     *
     * minimum: 1
     */
    retractAreas?: number;
    /** If true, indicates that retract capacity is based on counts. If false, indicates that retract capacity is based on the number of commands which resulted in items being retracted into the storage unit. */
    retractThresholds?: boolean;
    /**
     * An array containing multiple cash items, listing what a storage unit is physically capable of handling.
     * For example a coin storage unit may be restricted to one coin denomination due to the hardware. Each member is the object name of a cash item reported by CashManagement.GetBankNoteTypes.
     */
    cashItems?: string[];
}
export interface CashConfiguration {
    /**
     * The types of operation the unit is capable of or configured to perform. This is a combination of one or more operations. May only be modified in an exchange state if applicable.
     *
     * See {@link StorageCashTypes}
     */
    types?: StorageCashTypes;
    /**
     * The types of cash media the unit is capable of storing or configured to store.
     * This is a combination of one or more item types. May only be modified in an exchange state if applicable. See Note Classification for more information about cash classification levels.
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
    /** If true, items cannot be accepted into the storage unit in Cash In operations. */
    appLockIn?: boolean;
    /** If true, items cannot be dispensed from the storage unit in Cash Out operations. */
    appLockOut?: boolean;
    /** An array containing multiple cash items, listing what a storage unit is capable of or configured to handle. Each member is the object name of a cash item reported by CashManagement.GetBankNoteTypes. */
    cashItems?: string[];
    /** Application configured name of the unit. */
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
export interface CashStatusInitial {
    /** Count of unrecognized items handled by the cash interface. */
    /**
     * Counts of a given cash item (as reported by CashManagement.GetBankNoteTypes) broken down by classification.
     *
     * unrecognized?: number;
     *
     * See {@link StorageDispenserBox}
     */
    [key: string]: number | StorageDispenserBox;
}
export interface CashStatusOut {
    /**
     * The items dispensed from this storage unit which are or were customer accessible.
     *
     * See {@link CashStatusInitial}
     */
    presented?: CashStatusInitial;
    /**
     * The items dispensed from this storage unit which were invalid and were diverted to a reject storage unit and were not customer accessible during the operation.
     *
     * See {@link CashStatusInitial}
     */
    rejected?: CashStatusInitial;
    /**
     * The items dispensed from this storage unit which were moved to a storage unit other than a reject storage unit and were not customer accessible during the operation.
     *
     * See {@link CashStatusInitial}
     */
    distributed?: CashStatusInitial;
    /**
     * The items dispensed from this storage unit which moved to an unknown position.
     *
     * See {@link CashStatusInitial}
     */
    unknown?: CashStatusInitial;
    /**
     * The items dispensed from this storage unit which are not customer accessible and are currently stacked awaiting presentation to the customer.
     * This item list can increase and decrease as items are moved around in the device. This is not reset if initial is set for this unit by Storage.GetStorage.
     *
     * See {@link CashStatusInitial}
     */
    stacked?: CashStatusInitial;
    /**
     * The items dispensed from this storage unit which are not customer accessible and were diverted to a temporary location due to being invalid and have not yet been deposited in a storage unit.
     * This item list can increase and decrease as items are moved around in the device. This is not reset if initial is set for this unit by Storage.GetStorage.
     *
     * See {@link CashStatusInitial}
     */
    diverted?: CashStatusInitial;
    /**
     * The items dispensed from this storage unit which are not customer accessible and which have jammed in the transport.
     * This item list can increase and decrease as items are moved around in the device. This is not reset if initial is set for this unit by Storage.GetStorage.
     *
     * See {@link CashStatusInitial}
     */
    transport?: CashStatusInitial;
}
export interface CashStatusIn {
    /**
     * Number of cash retract operations which resulted in items entering this storage unit. This can be used where devices do not have the capability to count or validate items after presentation.
     */
    retractOperations?: number;
    /**
     * The items deposited in the storage unit during a Cash In transaction.
     *
     * See {@link CashStatusInitial}
     */
    deposited?: CashStatusInitial;
    /**
     * The items retracted into the storage unit after being accessible to a customer.
     * This may be inaccurate or not counted if items are not counted or re-validated after presentation, the number of retract operations is also reported separately in retractOperations.
     *
     * See {@link CashStatusInitial}
     */
    retracted?: CashStatusInitial;
    /**
     * The items deposited in this storage unit originating from another storage unit but rejected due to being invalid. This count may be inaccurate due to the nature of rejected items.
     *
     * See {@link CashStatusInitial}
     */
    rejected?: CashStatusInitial;
    /**
     * The items deposited in this storage unit originating from another storage unit but not rejected.
     *
     * See {@link CashStatusInitial}
     */
    distributed?: CashStatusInitial;
    /**
     * The items which were intended to be deposited in this storage unit but are not yet deposited.
     * Typical use case for this property is tracking items after a jam during CashAcceptor.CashInEnd. This is not reset if initial is set for this unit by Storage.GetStorage.
     *
     * See {@link CashStatusInitial}
     */
    transport?: CashStatusInitial;
}
export declare enum CashStatusAccuracy {
    /** The hardware is not capable of determining the accuracy of count. */
    NOT_SUPPORTED = "notSupported",
    /** The count is expected to be accurate. The notes were previously counted and there have since been no events that might have introduced inaccuracy. */
    ACCURATE = "accurate",
    /** The count is expected to be accurate. The counts were previously set and there have since been no events that might have introduced inaccuracy. */
    ACCURATE_SET = "accurateSet",
    /** The count is likely to be inaccurate. A jam, picking fault, or some other event may have resulted in a counting inaccuracy. */
    INACCURATE = "inaccurate",
    /** The accuracy of count cannot be determined. This may be due to storage unit insertion or some other hardware event. */
    UNKNOWN = "unknown"
}
export declare enum CashStatusReplenishment {
    /** The storage unit media is in a good state. */
    OK = "ok",
    /** The storage unit is full. This is based on hardware detection, either on sensors or counts. */
    FULL = "full",
    /** The storage unit is almost full (either sensor based or exceeded the highThreshold. */
    HIGH = "high",
    /** The storage unit is almost empty (either sensor based or below the lowThreshold). */
    LOW = "low",
    /** The storage unit is empty, or insufficient items in the storage unit are preventing further dispense operations. If the storage unit has hardwareSensors, this state is not set by counts. */
    EMPTY = "empty"
}
export declare enum CashStatusOperation {
    /** Dispense operations are possible and deposit operations are not possible on this recycling storage unit. */
    DISPENSE_INOPERATIVE = "dispenseInoperative",
    /** Deposit operations are possible and dispense operations are not possible on this recycling storage unit. */
    DEPOSIT_INOPERATIVE = "depositInoperative"
}
export interface CashStatus {
    /**
     * Assigned by the Service. Will be a unique number which can be used to determine usNumber in XFS 3.x migration. This can change as storage units are added and removed from the storage collection.
     *
     * Property value constraints:
     *
     * minimum: 1
     */
    index?: number;
    /**
     * The cash related items which were in the storage unit at the last replenishment.
     *
     * See {@link CashStatusInitial}
     */
    initial?: CashStatusInitial;
    /**
     * The items moved from this storage unit by cash commands to another destination since the last replenishment of this unit.
     * This includes intermediate positions such as a stacker, where an item has been moved before moving to the final destination such as another storage unit or presentation to a customer.
     *
     * Counts for non-intermediate positions are reset if initial is set for this unit by Storage.GetStorage. See descriptions for the counts which will not be reset by this command.
     *
     * Intermediate position counts are reset when the intermediate position is empty:
     *
     *      If it is known where the items moved to then the appropriate count or counts are modified.
     *      If it is not known where the items moved, for example because they have been removed manually after jam clearance, then unknown is modified.
     *
     * See {@link CashStatusOut}
     */
    out?: CashStatusOut;
    /**
     * List of items inserted in this storage unit by cash commands from another source since the last replenishment of this unit.
     * This also reports items in the transport, where an item has jammed before being deposited in the storage unit.
     *
     * Counts other than transport are reset if initial is set for this unit by Storage.GetStorage. See descriptions for the counts which will not be reset by this command.
     *
     * The transport count is reset when it is empty:
     *
     * If it is known where the items moved to then the appropriate count or counts are modified.
     * If it is not known where the items moved, for example because they have been removed manually after jam clearance, then unknown is modified.
     *
     * See {@link CashStatusIn}
     */
    in?: CashStatusIn;
    /**
     * Describes the accuracy of the counts reported by out and in.
     *
     * See {@link CashStatusAccuracy}
     */
    accuracy?: CashStatusAccuracy;
    /**
     * The state of the media in the unit if it can be determined.
     * Note that overall status of the storage unit must be taken into account when deciding whether the storage unit is usable and whether replenishment status is applicable.
     * In particular, if the overall status is missing this will not be reported.
     *
     * See {@link CashStatusReplenishment}
     */
    replenishmentStatus?: CashStatusReplenishment;
    /**
     * On some devices it may be possible to allow items to be dispensed in a recycling storage unit while deposit is inoperable or vice-versa.
     * This property allows the Service to report that one operation is possible while the other is not, without taking the storage unit out of Service completely with status or replenishmentStatus.
     *
     * See {@link CashStatusOperation}
     */
    operationStatus?: CashStatusOperation;
}
export interface UnitCash {
    /**
     * Indicates what the storage unit is capable of - this includes information which is a combination of that reported in WFS_INF_CDM_CASH_UNIT_INFO, WFS_INF_CIM_CASH_UNIT_INFO and WFS_INF_CIM_CASH_UNIT_CAPABILITIES in XFS 3.x.
     *
     * See {@link CashCapabilities}
     */
    capabilities?: CashCapabilities;
    /**
     * Indicates what this storage unit is configured as or is being configured to do - where applicable the supported options can be derived from capabilities.
     *
     * If the Service supports an exchange state, only a subset of these parameters may be modified unless in an exchange. Parameters which may only be modified in an exchange state are listed.
     *
     * See {@link CashConfiguration}
     */
    configuration?: CashConfiguration;
    /**
     * Indicates the storage unit status - this includes information which is a combination of that reported in WFS_INF_CDM_CASH_UNIT_INFO and WFS_INF_CIM_CASH_UNIT_INFO in XFS 3.x.
     * Note that the count of items in the storage unit must be derived from the counts reported.
     *
     * See {@link CashStatus}
     */
    status?: CashStatus;
}
export declare enum CapabilitiesTypeEnum {
    /** The storage unit can retain cards. */
    RETAIN = "retain",
    /** The storage unit can dispense cards. */
    DISPENSE = "dispense",
    /** The storage unit can be used to temporarily store a card allowing another card to enter the transport. */
    PARK = "park"
}
export interface UnitCardCapabilities {
    /**
     * The type of card storage
     *
     * See {@link CapabilitiesTypeEnum}
     */
    type?: CapabilitiesTypeEnum;
    /**
     * Indicates whether the storage unit has hardware sensors that can detect threshold states.
     *
     * default: false
     */
    hardwareSensors?: boolean;
}
export declare enum ReplenishmentStatusEnum {
    /** The storage unit is in a good state. */
    OK = "ok",
    /** The storage unit is full. */
    FULL = "full",
    /** The storage unit is almost full (either sensor based or above the threshold). */
    HIGH = "high",
    /** The storage unit is almost empty (either sensor based or below the threshold). */
    LOW = "low",
    /** The storage unit is empty. */
    EMPTY = "empty"
}
export interface UnitCardStatus {
    /**
     * The initial number of cards in the storage unit. This is only applicable to dispense type storage units.
     *
     * This value is persistent.
     *
     * Property value constraints:
     *
     * minimum: 0
     */
    initialCount?: number;
    /**
     * The number of cards in the storage unit.
     *
     * If the storage unit type is dispense:
     *
     * This count also includes a card dispensed from the storage unit which has not been moved to either the exit position or a dispense type storage unit.
     * This count is decremented when a card from the card storage unit is moved to the exit position or retained. If this value reaches zero it will not decrement further but will remain at zero.
     * If the storage unit type is retain:
     *
     * The count is incremented when a card is moved into the storage unit.
     * If the storage unit type is park:
     *
     * The count will increment when a card is moved into the storage module and decremented when a card is moved out of the storage module.
     * This value is persistent.
     *
     * Property value constraints:
     *
     * minimum: 0
     */
    count?: number;
    /**
     * The number of cards from this storage unit which are in a retain storage unit.
     *
     * This is only applicable to dispense type storage units.
     *
     * This value is persistent.
     *
     * Property value constraints:
     *
     * minimum: 0
     */
    retainCount?: number;
    /**
     * The state of the cards in the storage unit if it can be determined.
     * Note that overall status of the storage unit must be taken into account when deciding whether the storage unit is usable and whether replenishment status is applicable.
     * In particular, if the overall status is missing this will be omitted.
     *
     * See {@link ReplenishmentStatusEnum}
     */
    replenishmentStatus?: ReplenishmentStatusEnum;
}
export interface UnitCard {
    /**
     * Indicates the card storage unit capabilities.
     *
     * See {@link UnitCardCapabilities}
     */
    capabilities?: UnitCardCapabilities;
    /**
     * Indicates the card storage unit configuration.
     *
     * See {@link StorageCardConfiguration}
     */
    configuration?: StorageCardConfiguration;
    /**
     * Indicates the card storage unit status.
     *
     * See {@link UnitCardStatus}
     */
    status?: UnitCardStatus;
}
export interface StorageUnit {
    /**
     * An identifier which can be used for cUnitID in CDM/CIM XFS 3.x migration. Not required if not applicable.
     *
     * Property value constraints:
     *
     * pattern: ^.{1,5}$
     */
    id?: string;
    /**
     * Fixed physical name for the position.
     */
    positionName?: string;
    /**
     * The nominal capacity of the unit. This may be an estimate as the quality and thickness of the items stored in the unit may affect how many items can be stored. 0 means the capacity is unknown.
     *
     * Property value constraints:
     *
     * minimum: 0
     */
    capacity?: number;
    /**
     * The state of the unit.
     *
     * See {@link UnitStatusEnum}
     */
    status: UnitStatusEnum;
    /** The storage unit's serial number if it can be read electronically. */
    serialNumber?: string;
    /**
     * The cash related contents, status and configuration of the unit.
     *
     * See {@link UnitCash}
     */
    cash?: UnitCash;
    /**
     * The card related contents, status and configuration of the unit.
     *
     * See {@link UnitCard}
     */
    card?: UnitCard;
}
export interface GetStorageStorage {
    /**
     * The object contains a single storage unit.
     *
     * Property name constraints:
     *
     * pattern: ^unit[0-9A-Za-z]+$
     *
     * See {@link StorageUnit}
     */
    [key: string]: StorageUnit;
}
export interface StorageGetStorageCompletionMessagePayload extends XfsCompletionMessagePayload<{}> {
    /**
     * Object containing storage unit information. The property name is the storage unit identifier.
     *
     * See {@link GetStorageStorage}
     */
    storage?: GetStorageStorage;
}
export interface StorageGetStorageCompletionMessage extends XfsCompletionMessage<StorageCommandType.GetStorage, {}, StorageGetStorageCompletionMessagePayload> {
}
