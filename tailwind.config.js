import { fontFamily } from 'tailwindcss/defaultTheme'
import * as plugUtils from 'tailwindcss/plugin'

// @ts-expect-error invalid export type
const createPlugin = plugUtils.default

const rosePineUIPlugin = createPlugin(
  ({ addUtilities, addBase, theme, addComponents, e, config }) => {
    addComponents({
      '.btn': {
        'background': theme('colors.muted').replace('<alpha-value>', '0.1'),
        'padding': theme('spacing.3'),
        'display': 'inline-flex',
        'height': theme('spacing.12'),
        'justifyContent': 'center',
        'paddingLeft': theme('spacing.6'),
        'paddingRight': theme('spacing.6'),
        'fontWeight': theme('fontWeight.medium'),
        'borderRadius': theme('borderRadius.full'),
        'cursor': 'pointer',
        '&:hover': {
          background: theme('colors.muted').replace('<alpha-value>', '0.2'),
        },
      },
    })
  },
  {
    theme: {
      colors: {
        base: 'hsl(var(--color-base) / <alpha-value>)',
        surface: 'hsl(var(--color-surface) / <alpha-value>)',
        overlay: 'hsl(var(--color-overlay) / <alpha-value>)',
        muted: 'hsl(var(--color-muted) / <alpha-value>)',
        subtle: 'hsl(var(--color-subtle) / <alpha-value>)',
        text: 'hsl(var(--color-text) / <alpha-value>)',
        love: 'hsl(var(--color-love) / <alpha-value>)',
        gold: 'hsl(var(--color-gold) / <alpha-value>)',
        rose: 'hsl(var(--color-rose) / <alpha-value>)',
        pine: 'hsl(var(--color-pine) / <alpha-value>)',
        foam: 'hsl(var(--color-foam) / <alpha-value>)',
        iris: 'hsl(var(--color-iris) / <alpha-value>)',
      },
    },
  }
)

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,tsx,jsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
    },
    extend: {
      borderColor: {
        DEFAULT: 'hsl(var(--color-muted) / 0.2)',
      },
      ringColor: {
        DEFAULT: 'hsl(var(--color-foam) / 0.2)',
      },
    },
  },
  plugins: [rosePineUIPlugin],
}
