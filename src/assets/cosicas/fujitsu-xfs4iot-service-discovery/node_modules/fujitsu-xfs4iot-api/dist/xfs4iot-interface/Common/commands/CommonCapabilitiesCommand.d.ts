import { CommonCommand, CommonCommandType } from '.';
import { XfsCompletionMessage, XfsCompletionMessagePayload, XfsMessageHeader, XfsMessageType } from '../../Core';
import { InterfaceNameEnum } from '../InterfaceNameEnum';
export interface CommonCapabilitiesPayload {
    /**
     * Timeout in milliseconds for the command to complete. If set to 0, the command will not timeout but can be canceled.
     *
     * default: 0
     */
    timeout?: number;
}
export declare class CommonCapabilitiesCommand implements CommonCommand<CommonCommandType.Capabilities, CommonCapabilitiesPayload> {
    header: XfsMessageHeader<XfsMessageType.COMMAND, CommonCommandType.Capabilities>;
    payload: CommonCapabilitiesPayload;
    constructor(requestId: number, timeout?: number);
}
export interface CapabilitiesInterface {
    /** Name of supported XFS4IoT interface. Following values are supported: */
    name: InterfaceNameEnum;
    /**
     * The commands supported by the service.
     *
     * Key - Pattern: * ^[0-9A-Za-z]*\.[0-9A-Za-z]*$
     * versions - List pattern: ^[1-9][0-9]*\.([1-9][0-9]*|0)$
     *
     * Example: CardReader.ReadRawData
     */
    commands: {
        [key in InterfaceNameEnum]: {
            versions: string[];
        };
    };
    /**
     * The events (both event and unsolicited) supported by the service.
     *
     * Key - Pattern: * ^[0-9A-Za-z]*\.[0-9A-Za-z]*$
     * versions - List pattern: ^[1-9][0-9]*\.([1-9][0-9]*|0)$
     *
     * Example: CardReader.MediaInsertedEvent
     */
    events: {
        [key in InterfaceNameEnum]: {
            versions: string[];
        };
    };
    /**
     * Specifies the maximum number of requests which can be queued by the Service. This will be omitted if not reported. This will be 0 if the maximum number of requests is unlimited.
     *
     * minimum: 0
     */
    maximumRequests: number;
}
export declare type AllInterface = {
    [key in InterfaceNameEnum]: any;
};
export interface FirmwareInfo {
    /** Specifies the firmware name. The property is omitted, if the firmware name is unknown. */
    firmwareName?: string;
    /** Specifies the firmware version. The property is omitted, if the firmware version is unknown. */
    firmwareVersion?: string;
    /** Specifies the hardware revision. The property is omitted, if the hardware revision is unknown. */
    hardwareRevision?: string;
}
export interface SoftwareInfo {
    /** Specifies the software name. The property is omitted, if the software name is unknown. */
    softwareName?: string;
    /** Specifies the software version. The property is omitted, if the software version is unknown. */
    softwareVersion?: string;
}
export interface DeviceInformation {
    /** Specifies the device model name. The property is omitted, if the device model name is unknown. */
    modelName?: string;
    /** Specifies the unique serial number of the device. The property is omitted, if the serial number is unknown. */
    serialNumber?: string;
    /** Specifies the device revision number. The property is omitted, if the device revision number is unknown. */
    revisionNumber?: string;
    /** Contains a description of the device. The property is omitted, if the model description is unknown. */
    modelDescription?: string;
    /**
     * Array of firmware structures specifying the names and version numbers of the firmware that is present.
     * Single or multiple firmware versions can be reported. If the firmware versions are not reported, then this property is omitted.
     */
    firmware?: FirmwareInfo[];
    /**
     * Array of software structures specifying the names and version numbers of the software components that are present.
     * Single or multiple software versions can be reported. If the software versions are not reported, then this property is omitted.
     */
    software?: SoftwareInfo[];
}
export declare enum EndToEndSecurityRequiredEnum {
    /** The device is capable of supporting E2E security, but it will not be enforced if not configured, for example because the required keys are not loaded. */
    IF_CONFIGURED = "ifConfigured",
    /**
     * E2E security is supported and enforced at all times. Failure to supply the required security details will lead to errors.
     * If E2E security is not correctly configured, for example because the required keys are not loaded, all secured commands will fail with an error.
     */
    ALWAYS = "always"
}
export declare enum ResponseSecurityEnum {
    /** The device is incapable of returning a response token. */
    NOT_SUPPORTED = "notSupported",
    /** The device is capable of supporting E2E security if correctly configured. If E2E security has not been correctly configured, for example because the required keys are not loaded, commands will complete without a security token. */
    IF_CONFIGURED = "ifConfigured",
    /** A security token will be included with command responses. If E2E security is not correctly configured, for example because the required keys are not loaded, the command will complete with an error. */
    ALWAYS = "always"
}
export interface EndToEndSecurityInfo {
    /** Specifies the level of support for end to end security. See {@link EndToEndSecurityRequiredEnum} */
    required: EndToEndSecurityRequiredEnum;
    /** Specifies if this device has a Hardware Security Element (HSE) which validates the security token. If this property is false it means that validation is performed in software. */
    hardwareSecurityElement: boolean;
    /** Specifies if this device will return a security token as part of the response data to commands that support end to end security, for example, to validate the result of a dispense operation.. See {@link ResponseSecurityEnum} */
    responseSecurityEnabled: ResponseSecurityEnum;
    /**
     * Array of commands which require an E2E token to authorize. These commands will fail if called without a valid token.
     *
     * The commands that can be listed here depends on the XFS4IoT standard, but it's possible that the standard will change over time, so for maximum compatibility an application should check this property before calling a command.
     *
     * Note that this only includes commands that require a token. Commands that take a nonce and return a token will not be listed here. Those commands can be called without a nonce and will continue to operate in a compatible way.
     *
     * Property value constraints: pattern: ^[A-Za-z][A-Za-z0-9]*\.[A-Za-z][A-Za-z0-9]*$
     */
    commands: ResponseSecurityEnum[];
    /**
     * If this device supports end to end security and can return a command nonce with the command Common.GetCommandNonce,
     * and the device automatically clears the command nonce after a fixed length of time, this property will report the number of seconds between returning the command nonce and clearing it.
     *
     * The value is given in seconds but it should not be assumed that the timeout will be accurate to the nearest second. The nonce may also become invalid before the timeout, for example because of a power failure.
     *
     * The device may impose a timeout to reduce the chance of an attacker re-using a nonce value or a token.
     * This timeout will be long enough to support normal operations such as dispense and present including creating the required token on the host and passing it to the device.
     * For example, a command nonce might time out after one hour (that is, 3600 seconds).
     *
     * In all other cases, commandNonceTimeout will have a value of zero. Any command nonce will never timeout.
     * It may still become invalid, for example because of a power failure or when explicitly cleared using the ClearCommandNonce command.
     *
     * Property value constraints:
     *
     * minimum: 0
     */
    commandNonceTimeout: number;
}
export declare enum CashDispenserTypeEnum {
    /**  - The Dispenser is a Teller Bill Dispenser. */
    TELLER_BILL = "tellerBill",
    /**  - The Dispenser is a Self-Service Bill Dispenser. */
    SELF_SERVICE_BILL = "selfServiceBill",
    /**  - The Dispenser is a Teller Coin Dispenser. */
    TELLER_COIN = "tellerCoin",
    /**  - The Dispenser is a Self-Service Coin Dispenser. */
    SELF_SERVICE_COIN = "selfServiceCoin"
}
export interface CommonCapabilitiesCompletionMessagePayload extends XfsCompletionMessagePayload<void>, Partial<AllInterface> {
    /** Array of interfaces supported by this XFS4IoT service. */
    interfaces: CapabilitiesInterface[];
    /**
     * Capability information common to all XFS4IoT services.
     */
    common: {
        /** Specifies the Service Version. */
        serviceVersion?: string;
        /** Array of deviceInformation structures. If the service uses more than one device there will be on array element for each device.  */
        deviceInformation?: DeviceInformation[];
        /** Specifies whether power saving control is available. */
        powerSaveControl?: boolean;
        /** Specifies whether the anti-fraud module is available. */
        antiFraudModule?: boolean;
        /**
         * If this value is present then end to end security is supported. The sub-properties detail exactly how it is supported and what level of support is enabled.
         * Also see common.StatusProperties.endToEndSecurity for the current status of end to end security, such as if it is being enforced, or if configuration is required.
         *
         * If this value is not present then end to end security is not supported by this service.
         */
        endToEndSecurity?: EndToEndSecurityInfo;
    };
    /** Capability information for XFS4IoT services implementing the CashDispenser interface. This will be omitted if the CashDispenser interface is not supported. */
    cashDispenser?: {
        /**
         * Supplies the type of Dispenser. See {@link CashDispenserTypeEnum}
         */
        type?: CashDispenserTypeEnum;
        /**
         * Supplies the maximum number of items that can be dispensed in a single dispense operation.
         *
         * Property value constraints: minimum: 1
         */
        maxDispenseItems?: number;
        /**
         * If true the shutter is controlled implicitly by the Service. If false the shutter must be controlled explicitly by the application using the CashManagement.OpenShutter and CashManagement.CloseShutter commands.
         *
         * This property is always true if the device has no shutter. This property applies to all shutters and all output positions.
         */
        shutterControl?: boolean;
        /** Specifies the area to which items may be retracted. If the device does not have a retract capability all flags will be set to false. */
        retractAreas?: {
            /** The items may be retracted to a retract storage unit. */
            retract?: boolean;
            /** The items may be retracted to the transport. */
            transport?: boolean;
            /** The items may be retracted to the intermediate stacker. */
            stacker?: boolean;
            /** The items may be retracted to a reject storage unit. */
            reject?: boolean;
            /** The items may be retracted to storage units which would be used during a Cash In transaction including recycling storage units */
            itemCassette?: boolean;
            /** The items may be retracted to storage units which would be used during a Cash In transaction not including recycling storage units. */
            cashIn?: boolean;
        };
        /**
         * Specifies the actions which may be performed on items which have been retracted to the transport.
         * If the device does not have the capability to retract items to the transport or move items from the transport all flags will be set to false.
         */
        retractTransportActions?: {
            /** The items may be presented. */
            present?: boolean;
            /** The items may be moved to a retract storage unit. */
            retract?: boolean;
            /** The items may be moved to a reject storage unit. */
            reject?: boolean;
            /** The items may be moved to storage units which would be used during a Cash In transaction including recycling storage units. */
            itemCassette?: boolean;
            /** The items may be moved to storage units which would be used during a Cash In transaction not including recycling storage units. */
            cashIn?: boolean;
        };
        /**
         * Specifies the actions which may be performed on items which have been retracted to the stacker.
         * If the device does not have the capability to retract items to the stacker or move items from the stacker all flags will be set to false.
         */
        retractStackerActions?: {
            /** The items may be presented. */
            present?: boolean;
            /** The items may be moved to a retract storage unit. */
            retract?: boolean;
            /** The items may be moved to a reject storage unit. */
            reject?: boolean;
            /** The items may be moved to storage units which would be used during a Cash In transaction including recycling storage units. */
            itemCassette?: boolean;
            /** The items may be moved to storage units which would be used during a Cash In transaction not including recycling storage units. */
            cashIn?: boolean;
        };
        /** Specifies whether the Dispenser supports stacking items to an intermediate position before the items are moved to the exit position. */
        intermediateStacker?: boolean;
        /**
         * Specifies whether the Dispenser can detect when items at the exit position are taken by the user. This applies to all output positions.
         *
         * If true the Service generates an accompanying CashManagement.ItemsTakenEvent.
         *
         * If false this event is not generated.
         */
        itemsTakenSensor?: boolean;
        /** Specifies the Dispenser output positions which are available. */
        positions?: {
            /** The Dispenser has a left output position. */
            left?: boolean;
            /** The Dispenser has a right output position. */
            right?: boolean;
            /** The Dispenser has a center output position. */
            center?: boolean;
            /** The Dispenser has a top output position. */
            top?: boolean;
            /** The Dispenser has a bottom output position. */
            bottom?: boolean;
            /** The Dispenser has a front output position. */
            front?: boolean;
            /** The Dispenser has a rear output position. */
            rear?: boolean;
        };
        /** Specifies the Dispenser move item options which are available. */
        moveItems?: {
            /** The Dispenser can dispense items from the storage units to the intermediate stacker while there are items on the transport. */
            fromCashUnit?: boolean;
            /** The Dispenser can retract items to the storage units while there are items on the intermediate stacker. */
            toCashUnit?: boolean;
            /** The Dispenser can retract items to the transport while there are items on the intermediate stacker. */
            toTransport?: boolean;
            /**
             * The Dispenser can dispense items from the storage units to the intermediate stacker while there are already items on the intermediate stacker that have not been in customer access.
             * Items remaining on the stacker from a previous dispense may first need to be rejected explicitly by the application if they are not to be presented
             */
            toStacker?: boolean;
        };
    };
}
export interface CommonCapabilitiesCommandCompletionMessage extends XfsCompletionMessage<CommonCommandType.Capabilities, void, CommonCapabilitiesCompletionMessagePayload> {
}
