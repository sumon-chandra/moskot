export interface User {
    email: string;
    name: string;
    password: string;
    role: "admin" | "user";
    image?: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface TeamData {
    _id: string;
    name: string;
    category: string;
    createdAt: string;
    updatedAt?: string;
    image?: string;
    description: string;
    members?: User[],
    __v?: number;
}

export interface Team {
    statusCode: number;
    success: boolean;
    message: string;
    data: TeamData
}
export interface Teams {
    statusCode: number;
    success: boolean;
    message: string;
    data: TeamData[]
}