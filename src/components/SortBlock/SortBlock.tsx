import clsx from 'clsx'
import { useState } from 'react'

import styles from './SortBlock.module.scss'

const sortItems = [
  { id: 0, sortName: 'Новые' },
  { id: 1, sortName: 'Популярные' }
]

export const SortBlock = () => {
  const [selectedSort, setSelectedSort] = useState(0)

  const onSelectSort = (id: number) => {
    setSelectedSort(id)
  }

  return (
    <div className={styles.sort}>
      {sortItems.map((item) => (
        <div
          key={item.id}
          className={clsx(styles.sort__item, {
            [styles['sort__item-selected']]: item.id === selectedSort
          })}
          onClick={() => onSelectSort(item.id)}
        >
          {item.sortName}
        </div>
      ))}
    </div>
  )
}
