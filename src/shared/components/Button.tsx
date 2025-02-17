// Button.tsx
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import { buttonStyles } from '../styles/button.style'

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: 'primary' | 'secondary' | 'muted' | 'link'
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  className?: string
  useAnimation?: boolean
}

export const Button = ({
  variant = 'primary',
  useAnimation = false,
  icon,
  iconPosition = 'left',
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${buttonStyles.base} ${useAnimation && buttonStyles.animation} ${buttonStyles.variants[variant]} ${className ?? ''}`}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className={buttonStyles.icon.left}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className={buttonStyles.icon.right}>{icon}</span>
      )}
    </button>
  )
}
