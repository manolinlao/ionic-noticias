export interface StorageCashTypes {
    /** The unit can accept cash items. If cashOut is also true then the unit can recycle. */
    cashIn?: boolean;
    /** The unit can dispense cash items. If cashIn is also true then the unit can recycle. */
    cashOut?: boolean;
    /** Replenishment container. A storage unit can be refilled from or emptied to a replenishment container. */
    replenishment?: boolean;
    /** Retract unit. Items can be retracted into this unit during Cash In operations. */
    cashInRetract?: boolean;
    /** Retract unit. Items can be retracted into this unit during Cash Out operations. */
    cashOutRetract?: boolean;
    /** Reject unit. Items can be rejected into this unit. */
    reject?: boolean;
}
