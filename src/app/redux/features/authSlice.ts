import { createSlice, PayloadAction } from "@reduxjs/toolkit"


export interface AuthState {
    token: string;
}

const initialState: AuthState = {
    token: ""
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loggedInUser: (state, action: PayloadAction<AuthState>) => {
            state.token = action.payload.token
        }
    }
})

export const { loggedInUser } = authSlice.actions

export default authSlice.reducer