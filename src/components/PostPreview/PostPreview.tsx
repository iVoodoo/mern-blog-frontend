import { BiEditAlt, BiShow, BiX } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import avatar from '@assets/lama.jpg'
import imagePreview from '@assets/newsPreview.jpg'
import { stringToDate } from '@utils/stringToDate'

import styles from './PostPreview.module.scss'

interface PostPreviewProps {
  id: string
  image: string
  title: string
  text: string
  tags?: string[]
  views: number
  author: {
    _id: string
    fullName: string
    avatarUrl: string
  }
  createTime: string
  isEditable: boolean
}

export const PostPreview: React.FC<PostPreviewProps> = ({
  id,
  image,
  title,
  text,
  tags,
  views,
  author,
  createTime,
  isEditable = false
}) => {
  return (
    <div className={styles['post-wrapper']}>
      <div className={styles['post-data']}>
        <div className={styles['post-info']}>
          <img src={author.avatarUrl ? author.avatarUrl : avatar} alt='author-avatar' className={styles['post-info__author-avatar']} />
          <p className={styles['post-info__author-name']}>{author.fullName}</p>
          <time dateTime={createTime} className={styles['post-info__time-data']}>
            {stringToDate(createTime)}
          </time>
          {isEditable && (
            <div className={styles['action-bar']}>
              <BiEditAlt className={styles['action-bar__icon']} />
              <BiX className={styles['action-bar__icon']} />
            </div>
          )}
        </div>
        <Link to={`/post/${id}`} className={styles['post-main']}>
          <h2 className={styles['post-main__title']}>{title}</h2>
          <article className={styles['post-main__text']}>{text}</article>
        </Link>
        <div className={styles['post-meta']}>
          <div className={styles['tags-wrapper']}>
            {tags?.map((i, index) => (
              <span className={styles.tag} key={index}>
                {i}
              </span>
            ))}
          </div>
          <div className={styles.views}>
            <BiShow className={styles.views__image} />
            <span className={styles.views__count}>{views.toLocaleString()}</span>
          </div>
        </div>
      </div>
      <img src={image || imagePreview} alt='post-preview-illustration' className={styles['post-image']} />
    </div>
  )
}
