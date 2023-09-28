import { Link } from 'react-router-dom'

import styles from './TagsGroup.module.scss'

interface TagsGroupProps {
  tags: string[]
}

export const TagsGroup: React.FC<TagsGroupProps> = ({ tags }) => {
  return (
    <div className={styles.tags}>
      {tags.map((item, index) => (
        <Link className={styles.tags__item} key={index} to={`/tag/${item}`}>
          {item}
          {/* <span className={styles.tags__item}></span> */}
        </Link>
      ))}
    </div>
  )
}
