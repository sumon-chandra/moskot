import { configureStore } from "@reduxjs/toolkit"
import { teamApi } from "./features/api/teamApi"
import { authApi } from "./features/api/authApi"

export const store = configureStore({
    reducer: {
        [teamApi.reducerPath]: teamApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        teamApi.middleware,
        authApi.middleware
    ])
})