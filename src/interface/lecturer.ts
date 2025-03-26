import { BaseStatus, BaseType } from "./basetype";
import { Subject } from "./subject";
import { ClassSchedule } from "./class_schedule";

export type LecturerStatus = typeof BaseStatus;
export interface Lecturer extends BaseType {
  name: string;
  nip: string;
  email: string;
  phone: string;
  department: string;
  specialization: string[];
  user_id: string;
  subjects: Subject[];
  class_schedules: ClassSchedule[];
}