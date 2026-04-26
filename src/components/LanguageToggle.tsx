'use client'

import { useState, createContext, useContext, ReactNode } from 'react'
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

  const t = (key: TranslationKey): string => {
    return translations[language][key]
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 rounded-full border border-slate-300 bg-white p-1">
      <button
        onClick={() => setLanguage('es')}
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
          language === 'es' ? 'bg-sky-400 text-slate-900' : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
          language === 'en' ? 'bg-sky-400 text-slate-900' : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        EN
      </button>
    </div>
  )
}
