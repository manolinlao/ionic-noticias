import { CashDispenserCommand, CashDispenserCommandType } from '.';
import { XfsCompletionMessage, XfsCompletionMessagePayload } from '../../Core';
export declare enum PrepareDispenseActionEnum {
    /** Initiates the action to prepare for the next dispense command. This command does not wait until the device is ready to dispense before returning a completion event, it completes as soon as the preparation has been initiated. */
    START = "start",
    /** Stops the previously activated dispense preparation. For example the motor of the transport will be stopped. This should be used if for some reason the subsequent dispense operation is no longer required. */
    STOP = "stop"
}
export interface PrepareDispensePayload {
    /**
     * Timeout in milliseconds for the command to complete. If set to 0, the command will not timeout but can be canceled.
     *
     * default: 0
     */
    timeout?: number;
    /**
     * A value specifying the type of actions.
     *
     * See {@link PrepareDispenseActionEnum}
     */
    action?: PrepareDispenseActionEnum;
}
export interface CashDispenserPrepareDispenseCommand extends CashDispenserCommand<CashDispenserCommandType.PrepareDispense, PrepareDispensePayload> {
}
export interface CashDispenserPrepareDispenseCompletionMessagePayload extends XfsCompletionMessagePayload<{}> {
}
export interface CashDispenserPrepareDispenseCompletionMessage extends XfsCompletionMessage<CashDispenserCommandType.PrepareDispense, {}, CashDispenserPrepareDispenseCompletionMessagePayload> {
}
