import { BaseType } from "./basetype";
import { Subject } from "./subject";
import { ClassSchedule } from "./class_schedule";
export declare enum LecturerStatus {
    ACTIVE = "active",
    INACTIVE = "inactive"
}
export interface Lecturer extends BaseType {
    name: string;
    nip: string;
    email: string;
    phone: string;
    department: string;
    specialization: string[];
    status: LecturerStatus;
    user_id: string;
    subjects: Subject[];
    class_schedules: ClassSchedule[];
}
