import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import CodeBlock from '../components/shared/CodeBlock'

const SECTIONS = [
  { id: 'getting-started', label: 'Getting Started' },
  { id: 'installation', label: 'Installation' },
  { id: 'usage', label: 'Usage' },
  { id: 'theming', label: 'Theming' },
  { id: 'dark-mode', label: 'Dark Mode' },
  { id: 'contributing', label: 'Contributing' },
]

const installCode = `# 1. Create a Vite + React project
npm create vite@latest my-app -- --template react
cd my-app

# 2. Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. Add Google Fonts (Syne + DM Sans) to index.html
# 4. Copy component code from UIBuildora — done!`

const tailwindConfigCode = `// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        buildora: {
          50: '#f0f4ff',
          500: '#6374f1',
          600: '#4f55e5',
          // ... full palette in the starter kit
        },
      },
    },
  },
}`

const usageCode = `// Copy any component from UIbuildora and paste into your project
// Example: Primary Button

export function Button({ children, variant = 'primary', size = 'md' }) {
  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  }

  return (
    <button
      className={\`inline-flex items-center gap-2 font-medium rounded-xl
        bg-buildora-600 hover:bg-buildora-700 text-white transition-all
        \${sizes[size]}\`}
    >
      {children}
    </button>
  )
}

// Usage in your app
<Button size="lg">Get started</Button>`

const darkModeCode = `// In your root component or layout
import { useState, useEffect } from 'react'

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggle: () => setTheme(t => t === 'dark' ? 'light' : 'dark') }}>
      {children}
    </ThemeContext.Provider>
  )
}`

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('getting-started')

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 flex gap-10">
      {/* Sidebar */}
      <aside className="hidden lg:block w-52 flex-shrink-0">
        <div className="sticky top-24">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 px-3 py-2">
            Documentation
          </p>
          <div className="flex flex-col gap-0.5">
            {SECTIONS.map(s => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                className={`sidebar-item ${activeSection === s.id ? 'active' : ''}`}
              >
                <ChevronRight size={13} className={activeSection === s.id ? 'opacity-100' : 'opacity-0'} />
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Content */}
      <div className="flex-1 min-w-0 max-w-3xl">
        {/* Getting Started */}
        <section id="getting-started" className="mb-14">
          <div className="flex items-center gap-2 text-xs text-neutral-400 dark:text-neutral-500 mb-3">
            <span>Docs</span>
            <ChevronRight size={12} />
            <span className="text-neutral-700 dark:text-neutral-300">Getting Started</span>
          </div>

          <h1 className="font-display text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Getting Started
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed mb-8 max-w-2xl">
            UIbuildora is a copy-paste component library. There's nothing to install —
            just pick a component, copy the code, and drop it into your project.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { step: '01', title: 'Browse components', desc: 'Explore the library and find components that fit your design.' },
              { step: '02', title: 'Copy the code', desc: 'Click "Copy code" on any component to get the React or HTML source.' },
              { step: '03', title: 'Paste & customize', desc: 'Drop the code into your project and adjust styles to match your brand.' },
            ].map(s => (
              <div key={s.step} className="card p-5">
                <div className="font-display text-3xl font-bold gradient-text mb-3">{s.step}</div>
                <h3 className="font-display font-semibold text-neutral-900 dark:text-neutral-100 mb-1.5">{s.title}</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <Link to="/components" className="btn-primary">
            Browse components <ArrowRight size={15} />
          </Link>
        </section>

        <hr className="border-neutral-200 dark:border-neutral-800 my-10" />

        {/* Installation */}
        <section id="installation" className="mb-14">
          <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-2">Installation</h2>
          <p className="text-neutral-500 dark:text-neutral-400 mb-6 leading-relaxed">
            UIbuildora components require <strong className="text-neutral-700 dark:text-neutral-300">React 18+</strong> and{' '}
            <strong className="text-neutral-700 dark:text-neutral-300">Tailwind CSS 3+</strong>. No npm package needed.
          </p>
          <CodeBlock code={installCode} language="bash" />
        </section>

        <hr className="border-neutral-200 dark:border-neutral-800 my-10" />

        {/* Usage */}
        <section id="usage" className="mb-14">
          <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-2">Usage</h2>
          <p className="text-neutral-500 dark:text-neutral-400 mb-6 leading-relaxed">
            Every component page shows you both a live preview and the source code. Click "Copy code"
            on the code panel, paste it anywhere in your project, and customize as needed.
          </p>
          <CodeBlock code={usageCode} language="jsx" />

          <div className="mt-6 p-5 rounded-xl bg-buildora-50 dark:bg-buildora-950/60 border border-buildora-200 dark:border-buildora-800">
            <p className="text-sm font-semibold text-buildora-800 dark:text-buildora-200 mb-1">💡 Pro tip</p>
            <p className="text-sm text-buildora-700/80 dark:text-buildora-300/80">
              Create a <code className="font-mono text-xs bg-buildora-100 dark:bg-buildora-900 px-1.5 py-0.5 rounded">components/ui/</code> folder in your project
              and paste all UIbuildora components there. This keeps your UI library organized and easy to import.
            </p>
          </div>
        </section>

        <hr className="border-neutral-200 dark:border-neutral-800 my-10" />

        {/* Theming */}
        <section id="theming" className="mb-14">
          <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-2">Theming</h2>
          <p className="text-neutral-500 dark:text-neutral-400 mb-6 leading-relaxed">
            UIbuildora uses a custom Tailwind color palette. Add the following to your <code className="font-mono text-sm">tailwind.config.js</code> to get
            the exact same color scale used in all components.
          </p>
          <CodeBlock code={tailwindConfigCode} language="js" />

          <div className="mt-6 grid grid-cols-5 gap-2">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(shade => (
              <div key={shade}>
                <div
                  className="h-10 rounded-lg mb-1.5 border border-neutral-200 dark:border-neutral-700"
                  style={{
                    backgroundColor: {
                      50: '#f0f4ff', 100: '#e0e9ff', 200: '#c7d7fd', 300: '#a5bcfb',
                      400: '#8199f8', 500: '#6374f1', 600: '#4f55e5', 700: '#4144ca',
                      800: '#3638a3', 900: '#313381',
                    }[shade]
                  }}
                />
                <p className="text-xs text-neutral-500 text-center">{shade}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-neutral-200 dark:border-neutral-800 my-10" />

        {/* Dark Mode */}
        <section id="dark-mode" className="mb-14">
          <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-2">Dark Mode</h2>
          <p className="text-neutral-500 dark:text-neutral-400 mb-6 leading-relaxed">
            All UIbuildora components include dark mode variants using Tailwind's <code className="font-mono text-sm">dark:</code> prefix.
            Enable it by toggling the <code className="font-mono text-sm">dark</code> class on <code className="font-mono text-sm">{'<html>'}</code>.
          </p>
          <CodeBlock code={darkModeCode} language="jsx" />
        </section>
      </div>
    </div>
  )
}
