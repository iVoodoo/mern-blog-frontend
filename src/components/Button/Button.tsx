import clsx from 'clsx'
import React from 'react'

import styles from './Button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  innerText: string
}

export const Button: React.FC<ButtonProps> = ({ type = 'button', innerText, ...props }) => {
  return (
    <button className={clsx(styles.button, props.className)} type={type}>
      {innerText}
    </button>
  )
}
