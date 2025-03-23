import { BaseType } from "./basetype";
export interface Department extends BaseType {
    name: string;
    description: string;
    code: string;
    faculty_id: string;
    faculty: Faculty;
}
export interface Faculty extends BaseType {
    name: string;
    description: string;
    code: string;
    departments: Department[];
}
