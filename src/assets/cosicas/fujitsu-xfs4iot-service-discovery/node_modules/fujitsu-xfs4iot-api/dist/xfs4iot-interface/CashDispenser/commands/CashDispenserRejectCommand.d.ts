import { CashDispenserCommand, CashDispenserCommandType } from '.';
import { XfsCompletionMessage, XfsCompletionMessagePayload } from '../../Core';
export interface RejectPayload {
    /**
     * Timeout in milliseconds for the command to complete. If set to 0, the command will not timeout but can be canceled.
     *
     * default: 0
     */
    timeout?: number;
}
export interface CashDispenserRejectCommand extends CashDispenserCommand<CashDispenserCommandType.Reject, RejectPayload> {
}
export declare enum RejectErrorCode {
    /** A storage unit caused a problem. A Storage.StorageErrorEvent will be posted with the details. */
    CASH_UNIT_ERROR = "cashUnitError",
    /** There were no items to reject. */
    NO_ITEMS = "noItems",
    /** The device is in an exchange state (see Storage.StartExchange). */
    EXCHANGE_ACTIVE = "exchangeActive"
}
export interface CashDispenserRejectCompletionMessagePayload extends XfsCompletionMessagePayload<RejectErrorCode> {
}
export interface CashDispenserRejectCompletionMessage extends XfsCompletionMessage<CashDispenserCommandType.Reject, RejectErrorCode, CashDispenserRejectCompletionMessagePayload> {
}
