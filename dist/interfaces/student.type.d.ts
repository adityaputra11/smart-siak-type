import { Subject } from "./subject.type";
import { User } from "./user.type";
/**
 * @description Data siswa
 */
export interface Student {
    id: string;
    /**
     * @description Nama lengkap
     */
    name: string;
    /**
     * @description NIM
     */
    nim: string;
    /**
     * @description Email
     */
    email: string;
    /**
     * @description Nomor telepon
     */
    phone: string;
    /**
     * @description Departemen
     */
    department: string;
    /**
     * @description Spesialisasi
     */
    specialization: string;
    /**
     * @description Status aktif
     */
    isActive: boolean;
    /**
     * @description Tanggal pembuatan
     */
    createdAt: Date;
    /**
     * @description Tanggal pembaruan
     */
    updatedAt: Date;
    /**
     * @description Mata pelajaran
     */
    subjects: Subject[];
    /**
     * @description User
     */
    user: User;
    /**
     * @description ID user
     */
    userId: string;
}
