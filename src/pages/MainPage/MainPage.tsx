import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { PostPreview, SortBlock, TagsGroup } from '@components'
import { selectAuthUserData } from '@reduxStore/authSlice/authSlice'
import { getAllPosts, getTags } from '@reduxStore/postSlice/asyncAction'
import { RootState, useAppDispatch } from '@reduxStore/store'

import styles from './MainPage.module.scss'

export const MainPage: React.FC = () => {
  const authUserData = useSelector(selectAuthUserData)
  const { data } = useSelector((state: RootState) => state.post)

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getAllPosts())
    dispatch(getTags())
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles['main-content']}>
        <div className={styles['sort-wrapper']}>
          <SortBlock />
        </div>
        <div className={styles['post-wrapper']}>
          {data.posts.map((post) => (
            <PostPreview
              key={post._id}
              id={post._id}
              createTime={post.createdAt}
              image={post.imageUrl}
              text={post.text}
              title={post.title}
              tags={post.tags}
              views={post.viewsCount}
              author={post.author}
              isEditable={authUserData?._id === post.author._id}
            />
          ))}
        </div>
      </div>
      <div className={styles['side-content']}>
        <div className={styles['tags-wrapper']}>
          <h3 className={styles['section-title']}>Популярные теги</h3>
          <TagsGroup tags={data.popularTags} />
        </div>
      </div>
    </div>
  )
}
