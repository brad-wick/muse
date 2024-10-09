import {
  Link as AriaLink,
  LinkProps as AriaLinkProps,
  composeRenderProps,
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { focusRing } from '../utils'

interface LinkProps extends AriaLinkProps {
  variant?: 'primary' | 'secondary'
}

const styles = tv({
  extend: focusRing,
  base: 'px-3 py-2 text-center text-white transition rounded-lg cursor-pointer',
  variants: {
    variant: {
      primary:
        'font-semibold text-xl bg-[#747474] bg-opacity-5 border border-white border-opacity-20 hover:border-opacity-80 hover:scale-105 pressed:scale-95',
      secondary:
        'bg-transparent text-lg border border-white border-opacity-0 hover:border-opacity-80',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export function Link(props: LinkProps) {
  return (
    <AriaLink
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        styles({ ...renderProps, className, variant: props.variant })
      )}
    />
  )
}
