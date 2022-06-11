export interface StorageItems {
    /** The storage unit can store cash items which are fit for recycling. */
    fit?: boolean;
    /** The storage unit can store cash items which are unfit for recycling. */
    unfit?: boolean;
    /** The storage unit can store unrecognized cash items. */
    unrecognized?: boolean;
    /** The storage unit can store counterfeit cash items. */
    counterfeit?: boolean;
    /** The storage unit can store suspect counterfeit cash items. */
    suspect?: boolean;
    /** The storage unit can store cash items which have been identified as ink stained. */
    inked?: boolean;
    /** Storage unit containing coupons or advertising material. */
    coupon?: boolean;
    /** Storage unit containing documents. */
    document?: boolean;
}
