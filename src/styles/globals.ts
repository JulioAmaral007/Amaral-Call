import { globalCss } from '@ignite-ui/react'

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
})
