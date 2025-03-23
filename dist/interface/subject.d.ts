import { BaseType } from "./basetype";
import { Department } from "./department";
export declare enum SubjectStatus {
    ACTIVE = "active",
    INACTIVE = "inactive"
}
export interface Subject extends BaseType {
    name: string;
    code: string;
    credits: number;
    description: string;
    status: SubjectStatus;
    department_id: string;
    department: Department;
}
