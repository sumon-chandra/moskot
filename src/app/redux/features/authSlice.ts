import { User } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { jwtDecode } from "jwt-decode";

interface DecodedDataType {
    id: string;
    role: string;
    email: string;
    iat: number;
    exp: number;
}

export interface AuthState {
    user?: DecodedDataType | null;
    token?: string | any;
}

const initialState: AuthState = {
    user: null
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loggedInUser: (state, action: PayloadAction<AuthState>) => {
            const decoded = jwtDecode<DecodedDataType>(action.payload.token!)
            state.user = decoded
        }
    }
})

export const { loggedInUser } = authSlice.actions

export default authSlice.reducer