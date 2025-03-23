import { BaseType } from "./basetype";
export declare enum UserRole {
    ADMIN = "admin",
    STUDENT = "student",
    LECTURER = "lecturer",
    STAFF = "staff"
}
export declare enum UserStatus {
    ACTIVE = "active",
    INACTIVE = "inactive",
    BLOCKED = "blocked"
}
export interface User extends BaseType {
    username: string;
    email: string;
    password: string;
    full_name: string;
    avatar_url: string;
    role: UserRole;
    status: UserStatus;
    age: number;
}
