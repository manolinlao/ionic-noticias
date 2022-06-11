"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XfsMessageType = void 0;
/**
 * The message type. This must be one of "command", "acknowledge", "event", "completion" or "unsolicited"
 */
var XfsMessageType;
(function (XfsMessageType) {
    /**
     * client to Service.
     *
     * Message sent to the Service to perform a command.
     */
    XfsMessageType["COMMAND"] = "command";
    /**
     * Service to client.
     *
     * Message from the Service indicating if the command is valid and queued.
     */
    XfsMessageType["ACK"] = "acknowledge";
    /**
     * Service to client.
     *
     * Intermediate message from the Service indicating progress of the command.
     */
    XfsMessageType["EVENT"] = "event";
    /**
     * Service to client.
     *
     * Message from the Service indicating the command is complete.
     */
    XfsMessageType["COMPLETION"] = "completion";
    /**
     * Service to client.
     *
     * Message from the Service unrelated to a command.
     */
    XfsMessageType["UNSOLICITED"] = "unsolicited";
})(XfsMessageType = exports.XfsMessageType || (exports.XfsMessageType = {}));
//# sourceMappingURL=XfsMessageType.js.map