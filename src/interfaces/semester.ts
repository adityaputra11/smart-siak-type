import { BaseType } from "./basetype";

export interface Semester extends BaseType {
  name: string;
  start_date: Date;
  end_date: Date;
  academic_year: string;
}
