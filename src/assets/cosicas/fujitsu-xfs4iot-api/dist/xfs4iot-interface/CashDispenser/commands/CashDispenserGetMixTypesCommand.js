"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMixTypesMixAlgorithmEnum = exports.GetMixTypesMixTypeEnum = exports.CashDispenserGetMixTypesCommand = void 0;
const _1 = require(".");
const Core_1 = require("../../Core");
class CashDispenserGetMixTypesCommand {
    constructor(requestId, timeout) {
        this.header = {
            name: _1.CashDispenserCommandType.GetMixTypes,
            type: Core_1.XfsMessageType.COMMAND,
            requestId,
        };
        this.payload = {
            timeout,
        };
    }
}
exports.CashDispenserGetMixTypesCommand = CashDispenserGetMixTypesCommand;
var GetMixTypesMixTypeEnum;
(function (GetMixTypesMixTypeEnum) {
    /** the mix is not calculated by the Service, completely specified by the application.*/
    GetMixTypesMixTypeEnum["INDIVIDUAL"] = "individual";
    /** the mix is calculated using one of the algorithms specified by algorithm.*/
    GetMixTypesMixTypeEnum["ALGORITHM"] = "algorithm";
    /** the mix is calculated using a mix table - see CashDispenser.GetMixTable. */
    GetMixTypesMixTypeEnum["TABLE"] = "table";
})(GetMixTypesMixTypeEnum = exports.GetMixTypesMixTypeEnum || (exports.GetMixTypesMixTypeEnum = {}));
var GetMixTypesMixAlgorithmEnum;
(function (GetMixTypesMixAlgorithmEnum) {
    /** Select a mix requiring the minimum possible number of items. */
    GetMixTypesMixAlgorithmEnum["MINIMUMBILLS"] = "minimumBills";
    /** The denomination is selected based upon criteria which ensure that over the course of its operation the storage units will empty as far as possible at the same rate and will therefore go low and then empty at approximately the same time. */
    GetMixTypesMixAlgorithmEnum["EQUALEMPTYING"] = "equalEmptying";
    /** The denomination is selected based upon criteria which ensures the maximum number of storage units are used. */
    GetMixTypesMixAlgorithmEnum["MAXCASHUNITS"] = "maxCashUnits";
})(GetMixTypesMixAlgorithmEnum = exports.GetMixTypesMixAlgorithmEnum || (exports.GetMixTypesMixAlgorithmEnum = {}));
//# sourceMappingURL=CashDispenserGetMixTypesCommand.js.map