import Logo from './Logo'

export default {
  title: 'Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
  args: {
    isDisabled: false,
    className: '',
    children: 'Logo',
  },
}

export const Primary = {
  args: {
    variant: 'primary',
  },
}
