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
        custom: ['var(--font-inter)', 'var(--font-ibm-plex-sans)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'var(--font-ibm-plex-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'var(--font-fira-code)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
