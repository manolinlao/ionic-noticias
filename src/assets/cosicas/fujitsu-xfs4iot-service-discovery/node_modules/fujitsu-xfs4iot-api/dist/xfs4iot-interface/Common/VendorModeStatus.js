"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorModeServiceEnum = exports.VendorModeDeviceEnum = void 0;
var VendorModeDeviceEnum;
(function (VendorModeDeviceEnum) {
    /** The Vendor Mode service is available. */
    VendorModeDeviceEnum["ONLINE"] = "online";
    /** The Vendor Mode service is not available */
    VendorModeDeviceEnum["OFFLINE"] = "offline";
})(VendorModeDeviceEnum = exports.VendorModeDeviceEnum || (exports.VendorModeDeviceEnum = {}));
var VendorModeServiceEnum;
(function (VendorModeServiceEnum) {
    /** Vendor Mode enter request pending. */
    VendorModeServiceEnum["ENTER_PENDING"] = "enterPending";
    /** Vendor Mode active. */
    VendorModeServiceEnum["ACTIVE"] = "active";
    /** Vendor Mode exit request pending. */
    VendorModeServiceEnum["EXIT_PENDING"] = "exitPending";
    /** Vendor Mode inactive. */
    VendorModeServiceEnum["INACTIVE"] = "inactive";
})(VendorModeServiceEnum = exports.VendorModeServiceEnum || (exports.VendorModeServiceEnum = {}));
//# sourceMappingURL=VendorModeStatus.js.map