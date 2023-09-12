import { createSlice } from '@reduxjs/toolkit'

import { getAllPosts } from './asyncAction'

type PostType = {
  data: {
    _id: string
    title: string
    text: string
    tags: string[]
    viewsCount: number
    imageUrl: string
    createdAt: string
    author: {
      fullName: string
      avatarUrl: string
    }
  }[]
  status: 'loading' | 'loaded' | 'error'
}

const initialState: PostType = {
  data: [],
  status: 'loading'
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.pending, (state) => {
      state.status = 'loading'
      state.data = []
    })
    builder.addCase(getAllPosts.fulfilled, (state, { payload }) => {
      state.status = 'loaded'
      state.data = payload
    })
    builder.addCase(getAllPosts.rejected, (state) => {
      state.status = 'error'
      state.data = []
    })
  }
})

export default postSlice.reducer
