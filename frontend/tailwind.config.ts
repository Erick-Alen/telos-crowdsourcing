import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'black-color': 'var(--black-color)',
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        'sub-30': 'var(--sub-30)',
        sub: 'var(--sub)',
      },
      backgroundImage: {
        'on-code': 'var(--on-code)',
        'on-code-70': 'var(--on-code-70)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        'screen-navbar': 'calc(100vh - 64px) !important'
      },
    },
  },
  plugins: [],
}
export default config
