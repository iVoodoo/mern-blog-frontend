import { BiEdit, BiLogInCircle, BiLogOutCircle } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import avatar from '@assets/lama.jpg'
import logo from '@assets/logo.svg'
import { logout, selectIsAuth } from '@reduxStore/authSlice/authSlice'
import { RootState, useAppDispatch } from '@reduxStore/store'

import styles from './Header.module.scss'

export const Header = () => {
  const isAuth = useSelector(selectIsAuth)
  const { data } = useSelector((state: RootState) => state.auth)

  const dispatch = useAppDispatch()

  const onClickLogout = () => {
    dispatch(logout())
    window.localStorage.removeItem('token')
  }

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Link to='/'>
          <img className={styles.item__logo} src={logo} alt='blog-logo' />
        </Link>
      </div>

      <div className={styles.item}>
        <div className={styles.actions}>
          {!isAuth && (
            <Link to='/login' className={styles.action}>
              <BiLogInCircle className={styles.item__icon} />
              <p className={styles['item__icon-text']}>Войти</p>
            </Link>
          )}
          {isAuth && (
            <>
              <div aria-hidden='true' onClick={onClickLogout} className={styles.action}>
                <BiLogOutCircle className={styles.item__icon} />
                <p className={styles['item__icon-text']}>Выйти</p>
              </div>
              <Link to='post/new' className={styles.action}>
                <BiEdit className={styles.item__icon} />
                <p className={styles['item__icon-text']}>Написать статью</p>
              </Link>
            </>
          )}
        </div>
      </div>
      <div className={styles.item}>
        {isAuth && (
          <a href='/'>
            <img className={styles['item__user-avatar']} src={data?.avatarUrl ? data.avatarUrl : avatar} alt='user-avatar' />
          </a>
        )}
      </div>
    </div>
  )
}
