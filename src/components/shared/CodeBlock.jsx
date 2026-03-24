import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { useClipboard } from '../../hooks/useClipboard'

export default function CodeBlock({ code, language = 'jsx' }) {
  const { copied, copy } = useClipboard()
  const [activeTab, setActiveTab] = useState('react')

  if (typeof code === 'object') {
    // Multi-language mode
    return (
      <div className="rounded-xl overflow-hidden border border-neutral-800">
        <div className="flex items-center justify-between bg-neutral-900 px-4 py-2.5 border-b border-neutral-800">
          <div className="flex gap-1">
            {Object.keys(code).map(lang => (
              <button
                key={lang}
                onClick={() => setActiveTab(lang)}
                className={`px-3 py-1 rounded-md text-xs font-mono font-medium transition-all ${
                  activeTab === lang
                    ? 'bg-neutral-700 text-neutral-100'
                    : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                {lang === 'react' ? 'React' : 'HTML'}
              </button>
            ))}
          </div>
          <button
            onClick={() => copy(code[activeTab])}
            className="flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
          >
            {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <pre className="bg-neutral-950 text-neutral-300 text-xs font-mono leading-relaxed p-5 overflow-auto max-h-80">
          <code>{code[activeTab]}</code>
        </pre>
      </div>
    )
  }

  return (
    <div className="rounded-xl overflow-hidden border border-neutral-800">
      <div className="flex items-center justify-between bg-neutral-900 px-4 py-2.5 border-b border-neutral-800">
        <span className="text-xs font-mono text-neutral-500">{language}</span>
        <button
          onClick={() => copy(code)}
          className="flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
        >
          {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="bg-neutral-950 text-neutral-300 text-xs font-mono leading-relaxed p-5 overflow-auto max-h-80">
        <code>{code}</code>
      </pre>
    </div>
  )
}
