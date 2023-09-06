import { LoginForm } from '@components'

import styles from './LoginPage.module.scss'

export const LoginPage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <LoginForm />
    </div>
  )
}
