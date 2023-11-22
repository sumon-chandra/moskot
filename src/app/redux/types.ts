import { User } from "@/types";

export interface GenericResponse {
    message: string;
    success: boolean;
    data: User | string;
    statusCode: number;
}
export interface RegisterUserProps {
    name?: string;
    email: string;
    password: string;
    role?: string;
}