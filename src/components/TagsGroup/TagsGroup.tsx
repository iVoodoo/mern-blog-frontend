import styles from './TagsGroup.module.scss'

interface TagsGroupProps {
  tags: string[]
}

export const TagsGroup: React.FC<TagsGroupProps> = ({ tags }) => {
  return (
    <div className={styles.tags}>
      {tags.map((item, index) => (
        <span key={index} className={styles.tags__item}>
          {item}
        </span>
      ))}
    </div>
  )
}
