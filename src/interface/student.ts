import { AcademicReport } from "./academic_report";
import { BaseType } from "./basetype";
import { ClassSchedule } from "./class_schedule";
import { Department } from "./department";
import { Enrollment } from "./enrollment";
import { EnrollmentHistory } from "./enrollment_history";
import { User } from "./user";

export enum StudentStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DROPPED = 'dropped',
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}


export interface Student extends BaseType {
  // base field
  name: string;
  nim: string;
  email: string;
  phone: string;
  specialization: string;
  address: string;
  avatar_url: string;
  gender: Gender;
  birth_date: Date;
  birth_place: string;

  // additional field
  status: StudentStatus;
  user_id: string;
  user: User;
  department_id: string;
  department: Department;
  class_schedules: ClassSchedule[];
  enrollments: Enrollment[];
  enrollment_histories: EnrollmentHistory[];
  academic_reports: AcademicReport[];

  // generated field
  academic_summary?: AcademicSummary;

  get gpa(): number;
  get total_courses(): number;
  get passed_courses(): number;
  get failed_courses(): number;
  get total_credits_earned(): number;
  get total_credits_remaining(): number;
}

export interface AcademicSummary {
  gpa?: number;
  total_courses?: number;
  passed_courses?: number;
  failed_courses?: number;
  total_credits_earned?: number;
  total_credits_remaining?: number;
}