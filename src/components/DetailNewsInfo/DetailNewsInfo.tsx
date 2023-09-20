import { BiShow } from 'react-icons/bi'

import avatar from '@assets/lama.jpg'
import imagePreview from '@assets/newsPreview.jpg'
import { stringToDate } from '@utils/stringToDate'

import styles from './DetailNewsInfo.module.scss'

type NewsInfo = {
  imageUrl: string
  tags?: string[]
  viewsCount: number
  author: {
    fullName: string
    avatarUrl?: string
  }
  createdAt: string
}

export const DetailNewsInfo: React.FC<NewsInfo> = ({ imageUrl, tags, viewsCount, author, createdAt }) => {
  return (
    <div className={styles['info-wrapper']}>
      <div className={styles['info-data']}>
        <div className={styles.user}>
          <img className={styles.user__avatar} src={author.avatarUrl ? author.avatarUrl : avatar} alt='user avatar' />
          <p className={styles.user__name}>{author.fullName}</p>
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
