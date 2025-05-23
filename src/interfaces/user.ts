import { BaseType } from "./basetype";

export enum UserRole {
  ADMIN = 'admin',
  STUDENT = 'student',
  LECTURER = 'lecturer',
  STAFF = 'staff',
}

export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  BLOCKED = 'blocked',
}

export interface User extends Omit<BaseType, 'status'> {
  username: string;
  email: string;
  password: string;
  full_name: string;
  avatar_url: string;
  role: UserRole;
  status: UserStatus;
  age: number;
}