export declare enum CashDispenserCommandType {
    /**
     * This command is used to obtain a list of supported mix algorithms and available house mix tables.
     */
    GetMixTypes = "CashDispenser.GetMixTypes",
    /**
     * This command is used to obtain the specified house mix table. Mix tables can be set using CashDispenser.SetMixTable.
     */
    GetMixTable = "CashDispenser.GetMixTable",
    /**
     * This command is used to obtain the status of the most recent attempt to dispense and/or present items to the customer from a specified output position.
     * The items may have been dispensed and/or presented as a result of the CashDispenser.Present or CashDispenser.Dispense command. This status is not updated as a result of any other command that can dispense/present items.
     *
     * This value is persistent and is valid until the next time an attempt is made to present or dispense items to the customer, including across power cycles.
     *
     * The denominations reported by this command may not accurately reflect the operation if the storage units have been re-configured, e.g., if the values associated with a storage unit are changed, or new storage units are configured.
     *
     * If end-to-end security is supported then this value is not cleared if a CashDispenser.Dispense with an invalid token is received.
     * If a dispense token is invalid the dispense will fail with an invalidToken error, and the command will continue to report the existing status.
     * This is to stop an attacker being able to reset the present status and conceal the last present result.
     *
     * If end-to-end security is supported by the hardware, the present status will be protected by a security token.
     * If end-to-end security is not supported then it's not possible to guarantee that the present status hasn't been altered, possibly by an attacker trying to hide the fact that cash was presented.
     * To avoid this risk the client must always call this command and validate the security token.
     *
     * If end-to-end security is being used the caller must pass in a nonce value. This value will be included in the security token that is returned.
     * The caller must check that the original nonce value matches the token - if they do not match then the token is invalid.
     */
    GetPresentStatus = "CashDispenser.GetPresentStatus",
    /**
     * This command provides a denomination which specifies the number of items which are required from each storage unit in order to
     * satisfy a given request and can be used to validate that any request supplied by the application can be dispensed.
     *
     * The request may contain the following items:
     *      The amount of each currency to be included in the denomination (currencies).
     *      The number of items which must be included from individual storage units (counts).
     *      If the Service is to calculate a denomination, the method (algorithm or table) by which the denomination is to be calculated (mix).
     *
     * If the request contains currencies, the denomination is calculated as follows:
     *      If counts are specified, these are validated against currencies for consistency.
     *      If the total amount specified by counts is greater than the amount specified by currencies, an error is returned.
     *      If the total amount specified by counts is less than specified by currencies, this is defined as a partial denomination
     *      where a calculated denomination must contain at least the items specified by counts.
     *      The additional items needed to create the denomination are calculated using mix, taking the number of items and availability of each storage unit into account.
     *      If the total amount specified by counts is equal to the amount specified by currencies, the number of items and availability of each requested storage unit is taken into account.
     *
     * If the request does not contain currencies, counts is validated against the number of items and availability of each requested storage unit.
     *
     * If cashBox is true, then if the entire request cannot be satisfied, the denomination will include an amount to be supplied from the teller's cash box.
     */
    Denominate = "CashDispenser.Denominate",
    /**
     * This command performs the dispensing of items to the customer. The command provides the same functionality as the CashDispenser.
     * Denominate command plus the additional functionality of dispensing the items. If items of differing currencies are to be dispensed then the currencies array has one entry per currency.
     * Alternatively the currency information can be omitted and the mix must be mixIndividual. However, these restrictions do not apply if a single currency is dispensed with non-currency items, such as coupons.
     *
     * The command can be used in the following ways:
     *      The input parameters to the command are amounts, currencies and denomination. The mix is mixIndividual. In this case, the denomination is checked for validity and, if valid, is dispensed.
     *      The input parameters are amounts, currencies and a mix algorithm or table. In this case the amount is denominated and, if this succeeds, the items are dispensed.
     *      If the amount and currency information is omitted and a denomination is supplied with a mix of mixIndividual, the denomination is checked for validity and, if valid, is dispensed.
     *      The command will calculate a partial denomination of a given amount and dispense the complete denomination.
     * In this case the input parameters to the command should be currencies, amounts, mix and either a partially specified denomination or a minimum amount from the cash box.
     * The cash box amount may be updated as a result of this command.
     *
     * If cashBox is true and the entire denomination cannot be satisfied, a partial denomination will be returned with the remaining amount to be supplied from the teller's cash box.
     *
     * The process of dispensing and presenting cash may be protected by end-to-end security.
     * This means that the hardware will generate a command nonce (returned by Common.GetCommandNonce) and the caller must use this to create a security token that authorizes dispensing the cash.
     *
     * It is possible to do multiple dispense and present operations in a row using the same dispense token, as long as the total value of cash doesn't exceed the value authorized by the token.
     *
     * The device will track the command nonce and E2E token used during dispense operations.
     * Only one token can be used with the current nonce - once a dispense command is called with a token then that token will be remembered,
     * and it will not be possible to perform a dispense command with a different token until the original nonce and token are cleared.
     *
     * The device will track the total value of cash that has been dispensed and presented using the current token. The device will block any attempt to dispense or present more cash than authorized by the current token.
     *
     * Once the value of cash that has been dispensed and presented reaches the value of the token, the command nonce stored in the device will be cleared.
     * This has the effect of making any existing tokens invalid so that they can't be used again. No more cash can be dispensed until a new command nonce is read and a new token is generated.
     * The command nonce may be cleared for other reasons too, for example after a power failure or after a fixed time. Any tokens using the old command nonce value will become invalid when the command nonce is cleared.
     */
    Dispense = "CashDispenser.Dispense",
    /**
     * This command will move items to the exit position for removal by the user. If a shutter exists, then it will be implicitly controlled during the present operation, even if shutterControl is false.
     * The shutter will be closed when the user removes the items or the items are retracted. If the default position is specified the position set in the CashDispenser.Dispense command which caused these items to be dispensed will be used.
     *
     * When this command successfully completes the items are in customer access.
     *
     *  If the previous CashDispenser.Dispense command specified that the amount has to be presented in multiple bunches, the completion message includes details about remaining bunches.
     * The additionalBunches property specifies whether there are any additional bunches to be dispensed to the customer and the number of outstanding present operations.
     * On the last present operation additionalBunches is set to "0" or omitted.
     *
     * If the dispense operation is protected by end-to-end security then the device will track the total value of cash presented.
     * Once the value of cash that has been dispensed and presented reaches the value of the token, the command nonce stored in the device will be cleared.
     * This has the effect of making any existing tokens invalid so that they can't be used again. No more cash can be dispensed until a new command nonce is read and a new token is generated.
     */
    Present = "CashDispenser.Present",
    /**
     * This command will move items from the intermediate stacker to a reject storage unit.
     * The storage unit's counts are incremented by the number of items that were or were thought to be present at the time of the Reject or the number counted by the device during the Reject.
     * Note that the Reject storage unit counts may be unreliable.
     */
    Reject = "CashDispenser.Reject",
    /**
     * This command is used to set up the mix table specified by the mixNumber.
     * Mix tables are persistent and are available to all applications in CashDispenser.Dispense and CashDispenser.Denominate commands.
     * If mix table specified by the mixNumber already exists then the information is overwritten with the new information.
     *
     * A mix specifies how a given requested amount is composed of a set of cash items,
     * for example USD 100 could be 5 x USD 20 or 10 x USD 10. A mix table specifies multiple mixes.
     * An amount can be specified multiple times to include different combinations of cash items,
     * if an amount is specified more than once the Service will attempt to denominate or dispense the first amount in the table.
     * If this mix is not possible (e.g., because of a storage unit failure) the Service will search for the first mix which is possible.
     * The Service can only dispense amounts which are explicitly mentioned in the mix table.
     *
     * Available mixes are reported by CashDispenser.GetMixTypes and the details of a stored mix table can be queried using CashDispenser.GetMixTable.
     */
    SetMixTable = "CashDispenser.SetMixTable",
    /**
     * This command is used to test cash dispense storage units following replenishment.
     * The command payload specifies where items dispensed as a result of this command should be moved to.
     * The operation performed to test the storage units is vendor dependent.
     * All storage units which match the following criteria are tested.
     *       cashOut is true
     *       status is ok
     *       replenishmentStatus is not empty
     *       appLockOut is false
     *
     * If the hardware is able to do so tests are continued even if an error occurs while testing one of the storage units.
     * The command completes with success completion message if the Service successfully manages to test all of the testable cash units regardless of the outcome of the test.
     * This is the case if all testable storage units could be tested and a dispense was possible from at least one of the storage units.
     * A Storage.StorageErrorEvent will be sent for any cashOut unit which cannot be tested or which failed the test.
     * If no storage units could be tested or no storage units are testable then a cashUnitError code will be returned and Storage.StorageErrorEvent events generated for every storage unit that encountered a problem.
     */
    TestCashUnits = "CashDispenser.TestCashUnits",
    /**
     * This command empties the specified storage unit(s). All items dispensed from the unit are counted and moved to the specified output location.
     * The number of items counted can be different from the number of items dispensed in cases where the Dispenser has the ability to detect this information.
     * If the Dispenser cannot differentiate between what is dispensed and what is counted then dispensed will be the same as counted.
     * Upon successful command execution the storage unit(s) counts are reset.
     */
    Count = "CashDispenser.Count",
    /**
     * On some hardware it can take a significant amount of time for the CashDispenser to get ready to dispense media. On this type of hardware this command can be used to improve transaction performance.
     * If this command is supported then applications can help to improve the time taken to dispense media by issuing this command as soon as the application knows that a dispense is likely to happen.
     * This command either prepares the device for the next dispense operation or terminates the dispense preparation if the subsequent dispense operation is no longer required.
     * With the exception of the CashDispenser.Denominate and CashDispenser.Dispense commands, which will not stop the dispense preparation,
     * any mechanical command on CashDispenser or CashAcceptor will automatically stop the dispense preparation.
     * If this command is executed and the device is already in the specified action state, then this execution will have no effect and will complete with a successful completion message.
     */
    PrepareDispense = "CashDispenser.PrepareDispense"
}
