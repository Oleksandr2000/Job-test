import { configureStore } from "@reduxjs/toolkit"

import AdversteningSlice from "./slice/AdverstaningSlice/AdversteningSlice"
import FavoriteSlise from "./slice/FavoriteSlice/FavoriteSlise"
import UserSlice from "./slice/UserSlice/UserSlice"

export const store = configureStore({
  reducer: {
    adverstaning: AdversteningSlice,
    user: UserSlice,
    favorite: FavoriteSlise,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
