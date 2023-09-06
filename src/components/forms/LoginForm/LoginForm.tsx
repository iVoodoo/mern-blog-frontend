import { SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'

import { Button } from '@components'
import { fetchAuthLogin } from '@reduxStore/authSlice/asyncAction'
import { selectIsAuth } from '@reduxStore/authSlice/authSlice'
import { useAppDispatch } from '@reduxStore/store'

import { InputField } from '../InputField/InputField'

import styles from './LoginForm.module.scss'

export const LoginForm: React.FC = () => {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onSubmit'
  })
  type FormValues = {
    email: string
    password: string
  }
  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    const data = await dispatch(fetchAuthLogin(formData))

    if (!data.payload) {
      return alert('Не удалось авторизоваться')
    }
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token)
    }
  }

  if (isAuth) {
    return <Navigate to='/' />
  }

  const enum FormFiled {
    email = 'email',
    password = 'password'
  }

  const onFieldClear = (field: FormFiled) => {
    resetField(field, { keepDirty: false, keepError: false, keepTouched: false, defaultValue: '' })
  }

  return (
    <div className={styles['form-wrapper']}>
      <h2 className={styles['form-title']}>Логин</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <InputField
          placeholder='Введите email'
          type='email'
          filedTitle='email'
          {...register('email', { required: 'Введите email' })}
          isError={Boolean(errors.email?.message)}
          errorText={errors.email?.message}
          handleClearInput={() => onFieldClear(FormFiled.email)}
        />
        <InputField
          placeholder='Введите пароль'
          type='password'
          filedTitle='Пароль'
          {...register('password', { required: 'Введите пароль' })}
          isError={Boolean(errors.password?.message)}
          errorText={errors.password?.message}
          handleClearInput={() => onFieldClear(FormFiled.password)}
        />
        <Button className={styles.button} innerText='Войти' type='submit' />
      </form>
      <Link to='/register' className={styles.redirect}>
        Зарегистрироваться
      </Link>
    </div>
  )
}
