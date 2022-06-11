import { CardReaderEventType } from '.';
import { XfsEventMessage } from '../../Core';
/** Represents the EMVCo defined transaction status value to be indicated through the Beep/LEDs as one of the following: */
export declare enum EMVCoStatusValueEnum {
    /** Contactless card reader is not able to communicate with a card. This status occurs towards the end of a contactless transaction or if the reader is not powered on. */
    NOT_READY = "notReady",
    /** Contactless card reader is powered on, but the reader field is not yet active for communication with a card. */
    IDLE = "idle",
    /** Contactless card reader is powered on and attempting to initiate communication with a card. */
    READY_TO_READ = "readyToRead",
    /** Contactless card reader is in the process of reading the card. */
    PROCESSING = "processing",
    /** Contactless card reader was able to read a card successfully. */
    CARD_READ_OK = "cardReadOk",
    /** Contactless card reader was not able to process the card successfully. */
    PROCESSING_ERROR = "processingError"
}
/**
 * Qualifies value. This data is defined by EMVCo as one of the following. If neither apply, this field and value are omitted:
 */
export declare enum EMVCoValueQualifierEnum {
    AMOUNT = "amount",
    BALANCE = "balance"
}
export interface CardReaderEMVClessReadStatusEventPayload {
    /**
     * Represents the EMVCo defined message identifier that indicates the text string to be displayed,
     * e.g., 0x1B is the “Authorising Please Wait” message (see EMVCo Contactless Specifications for Payment Systems Book A [Ref. cardreader-3], Section 9.4).
     */
    messageId?: number;
    /**
     * Represents the EMVCo defined transaction status value to be indicated through the Beep/LEDs as one of the following:
     *
     * See {@link EMVCoStatusValueEnum }
     */
    status?: EMVCoStatusValueEnum;
    /**
     * Represents the hold time in units of 100 milliseconds for which the application should display the message before processing the next user interface data.
     *
     * Property value constraints:
     *
     * minimum: 0
     *
     * default: 0
     */
    holdTime?: number;
    /**
     * Qualifies value. This data is defined by EMVCo as one of the following. If neither apply, this field and value are omitted:
     *
     * amount - value is an Amount.
     *
     * balance - value is a Balance.
     *
     * See {@link EMVCoValueQualifierEnum}
     */
    valueQualifier?: EMVCoValueQualifierEnum;
    /**
     * Represents the value of the amount or balance (as specified by valueQualifier) to be displayed where appropriate.
     * If valueQualifier is omitted, this property is omitted.
     */
    value?: string;
    /**
     * Represents the numeric value of currency code as per ISO 4217. If omitted, the currency code is not available.
     *
     * Property value constraints:
     *
     * pattern: ^[A-Z]{3}$
     */
    currencyCode?: string;
    /**
     * Represents the language preference (EMV Tag ‘5F2D’) if returned by the card.
     * If not returned, this property is omitted. The application should use this data to display all messages in the specified language until the transaction concludes.
     *
     * Property value constraints:
     *
     * pattern: ^[a-z]{2}$
     */
    languagePreferenceData?: string;
}
/**
 * This notifies that the communication (i.e. the commands exchanged linked to the tap) between the card and the intelligent contactless card reader are complete.
 * The application can use this event to display intermediate messages, progress of card read, audio signals or anything else that might be required.
 * The intelligent contactless card reader will continue the processing and the result of the processing will be returned in the output of the CardReader.EMVClessPerformTransaction command.
 */
export interface CardReaderEMVClessReadStatusEvent extends XfsEventMessage<CardReaderEventType, CardReaderEMVClessReadStatusEventPayload> {
}
