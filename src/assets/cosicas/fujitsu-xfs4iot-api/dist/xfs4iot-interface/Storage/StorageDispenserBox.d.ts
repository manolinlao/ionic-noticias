export interface StorageDispenserBox {
    /**
     * Count of genuine cash items which are fit for recycling.
     */
    fit?: number;
    /**
     * Count of genuine cash items which are unfit for recycling.
     */
    unfit?: number;
    /**
     * Count of suspected counterfeit cash items.
     */
    suspect?: number;
    /**
     * Count of counterfeit cash items.
     */
    counterfeit?: number;
    /**
     * Count of cash items which have been identified as ink stained.
     */
    inked?: number;
}
