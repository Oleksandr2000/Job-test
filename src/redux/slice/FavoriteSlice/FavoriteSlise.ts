import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

import { FavoriteSliceProps } from "./FavoriteSlice.props"

import axios from "../../../axios"
import { Adverstaning } from "../AdverstaningSlice/AdverstaningSlice.props"

export const postFavorite = createAsyncThunk<
  { status: number; message: string },
  { advertisement: string; user: string }
>("favorite/postFavorite", async (body) => {
  const { data } = await axios.post("/favorite/add", body)
  return data
})

export const getFavorites = createAsyncThunk<
  { items: Adverstaning[]; amount: number },
  { id: any; count: number; activePage: number }
>("favorite/getFavorites", async ({ id, count, activePage }) => {
  const { data } = await axios.get(`/favorite?id=${id}&count=${count}&offset=${activePage - 1}`)
  return data
})

const initialState: FavoriteSliceProps = {
  favorite: [],
  statusFavorite: "loading",
  statusPost: null,
  count: 4,
  activePage: 1,
  totalPage: 3,
  pagesChunk: [],
}

const FavoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setActiveFavoritePage: (state, action) => {
      if (action.payload < 1 || action.payload > state.totalPage) {
        return
      }

      state.activePage = action.payload

      if (action.payload > 3 && state.activePage < state.totalPage - 1) {
        state.pagesChunk = [action.payload - 1, action.payload, action.payload + 1]
      }

      if (action.payload > state.totalPage - 1) {
        state.pagesChunk = [action.payload - 3, action.payload - 2, action.payload - 1]
      }

      if (action.payload <= 3) {
        state.pagesChunk = [2, 3, 4]
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(postFavorite.pending, (state) => {
        state.statusPost = "loading"
      })
      .addCase(postFavorite.fulfilled, (state, action) => {
        state.statusPost = "loaded"
      })
      .addCase(postFavorite.rejected, (state) => {
        state.statusPost = "error"
        toast.error("Try later")
      })
      .addCase(getFavorites.pending, (state) => {
        state.statusFavorite = "loading"
      })
      .addCase(getFavorites.fulfilled, (state, action) => {
        state.statusFavorite = "loaded"
        state.favorite = action.payload.items
        state.totalPage = Math.ceil(action.payload.amount / state.count)
      })
      .addCase(getFavorites.rejected, (state) => {
        state.statusFavorite = "error"
      })
  },
})

export const { setActiveFavoritePage } = FavoriteSlice.actions

export default FavoriteSlice.reducer
