"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleStatus = exports.RuleType = void 0;
var RuleType;
(function (RuleType) {
    RuleType["PREQUISITE"] = "prerequisite";
    RuleType["RECOMMENDATION"] = "recommendation";
    RuleType["SYSTEM"] = "system";
})(RuleType || (exports.RuleType = RuleType = {}));
var RuleStatus;
(function (RuleStatus) {
    RuleStatus["ACTIVE"] = "active";
    RuleStatus["INACTIVE"] = "inactive";
})(RuleStatus || (exports.RuleStatus = RuleStatus = {}));
