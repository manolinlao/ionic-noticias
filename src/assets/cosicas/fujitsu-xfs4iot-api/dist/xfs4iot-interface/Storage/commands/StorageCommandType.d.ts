export declare enum StorageCommandType {
    /**
     * This command is used to obtain information regarding the status, capabilities and contents of storage units. The capabilities of the storage unit can be used to dynamically configure the storage unit using Storage.SetStorage.
     */
    GetStorage = "Storage.GetStorage",
    /**
     * This command is used to adjust information about the configuration and contents of the device's storage units.
     * Only fields that are to be changed need to be set in the payload of this command; values that are not meant to change can be omitted.
     *
     * This command generates the Storage.StorageChangedEvent to inform applications that storage unit information has been changed.
     *
     * Only a subset of the information reported by Storage.GetStorage may be modified by this command therefore the payload is a subset of the GetStorage output.
     * In addition, if the service supports an exchange state, only a subset of the information which may be modified by this command can be modified unless the service is in an exchange state.
     * The descriptions of each field list which can be modified at any point using this command; any other changes must be performed while in an exchange state.
     *
     * The values set by this command are persistent.
     */
    SetStorage = "Storage.SetStorage",
    /**
     * This command puts the device in an exchange state, i.e. a state in which storage units can be emptied, replenished, removed or replaced.
     * The command will initiate any physical processes which may be necessary to make the storage units accessible. If this command returns a successful completion the device is in an exchange state.
     *
     * The current exchange state is reported by exchange and any change of state is marked by a Common.StatusChangedEvent.
     *
     * While in the exchange state:
     *
     *      Storage.SetStorage may be called as required to configure the storage units.
     * Note that some of the storage fields may only be set while in an exchange state, particularly fields which modify the configuration of the storage unit or units.
     * The fields affected by this are documented in Storage.SetStorage. Note that Storage.SetStorage does not need to be called if the Service can obtain storage unit information from self-configuring units.
     *
     *      Commands which operate the device mechanically such as an attempt to dispense notes may be rejected with exchangeActive. This allows the device to be replenished safely and in a controlled manner.
     * Not all devices which support the Storage interface support an exchange state, Storage.SetStorage may be sufficient to configure those storage units. In such devices, this command is not supported.
     * Similarly, devices which support the Storage interface may not require an exchange state to be entered if for example only modifying counts.
     *
     * The exchange state is exited by calling Storage.EndExchange.
     *
     * In the exchange state the Storage.SetStorage command can be used multiple times to adjust the storage unit information, until the Storage.EndExchange command is performed.
     */
    StartExchange = "Storage.StartExchange",
    /**
     * This command will end the exchange state. If any physical action took place as a result of the Storage.StartExchange command then this command will cause the storage units to be returned to their normal physical state.
     * Any necessary device testing will also be initiated.
     *
     * The current exchange state is reported by exchange and any change of state is marked by a Common.StatusChangedEvent.
     *
     * Storage.SetStorage does not need to be called if the Service can obtain storage unit information from self-configuring units.
     *
     * If an error occurs during the execution of this command, then the application must issue a Storage.GetStorage to determine the storage unit information.
     *
     * A Storage.StorageErrorEvent will be sent for any storage unit which cannot be successfully updated. If no units could be updated then an error code will be returned.
     *
     * Even if this command does not return a successful completion the exchange state has ended.
     */
    EndExchange = "Storage.EndExchange"
}
