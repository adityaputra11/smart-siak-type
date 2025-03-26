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
__exportStar(require("./interfaces/user"), exports);
__exportStar(require("./interfaces/student"), exports);
__exportStar(require("./interfaces/subject"), exports);
__exportStar(require("./interfaces/lecturer"), exports);
__exportStar(require("./interfaces/class_schedule"), exports);
__exportStar(require("./interfaces/enrollment"), exports);
__exportStar(require("./interfaces/enrollment_history"), exports);
__exportStar(require("./interfaces/academic_report"), exports);
__exportStar(require("./interfaces/recomendation_report"), exports);
__exportStar(require("./interfaces/rule"), exports);
__exportStar(require("./interfaces/semester"), exports);
__exportStar(require("./interfaces/basetype"), exports);
__exportStar(require("./interfaces/department"), exports);
__exportStar(require("./interfaces/notification"), exports);
