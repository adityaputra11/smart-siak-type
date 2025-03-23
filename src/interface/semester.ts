import { BaseType } from "./basetype";

export enum SemesterStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export interface Semester extends BaseType {
  name: string;
  start_date: Date;
  end_date: Date;
  status: SemesterStatus;
  academic_year: string;
}
