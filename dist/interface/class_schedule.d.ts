import { BaseType } from "./basetype";
export declare enum ClassScheduleDay {
    MONDAY = "Monday",
    TUESDAY = "Tuesday",
    WEDNESDAY = "Wednesday",
    THURSDAY = "Thursday",
    FRIDAY = "Friday",
    SATURDAY = "Saturday"
}
export interface ClassSchedule extends BaseType {
    subject_id: string;
    lecturer_id: string;
    class_code: string;
    day: ClassScheduleDay;
    start_time: string;
    end_time: string;
    room?: string;
    semester_id: string;
    academic_year: string;
}
