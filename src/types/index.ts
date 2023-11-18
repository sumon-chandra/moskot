export interface Data {
    _id: string;
    teamName: string;
    teamCategory: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
}

export interface Team {
    statusCode: number;
    success: boolean;
    message: string;
    data: Data
}
export interface Teams {
    statusCode: number;
    success: boolean;
    message: string;
    data: Data[]
}