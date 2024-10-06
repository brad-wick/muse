import React from 'react'
import { Button } from 'react-aria-components'

export interface ButtonProps {
  /** Type of button? */
  type?: 'primary' | 'secondary'
  /** What background color to use */
  backgroundColor?: string
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large'
  /** Button contents */
  label: string
  /** RAC click handler */
  onPress?: () => void
}

export default function ButtonWrapper({
  type = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) {
  const [isPressed, setIsPressed] = React.useState(false)

  const sizeClasses = {
    small: 'py-2 px-4 text-sm',
    medium: 'py-3 px-6 text-base',
    large: 'py-4 px-8 text-lg',
  }

  const transitionClasses = {
    primary: ' active:scale-95 transition-transform ease-in-out duration-300',
    secondary:
      'hover:scale-105 active:scale-95 hover:border hover:border-white transition-transform ease-in-out duration-300',
  }

  const typeClasses = {
    primary:
      'bg-[#747474] bg-opacity-5 border-2 border-white border-opacity-20 text-white font-semibold',
    secondary: 'bg-transparent text-white font-normal',
  }

  return (
    <Button
      onPress={() => setIsPressed(true)}
      className={[
        'rounded-xl focus:outline-none',
        sizeClasses[size],
        typeClasses[type],
        transitionClasses[type],
        isPressed ? 'scale-95' : '',
      ].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </Button>
  )
}
