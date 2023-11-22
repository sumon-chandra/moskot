import { configureStore } from "@reduxjs/toolkit"
import { teamApi } from "./features/api/teamApi"
import { authApi } from "./features/api/authApi"
import authReducer, { AuthState } from "./features/authSlice"

export interface RootState {
    auth: AuthState
}

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [teamApi.reducerPath]: teamApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        teamApi.middleware,
        authApi.middleware
    ])
})