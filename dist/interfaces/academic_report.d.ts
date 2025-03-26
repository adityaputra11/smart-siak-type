import { BaseType } from "./basetype";
import { Student } from "./student";
export declare enum AcademicReportRemarks {
    ON_TRACK = "on_track",
    WARNING = "warning",
    AT_RISK = "at_risk"
}
export interface AcademicReport extends BaseType {
    student_id: string;
    semester_id: string;
    academic_year: string;
    total_credits: number;
    gpa: number;
    total_courses: number;
    passed_courses: number;
    failed_courses: number;
    remarks: AcademicReportRemarks;
    generated_at: Date;
    student: Student;
}
