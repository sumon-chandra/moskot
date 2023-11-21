import { User } from "@/types";

export interface GenericResponse {
    status: string;
    message: string;
    success: boolean;
    data: User;
    statusCode: number;
}
export interface RegisterUserProps {
    name?: string;
    email: string;
    password: string;
}