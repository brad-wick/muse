import {
  composeRenderProps,
  Button as RACButton,
  ButtonProps as RACButtonProps,
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { focusRing } from '../utils'

export interface ButtonProps extends RACButtonProps {
  variant?: 'primary' | 'secondary' | 'destructive' | 'icon'
}

const button = tv({
  extend: focusRing,
  base: 'px-5 py-2 text-center text-white transition rounded-lg cursor-pointer',
  variants: {
    variant: {
      primary:
        'font-semibold bg-[#171717] bg-opacity-5 border border-white border-opacity-20 hover:border-opacity-80 hover:scale-105 pressed:scale-95',
      secondary:
        'bg-transparent border border-white border-opacity-10 hover:border-opacity-80',
      destructive: 'bg-red-700 hover:bg-red-800 pressed:bg-red-900 text-white',
      icon: 'p-2 flex items-center justify-center text-2xl bg-transparent border border-white border-opacity-10 hover:border-opacity-80 hover:bg-[#FE8C4A] pressed:bg-[#b16133]',
    },
    isDisabled: {
      true: 'bg-gray-100 dark:bg-zinc-800 text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText] border-black/5 dark:border-white/5',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export function Button(props: ButtonProps) {
  return (
    <RACButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        button({ ...renderProps, variant: props.variant, className })
      )}
    />
  )
}
