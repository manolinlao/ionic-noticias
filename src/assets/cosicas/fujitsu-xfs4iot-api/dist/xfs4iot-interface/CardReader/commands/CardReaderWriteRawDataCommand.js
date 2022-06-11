"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WriteRawDataErrorCode = exports.WriteRawDataPayloadWriteMethodEnum = exports.WriteRawDataPayloadDestinationEnum = void 0;
var WriteRawDataPayloadDestinationEnum;
(function (WriteRawDataPayloadDestinationEnum) {
    /** data is to be written to track 1 */
    WriteRawDataPayloadDestinationEnum["TRACK1"] = "track1";
    /** data is to be written to track 2 */
    WriteRawDataPayloadDestinationEnum["TRACK2"] = "track2";
    /** data is to be written to track 3 */
    WriteRawDataPayloadDestinationEnum["TRACK3"] = "track3";
    /** data is to be written to the front track 1. In some countries this track is known as JIS II track. */
    WriteRawDataPayloadDestinationEnum["TRACK1_FRONT"] = "track1Front";
    /** data is to be written to JIS I track 1 (8bits/char) */
    WriteRawDataPayloadDestinationEnum["TRACK1_JIS"] = "track1JIS";
    /** data is to be written to JIS I track 3 (8bits/char) */
    WriteRawDataPayloadDestinationEnum["TRACK3_JIS"] = "track3JIS";
})(WriteRawDataPayloadDestinationEnum = exports.WriteRawDataPayloadDestinationEnum || (exports.WriteRawDataPayloadDestinationEnum = {}));
var WriteRawDataPayloadWriteMethodEnum;
(function (WriteRawDataPayloadWriteMethodEnum) {
    /** Write using low coercivity. */
    WriteRawDataPayloadWriteMethodEnum["LOW_COERCIVITY"] = "loco";
    /** Write using high coercivity. */
    WriteRawDataPayloadWriteMethodEnum["HIGH_COERCIVITY"] = "high";
    /** Service will determine whether low or high coercivity is to be used. */
    WriteRawDataPayloadWriteMethodEnum["AUTO"] = "auto";
})(WriteRawDataPayloadWriteMethodEnum = exports.WriteRawDataPayloadWriteMethodEnum || (exports.WriteRawDataPayloadWriteMethodEnum = {}));
var WriteRawDataErrorCode;
(function (WriteRawDataErrorCode) {
    /** The card is jammed. Operator intervention is required. */
    WriteRawDataErrorCode["MEDIA_JAM"] = "mediaJam";
    /** The open of the shutter failed due to manipulation or hardware error. Operator intervention is required. */
    WriteRawDataErrorCode["SHUTTER_FAIL"] = "shutterFail";
    /**
     * The card was removed before completion of the read action (the event CardReader.MediaInsertedEvent has been generated).
     * For motor driven devices, the read is disabled; i.e. another command has to be issued to enable the reader for card entry.
     */
    WriteRawDataErrorCode["NO_MEDIA"] = "noMedia";
    /** No track or chip found; card may have been inserted or pulled through the wrong way. */
    WriteRawDataErrorCode["INVALID_MEDIA"] = "invalidMedia";
    /** The card that was inserted is too short. When this error occurs the card remains at the exit slot. */
    WriteRawDataErrorCode["CARD_TOO_SHORT"] = "cardTooShort";
    /** The card that was inserted is too long. When this error occurs the card remains at the exit slot. */
    WriteRawDataErrorCode["CARD_TOO_LONG"] = "cardTooLong";
    /** The security module failed reading the cards security sign. */
    WriteRawDataErrorCode["SECURITY_FAIL"] = "securityFail";
    /** There was an unresolved collision of two or more contactless card signals. */
    WriteRawDataErrorCode["CARD_COLLISION"] = "cardCollision";
})(WriteRawDataErrorCode = exports.WriteRawDataErrorCode || (exports.WriteRawDataErrorCode = {}));
//# sourceMappingURL=CardReaderWriteRawDataCommand.js.map