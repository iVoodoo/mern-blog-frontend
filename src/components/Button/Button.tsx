import clsx from 'clsx'
import React from 'react'

import styles from './Button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  color?: 'dark' | 'light'
  innerText: string
}

export const Button: React.FC<ButtonProps> = ({ type = 'button', innerText, color = 'dark', ...props }) => {
  return (
    <button
      {...props}
      className={clsx(styles.button, props.className, {
        [styles['button-light']]: color === 'light',
        [styles['button-dark']]: color === 'dark'
      })}
      type={type}
    >
      {innerText}
    </button>
  )
}
