import { Link } from 'react-router-dom'
import { Zap } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'Components', href: '/components' },
    { label: 'Sections', href: '/sections' },
    { label: 'Templates', href: '/templates' },
    { label: 'Changelog', href: '#' },
  ],
  Resources: [
    { label: 'Documentation', href: '/docs' },
    { label: 'Figma Kit', href: '#' },
    { label: 'GitHub', href: '#' },
    { label: 'Discord', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-buildora-600 rounded-xl flex items-center justify-center">
                <Zap size={15} className="text-white" fill="white" />
              </div>
              <span className="font-display font-bold text-neutral-900 dark:text-white">UIBuildora</span>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xs">
              Premium React and Tailwind CSS components for modern SaaS products.
            </p>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
                {group}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            © 2026 UIBuildora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
