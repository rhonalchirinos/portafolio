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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        custom: ['var(--font-roboto-normal)'],
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'roboto-bold': ['var(--font-roboto-bold)'],
        poppins: ['Poppins', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
