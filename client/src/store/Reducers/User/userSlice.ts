import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
    name: string,
    image: string
}
const username = window.localStorage.getItem("username")
const image = window.localStorage.getItem("avatar")

const initialState: UserState = {
    name: username ? username : "",
    image: image ? image : ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        newUser: (state, action: PayloadAction<UserState>) => {
            state = action.payload
            window.localStorage.setItem("username", state.name)
            window.localStorage.setItem("avatar", state.image)
        },
        logOut: (state) => {
            state.name = ""
            window.localStorage.setItem("username", "")
        }
    }
})

export const {newUser, logOut} = userSlice.actions

export default userSlice.reducer