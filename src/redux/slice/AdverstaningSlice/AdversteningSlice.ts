import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

import { Adverstaning, AdverstaningSliceProps } from "./AdverstaningSlice.props"

import axios from "../../../axios"

export const fetchAdverstening = createAsyncThunk<
  { items: Adverstaning[]; amount: number },
  { count: number; activePage: number }
>("adverstaning/fetchAdverstaning", async ({ count, activePage }) => {
  const { data } = await axios.get(`/advertisements?count=${count}&offset=${activePage - 1}`)
  return data
})

export const fetchOneAdverstening = createAsyncThunk<Adverstaning, { id: string }>(
  "adverstaning/fetchOneAdverstaning",
  async ({ id }) => {
    const { data } = await axios.get(`/advertisements/${id}`)
    return data
  },
)

export const postRating = createAsyncThunk<
  { data: Adverstaning; message: string },
  { value: number; user?: string; advertisement?: string }
>("rating/postRating", async (body) => {
  const { data } = await axios.post("ratings/add", body)
  return data
})

const initialState: AdverstaningSliceProps = {
  data: [],
  advertisement: null,
  status: "loading",
  statusPost: null,
  count: 4,
  activePage: 1,
  totalPage: 3,
  pagesChunk: [2, 3, 4],
  showModal: false,
}

const adverstaningSlice = createSlice({
  name: "adverstaning",
  initialState,
  reducers: {
    setActivePage: (state, action) => {
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

    handleModal: (state, action) => {
      state.showModal = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAdverstening.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchAdverstening.fulfilled, (state, action) => {
        state.status = "loaded"
        state.data = action.payload.items
        state.totalPage = Math.floor(action.payload.amount / state.count)
      })
      .addCase(fetchAdverstening.rejected, (state) => {
        state.status = "error"
      })
      .addCase(fetchOneAdverstening.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchOneAdverstening.fulfilled, (state, action) => {
        state.status = "loaded"
        state.advertisement = action.payload
      })
      .addCase(fetchOneAdverstening.rejected, (state) => {
        state.status = "error"
      })
      .addCase(postRating.pending, (state) => {
        state.statusPost = "loading"
      })
      .addCase(postRating.fulfilled, (state, action) => {
        state.statusPost = "loaded"
        state.advertisement = action.payload.data
        toast.info(action.payload.message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      })
      .addCase(postRating.rejected, (state) => {
        state.statusPost = "error"
      })
  },
})

export const { setActivePage, handleModal } = adverstaningSlice.actions

export default adverstaningSlice.reducer
