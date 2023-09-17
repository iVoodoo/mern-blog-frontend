import clsx from 'clsx'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import { setSortedPosts } from '@reduxStore/postSlice/postSlice'
import { RootState, useAppDispatch } from '@reduxStore/store'
import { stringToDate } from '@utils/stringToDate'

import styles from './SortBlock.module.scss'

const sortItems = [
  { id: 0, sortName: 'Новые' },
  { id: 1, sortName: 'Популярные' }
]

export const SortBlock = () => {
  const [selectedSort, setSelectedSort] = useState(0)
  const { data } = useSelector((state: RootState) => state.post)
  const dispatch = useAppDispatch()
  const onSelectSort = (id: number) => {
    if (id === 0) {
      const sortedNewest = [...data.posts].sort((objA, objB) => Number(new Date(objB.createdAt)) - Number(new Date(objA.createdAt)))
      dispatch(setSortedPosts(sortedNewest))
      setSelectedSort(id)
    }
    if (id === 1) {
      const sortedMostPopular = [...data.posts].sort((objA, objB) => Number(objB.viewsCount) - Number(objA.viewsCount))
      dispatch(setSortedPosts(sortedMostPopular))
      setSelectedSort(id)
    }
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
