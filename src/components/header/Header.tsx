import { BiEdit, BiLogInCircle, BiLogOutCircle } from 'react-icons/bi'

import avatar from '@assets/lama.jpg'
import logo from '@assets/logo.svg'

import styles from './Header.module.scss'

export const Header = () => {
  const isAuth = false
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <a href='/'>
          <img className={styles.item__logo} src={logo} alt='blog-logo' />
        </a>
      </div>

      <div className={styles.item}>
        <div className={styles.actions}>
          {!isAuth && (
            <a href='/' className={styles.action}>
              <BiLogInCircle className={styles.item__icon} />
              <p className={styles['item__icon-text']}>Войти</p>
            </a>
          )}
          {isAuth && (
            <>
              <a href='/' className={styles.action}>
                <BiLogOutCircle className={styles.item__icon} />
                <p className={styles['item__icon-text']}>Выйти</p>
              </a>
              <a href='/' className={styles.action}>
                <BiEdit className={styles.item__icon} />
                <p className={styles['item__icon-text']}>Написать статью</p>
              </a>
            </>
          )}
        </div>
      </div>
      <div className={styles.item}>
        {isAuth && (
          <a href='/'>
            <img className={styles['item__user-avatar']} src={avatar} alt='user-avatar' />
          </a>
        )}
      </div>
    </div>
  )
}
