import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

import { ResponseRegistration, UserSliceProps } from "./UserSlice.props"

import axios from "../../../axios"
import { Contact } from "../../../layouts/ApplyLayout/ApplyLayout.props"

const initialState: UserSliceProps = {
  token: localStorage.getItem("token") || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
  status: "loading",
  statusPost: null,
  errorMessage: null,
}

export const fetchRegistration = createAsyncThunk<ResponseRegistration, any>("user/fetchRegistration", async (body) => {
  const { data } = await axios.post("/auth/registration", body)
  return data
})

export const fetchLogin = createAsyncThunk<ResponseRegistration, any>("user/fetchLogin", async (body) => {
  const { data } = await axios.post("/auth/login", body)
  return data
})

export const postContacts = createAsyncThunk<unknown, Contact>("user/postContacts", async (body: Contact) => {
  const { data } = await axios.post("/contacts/save", body)
  return data
})

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null
      state.user = null
      toast.error("You exit")
      localStorage.removeItem("token")
      localStorage.removeItem("user")
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRegistration.pending, (state) => {
        state.statusPost = "loading"
      })
      .addCase(fetchRegistration.fulfilled, (state, action) => {
        state.statusPost = "loaded"
        state.user = action.payload.user._doc
        state.token = action.payload.token
        toast.success("success")
        localStorage.setItem("token", action.payload.token)
        localStorage.setItem("user", JSON.stringify(action.payload.user._doc))
      })
      .addCase(fetchRegistration.rejected, (state, action) => {
        state.statusPost = "error"
        state.errorMessage = action.payload
        toast.error("Try later")
      })
      .addCase(fetchLogin.pending, (state) => {
        state.statusPost = "loading"
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.statusPost = "loaded"
        state.user = action.payload.user._doc
        state.token = action.payload.token
        toast.success("Success")
        localStorage.setItem("token", action.payload.token)
        localStorage.setItem("user", JSON.stringify(action.payload.user._doc))
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.statusPost = "error"
        state.errorMessage = action.payload
        toast.error("Try later")
      })
      .addCase(postContacts.pending, (state) => {
        state.statusPost = "loading"
      })
      .addCase(postContacts.fulfilled, (state) => {
        state.statusPost = "loaded"
        toast.success("We will contact you")
      })
      .addCase(postContacts.rejected, (state) => {
        state.statusPost = "error"
        toast.error("Try later")
      })
  },
})

export const { logout } = UserSlice.actions

export default UserSlice.reducer
