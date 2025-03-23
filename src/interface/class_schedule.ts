import { BaseType } from "./basetype";


export enum ClassScheduleDay {
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
}


export interface ClassSchedule extends BaseType {
  subject_id: string;
  lecturer_id: string;
  class_code: string; // "A", "B", etc
  day: ClassScheduleDay;
  start_time: string; // "08:00"
  end_time: string;   // "10:00"
  room?: string;
  semester_id: string;
  academic_year: string; // "2024/2025"
}