import { CardReaderCommand, CardReaderCommandType } from '.';
import { XfsCompletionMessagePayload, XfsCompletionMessage } from '../../Core';
export declare enum WriteRawDataPayloadDestinationEnum {
    /** data is to be written to track 1 */
    TRACK1 = "track1",
    /** data is to be written to track 2 */
    TRACK2 = "track2",
    /** data is to be written to track 3 */
    TRACK3 = "track3",
    /** data is to be written to the front track 1. In some countries this track is known as JIS II track. */
    TRACK1_FRONT = "track1Front",
    /** data is to be written to JIS I track 1 (8bits/char) */
    TRACK1_JIS = "track1JIS",
    /** data is to be written to JIS I track 3 (8bits/char) */
    TRACK3_JIS = "track3JIS"
}
export declare enum WriteRawDataPayloadWriteMethodEnum {
    /** Write using low coercivity. */
    LOW_COERCIVITY = "loco",
    /** Write using high coercivity. */
    HIGH_COERCIVITY = "high",
    /** Service will determine whether low or high coercivity is to be used. */
    AUTO = "auto"
}
export interface WriteRawDataPayload {
    /**
     * Timeout in milliseconds for the command to complete. If set to 0, the command will not timeout but can be canceled.
     *
     * default: 0
     */
    timeout?: number;
    /** An array of card data write instructions */
    data: {
        /** Specifies where the card data is to be written to as one of the following {@link WriteRawDataPayloadDestinationEnum} */
        destination: WriteRawDataPayloadDestinationEnum;
        /**
         * Base64 encoded representation of the data
         *
         * Property value constraints:
         *
         * pattern: ^[A-Za-z0-9+/]+={0,2}$
         * format: base64
         */
        data: string;
        /** Indicates whether a low coercivity or high coercivity magnetic stripe is to be written as one of the following {@link WriteRawDataPayloadWriteMethodEnum} */
        writeMethod: WriteRawDataPayloadWriteMethodEnum;
    }[];
}
export interface CardReaderWriteRawDataCommand extends CardReaderCommand<CardReaderCommandType.WriteRawData, WriteRawDataPayload> {
}
export declare enum WriteRawDataErrorCode {
    /** The card is jammed. Operator intervention is required. */
    MEDIA_JAM = "mediaJam",
    /** The open of the shutter failed due to manipulation or hardware error. Operator intervention is required. */
    SHUTTER_FAIL = "shutterFail",
    /**
     * The card was removed before completion of the read action (the event CardReader.MediaInsertedEvent has been generated).
     * For motor driven devices, the read is disabled; i.e. another command has to be issued to enable the reader for card entry.
     */
    NO_MEDIA = "noMedia",
    /** No track or chip found; card may have been inserted or pulled through the wrong way. */
    INVALID_MEDIA = "invalidMedia",
    /** The card that was inserted is too short. When this error occurs the card remains at the exit slot. */
    CARD_TOO_SHORT = "cardTooShort",
    /** The card that was inserted is too long. When this error occurs the card remains at the exit slot. */
    CARD_TOO_LONG = "cardTooLong",
    /** The security module failed reading the cards security sign. */
    SECURITY_FAIL = "securityFail",
    /** There was an unresolved collision of two or more contactless card signals. */
    CARD_COLLISION = "cardCollision"
}
export interface CardReaderWriteRawDataCompletionMessagePayload extends XfsCompletionMessagePayload<WriteRawDataErrorCode> {
}
export interface CardReaderWriteRawDataCompletionMessage extends XfsCompletionMessage<CardReaderCommandType.WriteRawData, WriteRawDataErrorCode, CardReaderWriteRawDataCompletionMessagePayload> {
}
