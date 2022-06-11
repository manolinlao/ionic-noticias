"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardReaderMemoryChipProtocolEnum = exports.CardReaderSecurityEnum = exports.CardReaderTrackStatus = exports.ReadRawDataErrorCode = void 0;
var ReadRawDataErrorCode;
(function (ReadRawDataErrorCode) {
    /** The card is jammed. Operator intervention is required. */
    ReadRawDataErrorCode["MEDIA_JAM"] = "mediaJam";
    /** The open of the shutter failed due to manipulation or hardware error. Operator intervention is required. */
    ReadRawDataErrorCode["SHUTTER_FAIL"] = "shutterFail";
    /**
     * The card was removed before completion of the read action (the event CardReader.MediaInsertedEvent has been generated). For motor driven devices, the read is disabled;
     * i.e. another command has to be issued to enable the reader for card entry.
     */
    ReadRawDataErrorCode["NO_MEDIA"] = "noMedia";
    /** No track or chip found; card may have been inserted or pulled through the wrong way. */
    ReadRawDataErrorCode["INVALID_MEDIA"] = "invalidMedia";
    /** The card that was inserted is too short. When this error occurs the card remains at the exit slot. */
    ReadRawDataErrorCode["CARD_TOO_SHORT"] = "cardTooShort";
    /** The card that was inserted is too long. When this error occurs the card remains at the exit slot. */
    ReadRawDataErrorCode["CARD_TOO_LONG"] = "cardTooLong";
    /** The security module failed reading the cards security sign. */
    ReadRawDataErrorCode["SECURITY_FAIL"] = "securityFail";
    /** There was an unresolved collision of two or more contactless card signals. */
    ReadRawDataErrorCode["CARD_COLLISION"] = "cardCollision";
})(ReadRawDataErrorCode = exports.ReadRawDataErrorCode || (exports.ReadRawDataErrorCode = {}));
/**
 * The status values applicable to all data sources.
 */
var CardReaderTrackStatus;
(function (CardReaderTrackStatus) {
    /** The data is OK. */
    CardReaderTrackStatus["OK"] = "ok";
    /** The track/chip/memory chip is blank. */
    CardReaderTrackStatus["DATA_MISSING"] = "dataMissing";
    /** The data contained on the track/chip/memory chip is invalid. This will typically be returned when data reports badReadLevel or dataInvalid. */
    CardReaderTrackStatus["DATA_INVALID"] = "dataInvalid";
    /** The data contained on the track/chip/memory chip is too long. */
    CardReaderTrackStatus["DATA_TOO_LONG"] = "dataTooLong";
    /** The data contained on the track/chip/memory chip is too short. */
    CardReaderTrackStatus["DATA_TOO_SHORT"] = "dataTooShort";
    /** The data source to read from is not supported by the Service. */
    CardReaderTrackStatus["DATA_SOURCE_NOT_SUPPORTED"] = "dataSourceNotSupported";
    /**
     * The data source to read from is missing on the card, or is unable to be read due to a hardware problem, or the module has not been initialized.
     * For example, this will be returned on a request to read a Memory Card and the customer has entered a magnetic card without associated memory chip.
     * This will also be reported when data reports noData, notInitialized or hardwareError.
     * This will also be reported when the image reader could not create a BMP file due to the state of the image reader or due to a failure.
     */
    CardReaderTrackStatus["DATA_SOURCE_MISSING"] = "dataSourceMissing";
})(CardReaderTrackStatus = exports.CardReaderTrackStatus || (exports.CardReaderTrackStatus = {}));
var CardReaderSecurityEnum;
(function (CardReaderSecurityEnum) {
    /** The security data readability level is 1. */
    CardReaderSecurityEnum["READ_LEVEL_1"] = "readLevel1";
    /** The security data readability level is 2. */
    CardReaderSecurityEnum["READ_LEVEL_2"] = "readLevel2";
    /** The security data readability level is 3. */
    CardReaderSecurityEnum["READ_LEVEL_3"] = "readLevel3";
    /** The security data readability level is 4. */
    CardReaderSecurityEnum["READ_LEVEL_4"] = "readLevel4";
    /** The security data readability level is 5. */
    CardReaderSecurityEnum["READ_LEVEL_5"] = "readLevel5";
    /** The security data reading quality is not acceptable. */
    CardReaderSecurityEnum["BAD_READ_LEVEL"] = "badReadLevel";
    /** There are no security data on the card. */
    CardReaderSecurityEnum["NO_DATA"] = "noData";
    /** The validation of the security data with the specific data on the magnetic stripe was not successful. */
    CardReaderSecurityEnum["DATA_INVALID"] = "dataInvalid";
    /** The security module could not be used because of a hardware error. */
    CardReaderSecurityEnum["HARDWARE_ERROR"] = "hardwareError";
    /** The security module could not be used because it was not initialized (e.g. CIM key is not loaded). */
    CardReaderSecurityEnum["NOT_INITIALIZED"] = "notInitialized";
})(CardReaderSecurityEnum = exports.CardReaderSecurityEnum || (exports.CardReaderSecurityEnum = {}));
var CardReaderMemoryChipProtocolEnum;
(function (CardReaderMemoryChipProtocolEnum) {
    /** The card reader has used the T=0 protocol. */
    CardReaderMemoryChipProtocolEnum["CHIP_T0"] = "chipT0";
    /** The card reader has used the T=1 protocol. */
    CardReaderMemoryChipProtocolEnum["CHIP_T1"] = "chipT1";
    /** The card reader has used the ISO 14443 (Part3) Type A contactless chip card protocol. */
    CardReaderMemoryChipProtocolEnum["CHIP_TYPE_A_PART3"] = "chipTypeAPart3";
    /** The card reader has used the ISO 14443 (Part4) Type A contactless chip card protocol. */
    CardReaderMemoryChipProtocolEnum["CHIP_TYPE_A_PART4"] = "chipTypeAPart4";
    /** The card reader has used the ISO 14443 Type B contactless chip card protocol. */
    CardReaderMemoryChipProtocolEnum["CHIP_TYPE_B"] = "chipTypeB";
    /** The card reader has used the ISO 18092 (106/212/424kbps) contactless chip card protocol. */
    CardReaderMemoryChipProtocolEnum["CHIP_TYPE_NFC"] = "chipTypeNFC";
})(CardReaderMemoryChipProtocolEnum = exports.CardReaderMemoryChipProtocolEnum || (exports.CardReaderMemoryChipProtocolEnum = {}));
//# sourceMappingURL=CardReaderReadRawDataCommand.js.map