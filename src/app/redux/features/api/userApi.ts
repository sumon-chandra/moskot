import { User } from "@/types"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://little-programmers-frontend-api.vercel.app/api/v1/" }),
    endpoints: (builder) => ({
        getUsers: builder.query<User, void>({
            query: () => "user"
        })
    })
})

export const { useGetUsersQuery } = userApi