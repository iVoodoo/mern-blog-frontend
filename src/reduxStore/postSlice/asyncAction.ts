import { createAsyncThunk } from '@reduxjs/toolkit'
import { deletePost, getPopularTags, getPosts } from '@services/api'

type PostThunkType = {
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
    avatarUrl?: string
  }
}

type TagsType = string[]

export const getAllPosts = createAsyncThunk<PostThunkType[]>('getPosts', async (thunkAPI) => {
  const response = await getPosts()
  return response
})

export const getTags = createAsyncThunk<TagsType>('getTags', async (thunkAPI) => {
  const response = await getPopularTags()
  return response
})

export const removePost = createAsyncThunk('deletePost', async (id: string, thunkAPI) => {
  const response = await deletePost(id)
  return response
})
