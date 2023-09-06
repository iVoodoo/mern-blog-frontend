import { RegisterForm } from '@components'

import styles from './RegisterPage.module.scss'

export const RegisterPage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <RegisterForm />
    </div>
  )
}
