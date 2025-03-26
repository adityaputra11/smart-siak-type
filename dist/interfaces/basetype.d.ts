export declare enum BaseStatus {
    ACTIVE = "active",
    INACTIVE = "inactive"
}
export interface BaseType {
    id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    updated_by: string;
    created_by: string;
    deleted_by: string;
    status?: BaseStatus;
}
