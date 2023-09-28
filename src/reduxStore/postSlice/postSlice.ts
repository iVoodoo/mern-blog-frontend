import { createSlice } from '@reduxjs/toolkit'

import { fetchAllPosts, fetchPostsByTag, fetchTags, removePost } from './asyncAction'

type SinglePostType = {
  _id: string
  title: string
  text: string
  tags: string[]
  viewsCount: number
  imageUrl: string
  createdAt: string
  author: {
    _id: string
    fullName: string
    avatarUrl: string
  }
}

enum StatusOfData {
  loading = 'LOADING',
  loaded = 'LOADED',
  error = 'ERROR'
}

type PostSliceType = {
  data: {
    posts: SinglePostType[]
    popularTags: string[]
  }
  status: StatusOfData
}

const initialState: PostSliceType = {
  data: { posts: [], popularTags: [] },
  status: StatusOfData.loading
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
    builder.addCase(fetchAllPosts.pending, (state) => {
      state.status = StatusOfData.loading
      state.data.posts = []
    })
    builder.addCase(fetchAllPosts.fulfilled, (state, { payload }) => {
      state.status = StatusOfData.loaded
      state.data.posts = payload as []
    })
    builder.addCase(fetchAllPosts.rejected, (state) => {
      state.status = StatusOfData.error
      state.data.posts = []
    })
    builder.addCase(removePost.fulfilled, (state, payload) => {
      state.status = StatusOfData.loaded
      state.data.posts = [...state.data.posts.filter((post) => post._id !== payload.meta.arg)]
    })
    builder.addCase(fetchTags.pending, (state) => {
      state.status = StatusOfData.loading
      state.data.popularTags = []
    })
    builder.addCase(fetchTags.fulfilled, (state, { payload }) => {
      state.status = StatusOfData.loaded
      state.data.popularTags = payload as []
    })
    builder.addCase(fetchTags.rejected, (state) => {
      state.status = StatusOfData.error
      state.data.popularTags = []
    })
    builder.addCase(fetchPostsByTag.pending, (state) => {
      state.status = StatusOfData.loading
      state.data.posts = []
    })
    builder.addCase(fetchPostsByTag.fulfilled, (state, { payload }) => {
      state.status = StatusOfData.loaded
      state.data.posts = payload as []
    })
    builder.addCase(fetchPostsByTag.rejected, (state) => {
      state.status = StatusOfData.error
      state.data.posts = []
    })
  }
})
export const { setSortedPosts } = postSlice.actions
export default postSlice.reducer
