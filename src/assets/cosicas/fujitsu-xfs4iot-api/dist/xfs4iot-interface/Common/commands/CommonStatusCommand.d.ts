import { CommonCommand, CommonCommandType } from '.';
import { CommonStatus, CardReaderStatus, CashAcceptorStatus, CashDispenserStatus, CashManagementStatus, KeyManagementStatus, KeyboardStatus, TextTerminalStatus, PrinterStatus, BarcodeReaderStatus, BiometricStatus, CameraStatus, LightsStatus, AuxiliariesStatus, VendorModeStatus, VendorApplicationStatus } from '..';
import { XfsCompletionMessage, XfsCompletionMessagePayload, XfsMessageHeader, XfsMessageType } from '../../Core';
export interface CommonStatusPayload {
    /**
     * Timeout in milliseconds for the command to complete. If set to 0, the command will not timeout but can be canceled.
     *
     * default: 0
     */
    timeout?: number;
}
export declare class CommonStatusCommand implements CommonCommand<CommonCommandType.Status, CommonStatusPayload> {
    header: XfsMessageHeader<XfsMessageType.COMMAND, CommonCommandType.Status>;
    payload: CommonStatusPayload;
    constructor(requestId: number, timeout?: number);
}
export interface CommonStatusCompletionMessagePayload extends XfsCompletionMessagePayload<void> {
    /** Status information common to all XFS4IoT services. */
    common: CommonStatus;
    /**
     * Status information for XFS4IoT services implementing the CardReader interface. This will be omitted if the CardReader interface is not supported.
     *
     * See {@link CardReaderStatus}
     */
    cardReader?: CardReaderStatus;
    /**
     * Status information for XFS4IoT services implementing the CashAcceptor interface. This will be omitted if the CashAcceptor interface is not supported.
     *
     * See {@link CashAcceptorStatus}
     */
    cashAcceptor?: CashAcceptorStatus;
    /**
     * Status information for XFS4IoT services implementing the CashDispenser interface. This will be omitted if the CashDispenser interface is not supported.
     *
     * See {@link CashDispenserStatus}
     */
    cashDispenser?: CashDispenserStatus;
    /**
     * Status information for XFS4IoT services implementing the CashManagement interface. This will be omitted if the CashManagement interface is not supported.
     *
     * See {@link CashManagementStatus}
     */
    cashManagement?: CashManagementStatus;
    /**
     * Status information for XFS4IoT services implementing the KeyManagement interface. This will be omitted if the KeyManagement interface is not supported.
     *
     * See {@link KeyManagementStatus}
     */
    keyManagement?: KeyManagementStatus;
    /**
     * Status information for XFS4IoT services implementing the Keyboard interface. This will be omitted if the Keyboard interface is not supported.
     *
     * See {@link KeyboardStatus}
     */
    keyboard?: KeyboardStatus;
    /**
     * Status information for XFS4IoT services implementing the TextTerminal interface. This will be omitted if the TextTerminal interface is not supported.
     *
     * See {@link TextTerminalStatus}
     */
    textTerminal?: TextTerminalStatus;
    /**
     * Status information for XFS4IoT services implementing the Printer interface. This will be omitted if the Printer interface is not supported.
     *
     * See {@link PrinterStatus}
     */
    printer?: PrinterStatus;
    /**
     * Status information for XFS4IoT services implementing the Barcode Reader interface. This will be omitted if the Barcode Reader interface is not supported.
     *
     * See {@link BarcodeReaderStatus}
     */
    barcodeReader?: BarcodeReaderStatus;
    /**
     * Status information for XFS4IoT services implementing the Biometrics interface. This will be omitted if the Biometrics interface is not supported.
     *
     * See {@link BiometricStatus}
     */
    biometric?: BiometricStatus;
    /**
     * Status information for XFS4IoT services implementing the Camera interface. This will be omitted if the Camera interface is not supported.
     *
     * See {@link CameraStatus}
     */
    camera?: CameraStatus;
    /**
     * Status information for XFS4IoT services implementing the Lights interface. This will be omitted if the Lights interface is not supported.
     *
     * See {@link LightsStatus}
     */
    lights?: LightsStatus;
    /**
     * Status information for XFS4IoT services implementing the Auxiliaries interface. This will be omitted if the Auxiliaries interface is not supported.
     *
     * See {@link AuxiliariesStatus}
     */
    auxiliaries?: AuxiliariesStatus;
    /**
     * Status information for XFS4IoT services implementing the VendorMode interface. This will be omitted if the VendorMode interface is not supported.
     *
     * See {@link VendorModeStatus}
     */
    vendorMode?: VendorModeStatus;
    /**
     * Status information for XFS4IoT services implementing the Vendor Application interface. This will be omitted if the Vendor Mode interface is not supported.
     *
     * See {@link VendorApplicationStatus}
     */
    vendorApplication?: VendorApplicationStatus;
}
export interface CommonStatusCommandCompletionMessage extends XfsCompletionMessage<CommonCommandType.Status, void, CommonStatusCompletionMessagePayload> {
}
