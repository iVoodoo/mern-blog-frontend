import { useDispatch } from 'react-redux'

import { configureStore } from '@reduxjs/toolkit'

import auth from './authSlice/authSlice'
import post from './postSlice/postSlice'

export const store = configureStore({
  reducer: {
    auth,
    post
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
