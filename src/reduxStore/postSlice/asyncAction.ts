import { createAsyncThunk } from '@reduxjs/toolkit'
import { getPosts } from '@services/api'

type PostThunkType = {
  _id: string
  title: string
  text: string
  tags: string[]
  viewsCount: number
  imageUrl: string
  createdAt: string
  author: {
    fullName: string
    avatarUrl?: string
  }
}

export const getAllPosts = createAsyncThunk<PostThunkType[]>('getPosts', async (thunkAPI) => {
  const response = await getPosts()
  return response
})
