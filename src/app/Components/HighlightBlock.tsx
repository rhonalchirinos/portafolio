'use client'

import React, { useEffect, useRef } from 'react'
import hljs from 'highlight.js'

import 'highlight.js/styles/atom-one-dark.css'

interface HighlightBlockProps {
  language?: string
  code: string
}

export default function HighlightBlock({ language = 'go', code }: HighlightBlockProps) {
  const codeRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current)
    }
  }, [code])

  return (
    <pre className="rounded overflow-x-auto">
      <code ref={codeRef} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  )
}
