"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardReaderCommandType = void 0;
var CardReaderCommandType;
(function (CardReaderCommandType) {
    /**
     * This command is used to retrieve the complete list of registration authority Interface Module (IFM) identifiers.
     * The primary registration authority is EMVCo but other organizations are also supported for historical or local country requirements.
     *
     * New registration authorities may be added in the future so applications should be able to handle the return of any additional properties included in ifmIDs.
     */
    CardReaderCommandType["QueryIFMIdentifier"] = "CardReader.QueryIFMIdentifier";
    /**
     * This command is used to retrieve the supported payment system applications available within an intelligent contactless card unit.
     * The payment system application can either be identified by an AID or by the AID in combination with a Kernel Identifier.
     * The Kernel Identifier has been introduced by the EMVCo specifications
     */
    CardReaderCommandType["EMVClessQueryApplications"] = "CardReader.EMVClessQueryApplications";
    /**
     * For motor driven card readers, the card unit checks whether a card has been inserted. If so, all specified tracks are
     * read immediately. If reading the chip is requested, the chip will be contacted and reset and the ATR (Answer To
     * Reset) data will be read. When this command completes the chip will be in contacted position. This command can
     * also be used for an explicit cold reset of a previously contacted chip.
     *
     * This command should only be used for user cards and should not be used for permanently connected chips.
     * If no card has been inserted, and for all other categories of card readers, the card unit waits for the period of time
     * specified in the call for a card to be either inserted or pulled through. The next step is trying to read all tracks
     * specified.
     *
     * The CardReader.InsertCardEvent will be generated when there is no card in the card reader and the device is ready
     * to accept a card. In addition to that, a security check via a security module (i.e. MM, CIM86) can be requested. If
     * the security check fails however this should not stop valid data being returned. The response securityFail will be
     * returned if the command specifies only security data to be read and the security check could not be executed, in all
     * other cases ok will be returned with the data field of the output set to the relevant value including hardwareError.
     * For non-motorized Card Readers which read track data on card exit, the invalidData error code is returned when a
     * call to this command is made to read both track data and chip data.
     *
     * If the card unit is a latched dip unit then the device will latch the card when the chip card will be read, i.e. chip is
     * specified (see below). The card will remain latched until a call to CardReader.Move is made.
     *
     * For contactless chip card readers a collision of two or more card signals may happen. In this case, if the device is
     * not able to pick the strongest signal, the cardCollision error will be returned.
     */
    CardReaderCommandType["ReadRawData"] = "CardReader.ReadRawData";
    /**
     * For motor-driven card readers, the ID card unit checks whether a card has been inserted. If so, the data is written to
     *   the tracks.
     *
     *   If no card has been inserted, and for all other categories of devices, the ID card unit waits for the application
     *   specified timeout for a card to be either inserted or pulled through. The next step is writing the data to the respective
     *   tracks.
     *
     *   The CardReader.InsertCardEvent event will be generated when there is no card in the card reader and the device is
     *   ready to accept a card.
     *
     *   The application must pass the magnetic stripe data in ASCII without any sentinels, encoded in Base64 (See
     *   CardReader.ReadRawData). If the data passed in is too long the invalidData error code will be returned.
     *
     *   This procedure is followed by data verification.
     *
     *   If power fails during a write the outcome of the operation will be vendor specific, there is no guarantee that the
     *   write will have succeeded.
     */
    CardReaderCommandType["WriteRawData"] = "CardReader.WriteRawData";
    /**
     * This command is only applicable to motorized and latched dip card readers.
     *
     * If after a successful completion event the card is at the exit position, the card will be accessible to the user. A CardReader.MediaRemovedEvent is generated to inform the application when the card is taken.
     *
     * Motorized card readers
     *
     * Motorized card readers can physically move cards from or to the transport or exit positions or a storage unit. The default operation is to move a card in the transport position to the exit position.
     *
     * If the card is being moved from the exit position to the exit position, these are valid behaviors:
     *
     * The card does not move as the card reader can detect the card is already in the correct position.
     * The card is moved back into the card reader then moved back to the exit to ensure the card is in the correct position.
     * Latched dip card readers
     *
     * Latched dips card readers can logically move cards from the transport position to the exit position by unlatching the card reader. That is, the card will not physically move but will be accessible to the user.
     */
    CardReaderCommandType["Move"] = "CardReader.Move";
    /**
     * This command is used for setting the DES key that is necessary for operating a CIM86 module. The command must be executed before the first read command is issued to the card reader.
     */
    CardReaderCommandType["SetKey"] = "CardReader.SetKey";
    /**
     * This command is used to communicate with the chip. Transparent data is sent from the application to the chip and the response of the chip is returned transparently to the application.
     *
     * The identification information e.g. ATR of the chip must be obtained before issuing this command.
     * The identification information for a user card or the Memory Card Identification (when available) must initially be obtained using CardReader.ReadRawData.
     * The identification information for subsequent resets of a user card can be obtained using either CardReader.ReadRawData or CardReader.ChipPower.
     * The ATR for permanent connected chips is always obtained through CardReader.ChipPower.
     *
     * For contactless chip card readers, applications need to specify which chip to contact with, as part of chipData, if more than one chip has been detected
     * and multiple identification data has been returned by the CardReader.ReadRawData command.
     *
     * For contactless chip card readers a collision of two or more card signals may happen. In this case, if the device is not able to pick the strongest signal, the cardCollision error code will be returned.
     */
    CardReaderCommandType["ChipIO"] = "CardReader.ChipIO";
    /**
     * This command is used by the client to perform a hardware reset which will attempt to return the card reader device to a known good state.
     *
     * If the device is a user card reader:
     *
     * Dependent on the command properties, the device will attempt to move a card in transport or exit positions to the exit or transport positions or a retain storage unit.
     *
     * For each card in the device (including parking storage units), a CardReader.MediaDetectedEvent will indicate the position or state of the card on completion of this command.
     *
     * Dependent on device state, it may not be possible to move a card.
     *
     * If the device is a permanent chip card unit, this command will power-off the chip.
     */
    CardReaderCommandType["Reset"] = "CardReader.Reset";
    /**
     * This command handles the power actions that can be done on the chip.
     *
     * For user chips, this command is only used after the chip has been contacted for the first time using the CardReader.ReadRawData command.
     * For contactless user chips, this command may be used to deactivate the contactless card communication.
     *
     * For permanently connected chip cards, this command is the only way to control the chip power.
     */
    CardReaderCommandType["ChipPower"] = "CardReader.ChipPower";
    /**
     * This command is used to configure an intelligent contactless card reader before performing a contactless transaction. This command sets terminal related data elements,
     * the list of terminal acceptable applications with associated application specific data and any encryption key data required for offline data authentication.
     *
     * This command should be used prior to CardReader.EMVClessPerformTransaction. It may be called once on application start up or when any of the configuration parameters require to be changed.
     * The configuration set by this command is persistent.
     *
     * This command should be called with a complete list of acceptable payment system applications as any previous configurations will be replaced.
     */
    CardReaderCommandType["EMVClessConfigure"] = "CardReader.EMVClessConfigure";
    /**
     * This command is used to enable an intelligent contactless card reader. The transaction will start as soon as the card tap is detected.
     *
     * Based on the configuration of the contactless chip card and the reader device, this command could return data formatted either as magnetic stripe information or as a set of BER-TLV encoded EMV tags.
     *
     * This command supports magnetic stripe emulation cards and EMV-like contactless cards but cannot be used on storage contactless cards. The latter must be managed using the CardReader.ReadRawData and CardReader.ChipIO commands.
     *
     * For specific payment system's card profiles an intelligent card reader could return a set of EMV tags along with magnetic stripe formatted data.
     * In this case, two contactless card data structures will be returned, one containing the magnetic stripe like data and one containing BER-TLV encoded tags.
     *
     * If no card has been tapped, the contactless chip card reader waits for the period of time specified in the command call for a card to be tapped.
     *
     * For intelligent contactless card readers, any in-built audio/visual feedback such as Beep/LEDs, need to be controlled directly by the reader.
     * These indications should be implemented based on the EMVCo and payment system's specifications.
     */
    CardReaderCommandType["EMVClessPerformTransaction"] = "CardReader.EMVClessPerformTransaction";
    /**
     * This command performs the post authorization processing on payment systems contactless cards.
     *
     * Before an online authorized transaction is considered complete, further chip processing may be requested by the issuer.
     * This is only required when the authorization response includes issuer update data; either issuer scripts or issuer authentication data.
     *
     * The command enables the contactless card reader and waits for the customer to re-tap their card.
     *
     * The contactless chip card reader waits for the period of time specified in the command request for a card to be tapped.
     */
    CardReaderCommandType["EMVClessIssuerUpdate"] = "CardReader.EMVClessIssuerUpdate";
})(CardReaderCommandType = exports.CardReaderCommandType || (exports.CardReaderCommandType = {}));
//# sourceMappingURL=CardReaderCommandType.js.map