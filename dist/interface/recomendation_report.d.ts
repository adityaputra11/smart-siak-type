import { BaseType } from "./basetype";
export interface RecomendationReport extends BaseType {
    student_id: string;
    semester_id: string;
    subject_id: string;
    lecturer_id: string;
}
