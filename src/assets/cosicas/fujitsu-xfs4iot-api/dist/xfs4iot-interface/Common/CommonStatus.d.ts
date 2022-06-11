import { CommonAntiFraudModuleEnum } from './CommonAntiFraudModuleEnum.js';
import { CommonDevicePositionEnum } from './CommonDevicePositionEnum.js';
import { CommonDeviceStatusEnum } from './CommonDeviceStatusEnum.js';
import { CommonEndToEndSecurityEnum } from './CommonEndToEndSecurityEnum.js';
import { CommonExchangeEnum } from './CommonExchangeEnum.js';
/** Status information common to all XFS4IoT services. */
export interface CommonStatus {
    /** Specifies the state of the device. See {@link CommonDeviceStatusEnum} */
    device: CommonDeviceStatusEnum;
    /** Position of the device. See {@link CommonDeviceStatusEnum} */
    devicePosition?: CommonDevicePositionEnum;
    /**
     * Specifies the actual number of seconds required by the device to resume its normal operational state from the current power saving mode.
     * This value is 0 if either the power saving mode has not been activated or no power save control is supported.
     */
    powerSaveRecoveryTime?: number;
    /**
     * Specifies the state of the anti-fraud module if available. See {@link CommonDeviceStatusEnum}
     */
    antiFraudModule?: CommonAntiFraudModuleEnum;
    /**
     * Specifies the exchange state of the service. Exchange can used to perform a manual replenishment of a device and is entered by Storage.StartExchange and completed by Storage.EndExchange.
     * When the state changes a Common.StatusChangedEvent is posted.
     *
     * See {@link CommonExchangeEnum}
     */
    exchange?: CommonExchangeEnum;
    /**
     * Specifies the status of end to end security support on this device. See {@link CommonEndToEndSecurityEnum}
     */
    endToEndSecurity?: CommonEndToEndSecurityEnum;
}
