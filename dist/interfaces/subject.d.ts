import { BaseType } from "./basetype";
import { Department } from "./department";
export interface Subject extends BaseType {
    name: string;
    code: string;
    credits: number;
    description: string;
    department_id: string;
    department: Department;
}
