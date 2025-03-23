import { BaseType } from "./basetype";


export enum EnrollmentStatus {
  PENDING = 'pending',
  ENROLLED = 'enrolled',
  DROPPED = 'dropped',
}

export enum Grade {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
}

export interface Enrollment extends BaseType {
  student_id: string;
  subject_id: string;
  lecturer_id: string;
  semester_id: string;
  status: EnrollmentStatus;
  grade: Grade;
  score: number;
}
