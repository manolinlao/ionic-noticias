import { CardReaderCommand, CardReaderCommandType } from '.';
import { XfsCompletionMessagePayload, XfsCompletionMessage } from '../../Core';
export interface ReadRawDataPayload {
    /**
     * Timeout in milliseconds for the command to complete. If set to 0, the command will not timeout but can be
     * canceled.
     *
     * default: 0
     */
    timeout?: number;
    /**
     * Track 1 of the magnetic stripe will be read.
     *
     * default: false
     */
    track1?: boolean;
    /**
     * Track 2 of the magnetic stripe will be read.
     *
     * default: false
     */
    track2?: boolean;
    /**
     * Track 3 of the magnetic stripe will be read.
     *
     * default: false
     */
    track3?: boolean;
    /**
     * The chip will be read.
     *
     * default: false
     */
    chip?: boolean;
    /**
     * A security check will be performed.
     *
     * default: false
     */
    security?: boolean;
    /**
     * If the Flux Sensor is programmable it will be disabled in order to allow chip data to be read on cards which have no magnetic stripes.
     *
     * default: false
     */
    fluxInactive?: boolean;
    /**
     * The Swedish Watermark track will be read.
     *
     * default: false
     */
    watermark?: boolean;
    /**
     * The memory chip will be read.
     *
     * default: false
     */
    memoryChip?: boolean;
    /**
     * Track 1 data is read from the magnetic stripe located on the front of the card. In some countries this track is known as JIS II track.
     *
     * default: false
     */
    track1Front?: boolean;
    /**
     * The front image of the card will be read in Base64 PNG format.
     *
     * default: false
     */
    frontImage?: boolean;
    /**
     * The back image of the card will be read in Base64 PNG format.
     *
     * default: false
     */
    backImage?: boolean;
    /**
     * Track 1 of Japanese cash transfer card will be read. In some countries this track is known as JIS I track 1 (8bits/char).
     *
     * default: false
     */
    track1JIS?: boolean;
    /**
     * Track 3 of Japanese cash transfer card will be read. In some countries this track is known as JIS I track 3 (8bits/char).
     *
     * default: false
     */
    track3JIS?: boolean;
    /**
     * Dynamic Digital Identification data of the magnetic stripe will be read.
     *
     * default: false
     */
    ddi?: boolean;
}
export interface CardReaderReadRawDataCommand extends CardReaderCommand<CardReaderCommandType.ReadRawData, ReadRawDataPayload> {
}
export declare enum ReadRawDataErrorCode {
    /** The card is jammed. Operator intervention is required. */
    MEDIA_JAM = "mediaJam",
    /** The open of the shutter failed due to manipulation or hardware error. Operator intervention is required. */
    SHUTTER_FAIL = "shutterFail",
    /**
     * The card was removed before completion of the read action (the event CardReader.MediaInsertedEvent has been generated). For motor driven devices, the read is disabled;
     * i.e. another command has to be issued to enable the reader for card entry.
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
/**
 * The status values applicable to all data sources.
 */
export declare enum CardReaderTrackStatus {
    /** The data is OK. */
    OK = "ok",
    /** The track/chip/memory chip is blank. */
    DATA_MISSING = "dataMissing",
    /** The data contained on the track/chip/memory chip is invalid. This will typically be returned when data reports badReadLevel or dataInvalid. */
    DATA_INVALID = "dataInvalid",
    /** The data contained on the track/chip/memory chip is too long. */
    DATA_TOO_LONG = "dataTooLong",
    /** The data contained on the track/chip/memory chip is too short. */
    DATA_TOO_SHORT = "dataTooShort",
    /** The data source to read from is not supported by the Service. */
    DATA_SOURCE_NOT_SUPPORTED = "dataSourceNotSupported",
    /**
     * The data source to read from is missing on the card, or is unable to be read due to a hardware problem, or the module has not been initialized.
     * For example, this will be returned on a request to read a Memory Card and the customer has entered a magnetic card without associated memory chip.
     * This will also be reported when data reports noData, notInitialized or hardwareError.
     * This will also be reported when the image reader could not create a BMP file due to the state of the image reader or due to a failure.
     */
    DATA_SOURCE_MISSING = "dataSourceMissing"
}
/**
 * Contains the data read from track.
 */
export interface CardReaderTrack {
    /** The status values applicable to all data sources {@link CardReaderTrackStatus} */
    status: CardReaderTrackStatus;
    /**
     * Base64 encoded representation of the data
     *
     * Property value constraints:
     *
     * pattern: ^[A-Za-z0-9+/]+={0,2}$
     * format: base64
     */
    data: string;
}
export declare enum CardReaderSecurityEnum {
    /** The security data readability level is 1. */
    READ_LEVEL_1 = "readLevel1",
    /** The security data readability level is 2. */
    READ_LEVEL_2 = "readLevel2",
    /** The security data readability level is 3. */
    READ_LEVEL_3 = "readLevel3",
    /** The security data readability level is 4. */
    READ_LEVEL_4 = "readLevel4",
    /** The security data readability level is 5. */
    READ_LEVEL_5 = "readLevel5",
    /** The security data reading quality is not acceptable. */
    BAD_READ_LEVEL = "badReadLevel",
    /** There are no security data on the card. */
    NO_DATA = "noData",
    /** The validation of the security data with the specific data on the magnetic stripe was not successful. */
    DATA_INVALID = "dataInvalid",
    /** The security module could not be used because of a hardware error. */
    HARDWARE_ERROR = "hardwareError",
    /** The security module could not be used because it was not initialized (e.g. CIM key is not loaded). */
    NOT_INITIALIZED = "notInitialized"
}
export interface CardReaderSecurity {
    /** @warning Xfs4Iot no espcífica valores para este campo, se supone que siempre va 'ok'? */
    status: 'ok';
    /**
     * The security data can be one of the following
     *
     * See {@link CardReaderSecurityEnum}
     */
    data: CardReaderSecurityEnum;
}
export declare enum CardReaderMemoryChipProtocolEnum {
    /** The card reader has used the T=0 protocol. */
    CHIP_T0 = "chipT0",
    /** The card reader has used the T=1 protocol. */
    CHIP_T1 = "chipT1",
    /** The card reader has used the ISO 14443 (Part3) Type A contactless chip card protocol. */
    CHIP_TYPE_A_PART3 = "chipTypeAPart3",
    /** The card reader has used the ISO 14443 (Part4) Type A contactless chip card protocol. */
    CHIP_TYPE_A_PART4 = "chipTypeAPart4",
    /** The card reader has used the ISO 14443 Type B contactless chip card protocol. */
    CHIP_TYPE_B = "chipTypeB",
    /** The card reader has used the ISO 18092 (106/212/424kbps) contactless chip card protocol. */
    CHIP_TYPE_NFC = "chipTypeNFC"
}
/** Memory Card Identification data read from the memory chip. */
export interface CardReaderMemoryChip {
    /** @warning Xfs4Iot no espcífica valores para este campo, se supone que siempre va 'ok'? */
    status: 'ok';
    /** Contains the data read from the memory chip in Base64. */
    data: string;
    /**
     * The memory card protocol used to communicate with the card.
     *
     * See {@link CardReaderMemoryChipProtocolEnum}
     */
    protocol: CardReaderMemoryChipProtocolEnum;
}
export interface CardReaderReadRawDataCompletionMessagePayload extends XfsCompletionMessagePayload<ReadRawDataErrorCode> {
    /** Contains the data read from track 1. See {@link CardReaderTrack}*/
    track1?: CardReaderTrack;
    /**
     * Contains the data read from track 2.
     *
     * See {@link CardReaderTrack}
     */
    track2?: CardReaderTrack;
    /**
     * Contains the data read from track 3.
     *
     * See {@link CardReaderTrack}
     */
    track3?: CardReaderTrack;
    /**
     * Contains the ATR data read from the chip. For contactless chip card readers, multiple identification information can be returned if the card reader detects more than one chip.
     * Each chip identification information is returned as an individual data array element.
     *
     * See {@link CardReaderTrack}
     */
    chip?: CardReaderTrack;
    /**
     * Contains the data returned by the security module.
     *
     * See {@link CardReaderSecurity}
     */
    security?: CardReaderSecurity;
    /**
     * Contains the data read from the Swedish Watermark track.
     *
     * See {@link CardReaderTrack}
     */
    watermark?: CardReaderTrack;
    /**
     * Memory Card Identification data read from the memory chip.
     *
     * See {@link CardReaderMemoryChip}
     */
    memoryChip?: CardReaderMemoryChip;
    /**
     * Contains the data read from the front track 1. In some countries this track is known as JIS II track.
     *
     * See {@link CardReaderMemoryChip}
     */
    track1Front?: CardReaderTrack;
    /**
     * Base64 encoded representation of the BMP image file for the front of the card.
     *
     * Property value constraints:
     *
     * pattern: ^[A-Za-z0-9+/]+={0,2}$
     * format: base64
     */
    frontImage?: string;
    /**
     * Base64 encoded representation of the BMP image file for the back of the card.
     *
     * Property value constraints:
     *
     * pattern: ^[A-Za-z0-9+/]+={0,2}$
     * format: base64
     */
    backImage?: string;
    /**
     * Contains the data read from JIS I track 1 (8bits/char).
     *
     * See {@link CardReaderMemoryChip}
     */
    track1JIS?: CardReaderTrack;
    /**
     * Contains the data read from JIS I track 3 (8bits/char).
     *
     * See {@link CardReaderMemoryChip}
     */
    track3JIS?: CardReaderTrack;
    /**
     * Contains the dynamic digital identification data read from magnetic stripe.
     *
     * See {@link CardReaderMemoryChip}
     */
    ddi?: CardReaderTrack;
}
export interface CardReaderReadRawDataCompletionMessage extends XfsCompletionMessage<CardReaderCommandType.ReadRawData, ReadRawDataErrorCode, CardReaderReadRawDataCompletionMessagePayload> {
}
