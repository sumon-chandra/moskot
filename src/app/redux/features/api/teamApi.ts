import { Team, Teams } from "@/types"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const teamApi = createApi({
    reducerPath: "teamApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://little-programmers-frontend-api.vercel.app/api/v1/" }),
    endpoints: (builder) => ({
        getTeams: builder.query<Teams, void>({
            query: () => "team"
        }),
        getTeam: builder.query<Team, string>({
            query: (teamId: string) => `team/${teamId}`
        })
    })
})

export const { useGetTeamsQuery, useGetTeamQuery } = teamApi