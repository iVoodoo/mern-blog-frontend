import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@reduxStore/store'

import { fetchAuthLogin, fetchAuthMe, fetchAuthRegister } from './asyncAction'

type AuthType = {
  data: {
    _id: string
    fullName: string
    email: string
    token: string
    avatarUrl: string | null
  } | null
  status: 'loading' | 'loaded' | 'error'
}

const initialState: AuthType = {
  data: null,
  status: 'loading'
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuthLogin.pending, (state) => {
      state.status = 'loading'
      state.data = null
    })
    builder.addCase(fetchAuthLogin.fulfilled, (state, { payload }) => {
      state.status = 'loaded'
      state.data = payload
    })
    builder.addCase(fetchAuthLogin.rejected, (state) => {
      state.status = 'error'
      state.data = null
    })
    builder.addCase(fetchAuthMe.pending, (state) => {
      state.status = 'loading'
      state.data = null
    })
    builder.addCase(fetchAuthMe.fulfilled, (state, { payload }) => {
      state.status = 'loaded'
      state.data = payload
    })
    builder.addCase(fetchAuthMe.rejected, (state) => {
      state.status = 'error'
      state.data = null
    })
    builder.addCase(fetchAuthRegister.pending, (state) => {
      state.status = 'loading'
      state.data = null
    })
    builder.addCase(fetchAuthRegister.fulfilled, (state, { payload }) => {
      state.status = 'loaded'
      console.log(payload)

      state.data = payload
    })
    builder.addCase(fetchAuthRegister.rejected, (state) => {
      state.status = 'error'
      state.data = null
    })
  }
})

export const selectIsAuth = (state: RootState) => Boolean(state.auth.data)

export const selectAuthUserData = (state: RootState) => state.auth.data

export const { logout } = authSlice.actions

export default authSlice.reducer
