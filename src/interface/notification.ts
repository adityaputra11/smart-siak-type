import { BaseType } from "./basetype";

export interface Notification extends BaseType {
  user_id: string;
  title: string;
  message: string;
  read: boolean;
  type: NotificationType;
  link: string;
}

export enum NotificationType {
  INFO = 'info',
  WARNING = 'warning',
}