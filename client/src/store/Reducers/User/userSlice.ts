import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
    name: string
}
const username = window.localStorage.getItem("username")

const initialState: UserState = {
    name: username ? username : "",
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        newUser: (state, action: PayloadAction<string>) => {
            state.name = action.payload
            window.localStorage.setItem("username", state.name)
        },
        logOut: (state) => {
            state.name = ""
            window.localStorage.setItem("username", "")
        }
    }
})

export const {newUser, logOut} = userSlice.actions

export default userSlice.reducer