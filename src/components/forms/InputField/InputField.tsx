import clsx from 'clsx'
import { forwardRef, useState } from 'react'
import { BiX } from 'react-icons/bi'

import styles from './InputField.module.scss'

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  type: React.HTMLInputTypeAttribute
  filedTitle: string
  isError?: boolean
  errorText?: string
  inputValue?: string
  handleChangeInput?: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleClearInput?: () => void
}

// eslint-disable-next-line react/display-name
export const InputField: React.FC<InputFieldProps> = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ placeholder, type, filedTitle, isError = false, errorText, inputValue, handleChangeInput, handleClearInput, ...props }, ref) => {
    return (
      <div>
        <p className={styles['input-title']}>{filedTitle}</p>
        <div
          className={clsx(styles['input-field'], {
            [styles['input-field__error']]: isError
          })}
        >
          <input
            {...props}
            ref={ref}
            className={clsx(styles.input, {
              [styles.input__error]: isError
            })}
            placeholder={placeholder}
            value={inputValue}
            type={type}
            onChange={handleChangeInput}
          />
          <BiX
            onClick={handleClearInput}
            className={clsx(styles['clear-icon'], {
              [styles['clear-icon__error']]: isError
            })}
          />
        </div>
        {isError && errorText && <p className={styles['error-text']}>{errorText}</p>}
      </div>
    )
  }
)
