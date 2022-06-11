"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMVCoValueQualifierEnum = exports.EMVCoStatusValueEnum = void 0;
/** Represents the EMVCo defined transaction status value to be indicated through the Beep/LEDs as one of the following: */
var EMVCoStatusValueEnum;
(function (EMVCoStatusValueEnum) {
    /** Contactless card reader is not able to communicate with a card. This status occurs towards the end of a contactless transaction or if the reader is not powered on. */
    EMVCoStatusValueEnum["NOT_READY"] = "notReady";
    /** Contactless card reader is powered on, but the reader field is not yet active for communication with a card. */
    EMVCoStatusValueEnum["IDLE"] = "idle";
    /** Contactless card reader is powered on and attempting to initiate communication with a card. */
    EMVCoStatusValueEnum["READY_TO_READ"] = "readyToRead";
    /** Contactless card reader is in the process of reading the card. */
    EMVCoStatusValueEnum["PROCESSING"] = "processing";
    /** Contactless card reader was able to read a card successfully. */
    EMVCoStatusValueEnum["CARD_READ_OK"] = "cardReadOk";
    /** Contactless card reader was not able to process the card successfully. */
    EMVCoStatusValueEnum["PROCESSING_ERROR"] = "processingError";
})(EMVCoStatusValueEnum = exports.EMVCoStatusValueEnum || (exports.EMVCoStatusValueEnum = {}));
/**
 * Qualifies value. This data is defined by EMVCo as one of the following. If neither apply, this field and value are omitted:
 */
var EMVCoValueQualifierEnum;
(function (EMVCoValueQualifierEnum) {
    EMVCoValueQualifierEnum["AMOUNT"] = "amount";
    EMVCoValueQualifierEnum["BALANCE"] = "balance";
})(EMVCoValueQualifierEnum = exports.EMVCoValueQualifierEnum || (exports.EMVCoValueQualifierEnum = {}));
//# sourceMappingURL=CardReaderEMVClessReadStatusEvent.js.map