import { createAsyncThunk } from '@reduxjs/toolkit'
import { authLogin, authMe, authRegister } from '@services/api'

type RegisterThunkType = { email: string; fullName: string; avatarUrl?: string; password: string }

type ThunkType = { email: string; password: string }
type AuthLoginResponseType = {
  token: string
}

export const fetchAuthLogin = createAsyncThunk<AuthLoginResponseType, ThunkType>(
  'fetchAuthLogin',
  async ({ email, password }, thunkAPI) => {
    const response = await authLogin(email, password)

    // if (response.total === 0) {
    //   return thunkAPI.rejectWithValue('')
    // }
    return response
  }
)

export const fetchAuthMe = createAsyncThunk('fetchAuthMe', async (thunkAPI) => {
  const response = await authMe()

  // if (response.total === 0) {
  //   return thunkAPI.rejectWithValue('')
  // }
  return response
})

export const fetchAuthRegister = createAsyncThunk<AuthLoginResponseType, RegisterThunkType>(
  'fetchAuthRegister',
  async ({ email, fullName, avatarUrl, password }, thunkAPI) => {
    const response = await authRegister(email, fullName, password, avatarUrl)

    // if (response.total === 0) {
    //   return thunkAPI.rejectWithValue('')
    // }
    return response
  }
)
