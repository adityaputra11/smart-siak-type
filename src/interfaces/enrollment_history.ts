import { BaseType } from "./basetype";
import { Grade } from "./enrollment";

export interface EnrollmentHistory extends BaseType {
  student_id: string;
  subject_id: string;
  lecturer_id: string;
  semester_id: string;
  grade: Grade;
  gpa: number;
}
