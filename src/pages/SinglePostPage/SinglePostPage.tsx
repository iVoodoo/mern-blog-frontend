import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { DetailNewsInfo } from '@components'
import { selectAuthUserData } from '@reduxStore/authSlice/authSlice'
import { getPost } from '@services/api'

import styles from './SinglePostPage.module.scss'

type PostType = {
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
} | null

export const SinglePostPage: React.FC = () => {
  const authUserData = useSelector(selectAuthUserData)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [post, setPost] = useState<PostType>(null)
  const { id = '' } = useParams()
  useEffect(() => {
    getPost(id).then((data) => {
      setPost(data)
      setIsLoading(false)
    })
  }, [])

  return (
    <div className={styles['page-wrapper']}>
      {!isLoading && post && (
        <div className={styles.post}>
          <h1 className={styles.post__title}>{post?.title}</h1>
          <div className={styles.post__info}>
            <DetailNewsInfo
              id={post?._id}
              author={post?.author}
              createdAt={post?.createdAt}
              imageUrl={post?.imageUrl}
              viewsCount={post?.viewsCount}
              tags={post?.tags}
              isEditable={authUserData?._id === post.author._id}
            />
          </div>
          <ReactMarkdown className={styles.post__text}>{post?.text}</ReactMarkdown>
        </div>
      )}
    </div>
  )
}
