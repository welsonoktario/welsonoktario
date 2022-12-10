import { ReactNode } from 'react'
import styles from '../styles/components/AppButton.module.css'

type ButtonProps = {
  variant?: 'solid' | 'outlined' | 'clear'
  type?: 'button' | 'submit'
  onClick?: () => void
  children?: ReactNode
}

export const AppButton = ({
  variant = 'solid',
  type = 'button',
  onClick,
  children,
}: ButtonProps) => {
  const btnVariants = {
    solid: styles['btn-solid'],
    outlined: styles['btn-outlined'],
    clear: styles['btn-clear'],
  }

  return (
    <button
      className={`${styles.btn} ${btnVariants[variant]}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
