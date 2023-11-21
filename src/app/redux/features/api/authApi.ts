import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GenericResponse, RegisterUserProps } from "../../types";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://little-programmers-frontend-api.vercel.app/api/v1/user/" }),
    endpoints: builder => ({
        registerUser: builder.mutation<GenericResponse, RegisterUserProps>({
            query(data) {
                return {
                    url: "register",
                    method: "POST",
                    body: data,
                };
            },
        }),
        loginUser: builder.mutation<{ access_token: string; status: string }, RegisterUserProps>({
            query(data) {
                return {
                    url: "login",
                    method: "POST",
                    body: data,
                };
            },
        }),
    }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
