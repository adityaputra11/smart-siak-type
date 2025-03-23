export interface Student {
  id: string;
  name: string;
  nim: string;
  email: string;
  phone?: string | null;
  address?: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  userId?: string | null;
}