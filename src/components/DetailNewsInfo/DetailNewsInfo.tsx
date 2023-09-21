import { BiEditAlt, BiShow, BiX } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

import avatar from '@assets/lama.jpg'
import imagePreview from '@assets/newsPreview.jpg'
import { removePost } from '@reduxStore/postSlice/asyncAction'
import { useAppDispatch } from '@reduxStore/store'
import { stringToDate } from '@utils/stringToDate'

import styles from './DetailNewsInfo.module.scss'

type NewsInfo = {
  id: string
  imageUrl: string
  tags?: string[]
  viewsCount: number
  author: {
    fullName: string
    avatarUrl?: string
  }
  createdAt: string
  isEditable: boolean
}

export const DetailNewsInfo: React.FC<NewsInfo> = ({ id, imageUrl, tags, viewsCount, author, createdAt, isEditable }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onEditPostClick = () => {
    navigate(`/post/${id}/edit`)
  }
  const onDeletePostClick = () => {
    if (window.confirm('Вы действительно хотите удалить статью?')) {
      dispatch(removePost(id))
      navigate('/')
    }
  }
  return (
    <div className={styles['info-wrapper']}>
      <div className={styles['info-data']}>
        <div className={styles.user}>
          <img className={styles.user__avatar} src={author.avatarUrl ? author.avatarUrl : avatar} alt='user avatar' />
          <p className={styles.user__name}>{author.fullName}</p>
          {isEditable && (
            <div className={styles['action-bar']}>
              <BiEditAlt className={styles['action-bar__icon']} onClick={onEditPostClick} />
              <BiX className={styles['action-bar__icon']} onClick={onDeletePostClick} />
            </div>
          )}
        </div>
        <time className={styles.time} dateTime={createdAt}>
          {stringToDate(createdAt)}
        </time>
        <div className={styles.views}>
          <BiShow className={styles.views__image} />
          <span className={styles.views__count}>{viewsCount.toLocaleString()}</span>
        </div>

        <div className={styles['tags-wrapper']}>
          {tags?.map((i, index) => (
            <span className={styles.tag} key={index}>
              {i}
            </span>
          ))}
        </div>
      </div>
      <img className={styles['info-image']} alt='illustration for this news' src={imageUrl || imagePreview} />
    </div>
  )
}
