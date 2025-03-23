"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./interface/user"), exports);
__exportStar(require("./interface/student"), exports);
__exportStar(require("./interface/subject"), exports);
__exportStar(require("./interface/lecturer"), exports);
__exportStar(require("./interface/class_schedule"), exports);
__exportStar(require("./interface/enrollment"), exports);
__exportStar(require("./interface/enrollment_history"), exports);
__exportStar(require("./interface/academic_report"), exports);
__exportStar(require("./interface/recomendation_report"), exports);
__exportStar(require("./interface/rule"), exports);
__exportStar(require("./interface/semester"), exports);
__exportStar(require("./interface/basetype"), exports);
__exportStar(require("./interface/department"), exports);
