'use client'

import { useEffect, useState, createContext, useContext, ReactNode } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { translations, Language, TranslationKey } from '@/i18n/translations'

const LanguageContext = createContext<{
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}>({
  language: 'es',
  setLanguage: () => {},
  t: (key: TranslationKey) => key,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem('language') as Language | null
    const browserLanguage = window.navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
    const initialLanguage = storedLanguage ?? browserLanguage

    setLanguage(initialLanguage)
    document.documentElement.lang = initialLanguage
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem('language', language)
  }, [language])

  const t = (key: TranslationKey): string => {
    return translations[language][key]
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}

type Theme = 'light' | 'dark'

const ThemeContext = createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}>({
  theme: 'dark',
  setTheme: () => {},
  toggleTheme: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme') as Theme | null
    const initialTheme = storedTheme ?? 'dark'
    setTheme(initialTheme)
    document.documentElement.dataset.theme = initialTheme
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 rounded-full border border-[color:var(--header-border)] bg-[color:var(--header-chip)] p-1">
      <button
        type="button"
        onClick={() => setLanguage('es')}
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
          language === 'es'
            ? 'bg-sky-300 text-slate-950'
            : 'text-[color:var(--header-text-soft)] hover:text-[color:var(--header-text)]'
        }`}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
          language === 'en'
            ? 'bg-sky-300 text-slate-950'
            : 'text-[color:var(--header-text-soft)] hover:text-[color:var(--header-text)]'
        }`}
      >
        EN
      </button>
    </div>
  )
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { language } = useLanguage()

  const isDark = theme === 'dark'
  const label =
    language === 'es' ? (isDark ? 'Claro' : 'Oscuro') : isDark ? 'Light' : 'Dark'
  const ariaLabel =
    language === 'es'
      ? isDark
        ? 'Activar modo claro'
        : 'Activar modo oscuro'
      : isDark
        ? 'Enable light mode'
        : 'Enable dark mode'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-[color:var(--header-border)] bg-[color:var(--header-chip)] px-4 py-2 text-sm font-medium text-[color:var(--header-chip-text)] transition hover:opacity-90"
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      {isDark ? <FaSun className="text-xs" /> : <FaMoon className="text-xs" />}
      <span>{label}</span>
    </button>
  )
}
