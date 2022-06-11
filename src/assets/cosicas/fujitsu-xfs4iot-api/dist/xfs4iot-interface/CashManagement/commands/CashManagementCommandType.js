"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashManagementCommandType = void 0;
var CashManagementCommandType;
(function (CashManagementCommandType) {
    /**
     * This command is used to obtain information about the banknote types that can be detected by the banknote reader
     * or are supported by the configuration.
     */
    CashManagementCommandType["GetBankNoteTypes"] = "CashManagement.GetBankNoteTypes";
    /**
     * This command only applies to Teller devices. It allows the application to obtain counts for each currency assigned
     * to the teller. These counts represent the total amount of currency dispensed by the teller in all transactions.
     *
     * This command also enables the application to obtain the position assigned to each teller. The teller information is
     * persistent
     */
    CashManagementCommandType["GetTellerInfo"] = "CashManagement.GetTellerInfo";
    /**
     * This command allows the application to initialize counts for each currency assigned to the teller. The values set by
     * this command are persistent. This command only applies to Teller ATMs.
     */
    CashManagementCommandType["SetTellerInfo"] = "CashManagement.SetTellerInfo";
    /**
     * This command is used to get information about detected items. It can be used to get information about individual
     * items, all items of a certain classification, or all items that have information available. This information is available
     * from the point where the first CashManagement.InfoAvailableEvent is generated until a transaction or
     * replenishment command is executed including the following:
     *      • CashAcceptor.CashInStart
     *      • CashAcceptor.CashIn
     *      • CashAcceptor.CashInEnd
     *      • CashAcceptor.CashInRollback
     *      • CashAcceptor.CreateSignature
     *      • CashAcceptor.Replenish
     *      • CashAcceptor.CashUnitCount
     *      • CashAcceptor.Deplete
     *      • CashManagement.Retract
     *      • CashManagement.Reset
     *      • CashManagement.OpenShutter
     *      • CashManagement.CloseShutter
     *      • CashManagement.CalibrateCashUnit
     *      • CashDispenser.Dispense
     *      • CashDispenser.Present
     *      • CashDispenser.Reject
     *      • CashDispenser.Count
     *      • CashDispenser.TestCashUnits
     *      • Storage.StartExchange
     *      • Storage.EndExchange
     * In addition, since the item information is not cumulative and can be replaced by any command that can move notes,
     * it is recommended that applications that are interested in the available information should query for it following the
     * CashManagement.InfoAvailab  leEvent but before any other command is executed.
     */
    CashManagementCommandType["GetItemInfo"] = "CashManagement.GetItemInfo";
    /**
     * This command is used to retrieve the entire note classification information pre-set inside the device or set via the
     * CashManagement.SetClassificationList command. This provides the functionality to blacklist notes and allows
     * additional flexibility, for example to specify that notes can be taken out of circulation by specifying them as unfit.
     * Any items not returned in this list will be handled according to normal classification rules.
     */
    CashManagementCommandType["GetClassificationList"] = "CashManagement.GetClassificationList";
    /**
     * This command is used to specify the entire note classification list. Any items not specified in this list will be
     * handled according to normal classification rules. This information is persistent. Information set by this command
     * overrides any existing classification list. If a note is reclassified, it is handled as though it was a note of the new
     * classification. For example, a fit note reclassified as unfit would be treated as though it were unfit, which may mean
     * that the note is not dispensed. Reclassification cannot be used to change a note’s classification to a higher level, for
     * example, a note recognized as counterfeit by the device cannot be reclassified as genuine. In addition, it is not
     * possible to re-classify a counterfeit note as unrecognized. If two or more classification elements specify overlapping
     * note definitions, but different level values then the first one takes priority.
     */
    CashManagementCommandType["SetClassificationList"] = "CashManagement.SetClassificationList";
    /**
     * This command closes the shutter.
     */
    CashManagementCommandType["CloseShutter"] = "CashManagement.CloseShutter";
    /**
     * This command opens the shutter.
     * In cases where multiple bunches are to be returned under explicit shutter control and the first bunch has already
     * been presented and taken and the output position is empty, this command moves the next bunch to the output
     * position before opening the shutter. This does not apply if the output position is not empty, for example if items had
     * been re-inserted or dropped back into the output position as the shutter closed.
     */
    CashManagementCommandType["OpenShutter"] = "CashManagement.OpenShutter";
    /**
     * This command retracts items from an output position or internal areas within the device. Retracted items will be
     * moved to either a retract bin, a reject bin, cash-in/recycle storage units, the transport or an intermediate stacker area.
     * If items from internal areas within the device are preventing items at an output position from being retracted then
     * the items from the internal areas will be retracted first. When the items are retracted from an output position the
     * shutter is closed automatically, even if shutterControl is false.
     * This command terminates a running cash-in transaction. The cash-in transaction is terminated even if this command
     * does not complete successfully.
     */
    CashManagementCommandType["Retract"] = "CashManagement.Retract";
    /**
     * This command is used by the application to perform a hardware reset which will attempt to return the device to a
     * known good state. This command does not override a lock obtained on another application or connection.
     * If a cash-in transaction is active or exchange is active then this command will end the transaction or exchange state
     * as appropriate, even if this command does not complete successfully.
     *
     * Persistent values, such as counts and configuration information are not cleared by this command.
     *
     * The device will attempt to move any items found anywhere within the device to the position specified within the
     * command parameters. This may not always be possible because of hardware problems. If the application does not
     * wish to specify a storage unit or position it can leave the command payload empty. In this case the Device will
     * determine where to move any items found.
     *
     * If items are found inside the device one or more CashManagement.MediaDetectedEvents will be generated to
     * inform the application where the items have actually been moved to.
     *
     * The shutterControl property will determine whether the shutter is controlled implicitly by this command or whether
     * the application must explicitly open and close the shutter using the CashManagement.OpenShutter,
     * CashManagement.CloseShutter or CashAcceptor.PresentMedia commands. If shutterControl is false then this
     * command does not operate the shutter in any way, the application is responsible for all shutter control. If
     * shutterControl is true then this command operates the shutter as necessary so that the shutter is closed after the
     * command completes successfully and any items returned to the customer have been removed.
     *
     * The presentControl property will determine whether or not it is necessary to call the CashAcceptor.PresentMedia
     * command in order to move items to the output position. If presentControl is true then all items are moved
     * immediately to the correct output position for removal (a CashManagement.OpenShutter command will be needed
     * in the case of explicit shutter control). If presentControl is false then items are not returned immediately and must
     * be presented to the correct output position for removal using the CashAcceptor.PresentMedia command.
     *
     * If requested, items are returned in a single bunch or multiple bunches in the same way as described for the
     * CashAcceptor.CashIn command.
     */
    CashManagementCommandType["Reset"] = "CashManagement.Reset";
    /**
     * This command unlocks the safe door or starts the time delay count down prior to unlocking the safe door, if the
     * device supports it. The command completes when the door is unlocked or the timer has started.
     */
    CashManagementCommandType["OpenSafeDoor"] = "CashManagement.OpenSafeDoor";
    /**
     * This command will cause a vendor dependent sequence of hardware events which will calibrate one storage unit.
     * This is necessary if a new type of bank note is put into the storage unit as the command enables the device to obtain
     * the measures of the new bank notes.
     * This command cannot be used to calibrate storage units which have been locked by the application. An error code
     * will be returned and a Storage.StorageErrorEvent generated
     */
    CashManagementCommandType["CalibrateCashUnit"] = "CashManagement.CalibrateCashUnit";
})(CashManagementCommandType = exports.CashManagementCommandType || (exports.CashManagementCommandType = {}));
//# sourceMappingURL=CashManagementCommandType.js.map