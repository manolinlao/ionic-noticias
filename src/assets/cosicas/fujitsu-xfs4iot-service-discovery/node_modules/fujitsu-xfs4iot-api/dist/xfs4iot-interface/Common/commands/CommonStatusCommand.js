"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonStatusCommand = void 0;
const _1 = require(".");
const Core_1 = require("../../Core");
class CommonStatusCommand {
    constructor(requestId, timeout) {
        this.header = {
            name: _1.CommonCommandType.Status,
            type: Core_1.XfsMessageType.COMMAND,
            requestId,
        };
        this.payload = {
            timeout,
        };
    }
}
exports.CommonStatusCommand = CommonStatusCommand;
//# sourceMappingURL=CommonStatusCommand.js.map