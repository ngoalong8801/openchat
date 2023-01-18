import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Reducers/User/userSlice'
import groupReducer from './Reducers/groupSlice'


export const store = configureStore({
  reducer: {
    user: userReducer,
    groups: groupReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch