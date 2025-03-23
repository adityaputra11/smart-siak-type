import { BaseType } from "./basetype";

export enum RuleType {
  PREQUISITE = 'prerequisite',
  RECOMMENDATION = 'recommendation',
  SYSTEM = 'system',
}

export enum RuleStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export interface Rule extends BaseType {
  name: string;
  type: RuleType;
  condition: string;
  action: string;
  status: RuleStatus;
  semester_id: string;
}