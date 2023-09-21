import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { BiX } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import SimpleMDE from 'react-simplemde-editor'

import { Button } from '@components'
import { selectIsAuth } from '@reduxStore/authSlice/authSlice'
import { RootState, useAppDispatch } from '@reduxStore/store'
import { getPost, patchPosts, postPosts, upload } from '@services/api'

import 'easymde/dist/easymde.min.css'
import styles from './NewPostPage.module.scss'

export const NewPostPage: React.FC = () => {
  const [title, setTitle] = useState<string>('')
  const [previewImageUrl, setPreviewImageUrl] = useState('')
  const [file, setFile] = useState<File>()
  const [tags, setTags] = useState<string[]>([])
  const [text, setText] = useState('')
  const [errors, setErrors] = useState<string[]>([])
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      getPost(id).then((post) => {
        console.log(post)
        setTitle(post.title)
        setPreviewImageUrl(post.imageUrl)
        setTags([...post.tags])
        setText(post.text)
      })
    }
  }, [])

  const onChangeMde = useCallback((value: string) => {
    setText(value)
  }, [])

  const names = {
    edit: {
      title: 'Редактирование статьи',
      button: 'Загрузить измененную статью'
    },
    new: {
      title: 'Создание нового поста',
      button: 'Опубликовать новость'
    }
  }

  const options = useMemo(
    () =>
      ({
        spellChecker: false,
        maxHeight: '400px',
        autofocus: true,
        placeholder: 'Введите текст...',
        status: false,
        autosave: {
          enabled: true,
          delay: 1000
        }
      }) as SimpleMDE.Options,
    []
  )

  const isAuth = useSelector(selectIsAuth)

  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const onClearTitle = () => {
    setTitle('')
  }

  const onSelectFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.item(0) as File)
    setPreviewImageUrl(URL.createObjectURL(event.target.files?.item(0) as File))
  }

  const onRemoveImage = () => {
    setPreviewImageUrl('')
  }

  const onAddTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const eventTarget = event.target as HTMLInputElement
    if (event.key === 'Enter' && eventTarget.value !== '') {
      setTags([...tags, eventTarget.value])
      eventTarget.value = ''
    }
  }

  const onRemoveTag = (index: number) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)])
  }

  const uploadFileToServer = async (file: File) => {
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

  const onPublishPost = async () => {
    setErrors([])
    let fileUrl = ''
    if (file) {
      fileUrl = await uploadFileToServer(file as File)
    }
    try {
      if (!id) {
        const post = await postPosts(title, text, tags, fileUrl)
        navigate(`/post/${post._id}`)
      } else {
        const post = await patchPosts(id, title, text, tags, fileUrl)
        navigate(`/post/${id}`)
      }
    } catch (err) {
      err.response.data.forEach((item) => {
        setErrors((prevArray) => [...prevArray, item.msg])
      })
    }
  }
  console.log(errors)
  return (
    <div className={styles.wrapper}>
      {!window.localStorage.getItem('token') && !isAuth && <Navigate to='/' />}
      <h1 className={styles.title}>{id ? names.edit.title : names.new.title}</h1>
      <div className={styles['new-post']}>
        <div className={styles['new-post__title']}>
          <input
            required
            type='text'
            value={title}
            placeholder='Введите заголовок поста'
            className={styles['new-post__title-input']}
            onChange={(e) => setTitle(e.target.value)}
          />
          <BiX className={styles['new-post__title-remove']} onClick={onClearTitle} />
        </div>
        <div className={styles['new-post__image']}>
          <Button
            color='light'
            onClick={() => fileInputRef.current?.click()}
            className={styles.button}
            innerText='  Загрузить превью новости'
          />
          <input required ref={fileInputRef} type='file' className={styles.file} hidden onChange={onSelectFile} />
          {previewImageUrl && (
            <div className={styles.preview}>
              <img className={styles.preview__image} src={previewImageUrl} alt='preview of post' />
              <Button innerText='Удалить картинку' onClick={onRemoveImage} className={styles.button} color='light' />
            </div>
          )}
        </div>
        <div className={styles['new-post__tags']}>
          <ul className={styles['tags-list']}>
            {tags.map((item, index) => (
              <li key={index} className={styles['single-tag']}>
                <p className={styles['single-tag__title']}>{item}</p>
                <BiX className={styles['single-tag__remove']} onClick={() => onRemoveTag(index)} />
              </li>
            ))}
          </ul>
          <input type='text' onKeyUp={(e) => onAddTag(e)} className={styles['tags-input']} placeholder='Введите тэги статьи через Enter' />
        </div>
        <SimpleMDE className={styles['new-post__text-editor']} options={options} value={text} onChange={onChangeMde} />
        {errors.length !== 0 && (
          <div className={styles.errors}>
            {errors.map((item, index) => (
              <p className={styles.error} key={index}>
                {item}
              </p>
            ))}
          </div>
        )}
        <Button onClick={onPublishPost} innerText={id ? names.edit.button : names.new.button} />
      </div>
    </div>
  )
}
