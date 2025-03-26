import { BaseType } from "./basetype";
export declare enum RuleType {
    PREQUISITE = "prerequisite",
    RECOMMENDATION = "recommendation",
    SYSTEM = "system"
}
export interface Rule extends BaseType {
    name: string;
    type: RuleType;
    condition: string;
    action: string;
    semester_id: string;
}
