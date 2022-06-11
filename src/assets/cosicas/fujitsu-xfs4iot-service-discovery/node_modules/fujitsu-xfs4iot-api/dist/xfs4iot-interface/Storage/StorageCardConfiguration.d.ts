export interface StorageCardConfiguration {
    /** The identifier that may be used to identify the type of cards in the storage unit. This is only applicable to dispense type storage units. */
    cardID?: string;
    /**
     * If the threshold value is non zero, hardware sensors in the storage unit do not trigger Storage.StorageThresholdEvent events.
     *
     * If non zero, when count reaches the threshold value:
     *
     * For retain type storage units, a high threshold will be sent.
     * For dispense type storage units, a low threshold will be sent.
     * Property value constraints:
     *
     * minimum: 0
     */
    threshold?: number;
}
