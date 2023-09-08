import axios from 'axios'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Url } from 'url'

import { Button } from '@components'
import { fetchAuthRegister } from '@reduxStore/authSlice/asyncAction'
import { selectIsAuth } from '@reduxStore/authSlice/authSlice'
import { useAppDispatch } from '@reduxStore/store'
import { upload } from '@services/api'
import { baseUrl } from '@services/api/base'

import { InputField } from '../InputField/InputField'

import styles from './RegisterForm.module.scss'

export const RegisterForm: React.FC = () => {
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
      fullName: '',
      avatarUrl: undefined,
      password: ''
    },
    mode: 'onChange'
  })
  type FormValues = {
    email: string
    fullName: string
    avatarUrl: FileList
    password: string
  }

  const enum FormFiled {
    email = 'email',
    fullName = 'fullName',
    avatarUrl = 'avatarUrl',
    password = 'password'
  }

  const handleUploadFile = async (file: File) => {
    try {
      const formData = new FormData()
      formData.append('image', file)

      const data = await upload(formData)

      const url = import.meta.env.VITE_BACKEND_BASE_URL + data.url
      return url
    } catch (err) {
      console.warn(err)
      alert(`Ошибка при загрузке: ${err}`)
    }
  }

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    const avatarUrl = await handleUploadFile(formData.avatarUrl[0])

    const data = await dispatch(
      fetchAuthRegister({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        avatarUrl
      })
    )

    if (!data.payload) {
      return alert('Не удалось зарегистироваться')
    }
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token)
    }
  }

  if (isAuth) {
    return <Navigate to='/' />
  }

  const onFieldClear = (field: FormFiled) => {
    resetField(field, { keepDirty: false, keepError: false, keepTouched: false, defaultValue: '' })
  }

  return (
    <div className={styles['form-wrapper']}>
      <h2 className={styles['form-title']}>Регистрация</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <InputField
          placeholder='Введите имя'
          type='text'
          filedTitle='Ваше имя'
          isError={Boolean(errors.fullName?.message)}
          errorText={errors.fullName?.message}
          handleClearInput={() => onFieldClear(FormFiled.fullName)}
          {...register('fullName', { required: 'Введите имя' })}
        />
        <InputField
          placeholder='Загрузите аватар'
          type='file'
          filedTitle='Ваш аватар'
          isError={Boolean(errors.avatarUrl?.message)}
          errorText={errors.avatarUrl?.message}
          handleClearInput={() => onFieldClear(FormFiled.avatarUrl)}
          {...register('avatarUrl', { required: 'Загрузите аватар' })}
        />
        <InputField
          placeholder='Введите email'
          type='email'
          filedTitle='email'
          isError={Boolean(errors.email?.message)}
          errorText={errors.email?.message}
          handleClearInput={() => onFieldClear(FormFiled.email)}
          {...register('email', { required: 'Введите email' })}
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
        <Button className={styles.button} innerText='Зарегистрироваться' type='submit' />
      </form>
    </div>
  )
}
