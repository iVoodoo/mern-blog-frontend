import { Link } from 'react-router-dom'

import { Button } from '@components'

import styles from './ErrorPage.module.scss'

export const ErrorPage: React.FC = () => (
  <div className={styles.error}>
    <span className={styles.error__code}>404</span>
    <p className={styles.error__text}>Страница не найдена</p>
    <Link to='/' className={styles.error__button}>
      <Button innerText='Вернуться на главную' />
    </Link>
  </div>
)
