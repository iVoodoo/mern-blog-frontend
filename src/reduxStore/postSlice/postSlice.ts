import { createSlice } from '@reduxjs/toolkit'

import { getAllPosts, getTags } from './asyncAction'

type SinglePostType = {
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
}

type PostSliceType = {
  data: {
    posts: SinglePostType[]
    popularTags: string[]
  }
  status: 'loading' | 'loaded' | 'error'
}

const initialState: PostSliceType = {
  data: { posts: [], popularTags: [] },
  status: 'loading'
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setSortedPosts: (state, { payload }) => {
      state.data.posts = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.pending, (state) => {
      state.status = 'loading'
      state.data.posts = []
    })
    builder.addCase(getAllPosts.fulfilled, (state, { payload }) => {
      state.status = 'loaded'
      state.data.posts = payload as []
    })
    builder.addCase(getAllPosts.rejected, (state) => {
      state.status = 'error'
      state.data.posts = []
    })
    builder.addCase(getTags.pending, (state) => {
      state.status = 'loading'
      state.data.popularTags = []
    })
    builder.addCase(getTags.fulfilled, (state, { payload }) => {
      state.status = 'loaded'
      state.data.popularTags = payload as []
    })
    builder.addCase(getTags.rejected, (state) => {
      state.status = 'error'
      state.data.popularTags = []
    })
  }
})
export const { setSortedPosts } = postSlice.actions
export default postSlice.reducer
