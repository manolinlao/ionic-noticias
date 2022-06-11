/**
 * The message type. This must be one of "command", "acknowledge", "event", "completion" or "unsolicited"
 */
export declare enum XfsMessageType {
    /**
     * client to Service.
     *
     * Message sent to the Service to perform a command.
     */
    COMMAND = "command",
    /**
     * Service to client.
     *
     * Message from the Service indicating if the command is valid and queued.
     */
    ACK = "acknowledge",
    /**
     * Service to client.
     *
     * Intermediate message from the Service indicating progress of the command.
     */
    EVENT = "event",
    /**
     * Service to client.
     *
     * Message from the Service indicating the command is complete.
     */
    COMPLETION = "completion",
    /**
     * Service to client.
     *
     * Message from the Service unrelated to a command.
     */
    UNSOLICITED = "unsolicited"
}
