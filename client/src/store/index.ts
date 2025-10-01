import { configureStore } from '@reduxjs/toolkit'
import theme from "./features/themes/index"
import modal from "./features/modal/index"
import loginSlice from "./features/auth/login"

export const store = configureStore({
  reducer: {
    theme,
    modal,
    login:loginSlice
  }
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store