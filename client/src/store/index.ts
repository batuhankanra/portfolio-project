import { configureStore } from '@reduxjs/toolkit'
import theme from "./features/themes/index"
import blog from "./features/blog/index"
import loginSlice from "./features/auth/login"
import modal from "./features/modal/index"
import blogGetOne from "./features/blog/getOne"
import contact from "./features/contact/getAll"

export const store = configureStore({
  reducer: {
    theme,
    login:loginSlice,
    modal,
    blog,
    blogGetOne,
    contact
  }
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store