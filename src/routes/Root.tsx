import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { Header } from '@components'
import { fetchAuthMe } from '@reduxStore/authSlice/asyncAction'
import { selectIsAuth } from '@reduxStore/authSlice/authSlice'
import { useAppDispatch } from '@reduxStore/store'

export const Root: React.FC = () => {
  const dispatch = useAppDispatch()
  const isAuth = useSelector(selectIsAuth)

  useEffect(() => {
    dispatch(fetchAuthMe())
  }, [])

  return (
    <div className='container'>
      <div className='header'>
        <Header />
      </div>
      <div className='main-content'>
        <Outlet />
      </div>
    </div>
  )
}
