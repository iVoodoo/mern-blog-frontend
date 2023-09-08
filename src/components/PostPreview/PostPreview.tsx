import { BiShow } from 'react-icons/bi'

import styles from './PostPreview.module.scss'

interface PostPreviewProps {
  id: string
  image: string
  title: string
  text: string
  tags?: string[]
  views: number
  author: {
    name: string
    avatar: string
  }
  createTime: Date
}

export const PostPreview: React.FC<PostPreviewProps> = ({ image, title, text, tags, views, author, createTime }) => {
  return (
    <div className={styles['post-wrapper']}>
      <div className={styles['post-data']}>
        <div className={styles['post-info']}>
          <img src={author.avatar} alt='author-avatar' className={styles['post-info__author-avatar']} />
          <p className={styles['post-info__author-name']}>{author.name}</p>
          <p className={styles['post-info__time-data']}>{createTime.toLocaleDateString()}</p>
        </div>
        <div className={styles['post-main']}>
          <h2 className={styles['post-main__title']}>{title}</h2>
          <article className={styles['post-main__text']}>{text}</article>
        </div>
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
      <img src={image} alt='post-preview-illustration' className={styles['post-image']} />
    </div>
  )
}
