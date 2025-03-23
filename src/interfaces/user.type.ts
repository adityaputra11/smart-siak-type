export enum UserRole {
  ADMIN = 'admin',
  STUDENT = 'student',
  LECTURER = 'lecturer',
  STAFF = 'staff',
}

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  fullName: string;
  role: UserRole;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  age: number;
}