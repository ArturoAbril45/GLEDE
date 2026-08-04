import { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useTranslation } from '../context/LanguageContext'

const socials = [
  {
    label: 'X',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg width="18" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'Flickr',
    href: '#',
    icon: (
      <svg width="20" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.5 7a5 5 0 1 0 0 10A5 5 0 0 0 6.5 7zm11 0a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/>
      </svg>
    ),
  },
]

function SocialIcons({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map(s => (
        <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer"
          className="text-[#6B7280] hover:text-[#1A3A6B] transition-colors">
          {s.icon}
        </a>
      ))}
    </div>
  )
}

function HistoriaDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const { t } = useTranslation()

  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const items = [
    { to: '/historia',        label: t('nav.historia_glede') },
    { to: '/historia-global', label: t('nav.perspectiva')    },
  ]

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-1 text-sm text-[#4B5563] hover:text-[#1A3A6B] transition-colors"
      >
        {t('nav.historia')} <ChevronDown size={13} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-[#E2E8F0] rounded shadow-md py-1 z-50">
          {items.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 text-sm transition-colors ${isActive ? 'text-[#1A3A6B] font-semibold bg-[#F4F7FB]' : 'text-[#4B5563] hover:bg-[#F4F7FB] hover:text-[#1A3A6B]'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  const links = [
    { to: '/',          label: t('nav.inicio')    },
    { to: '/masoneria', label: t('nav.masoneria') },
    { to: '/logia',     label: t('nav.logia')     },
  ]

  const mobileLinks = [
    { to: '/',                label: t('nav.inicio')         },
    { to: '/masoneria',       label: t('nav.masoneria')      },
    { to: '/historia',        label: t('nav.historia_glede') },
    { to: '/historia-global', label: t('nav.perspectiva')    },
    { to: '/logia',           label: t('nav.logia')          },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link to="/" className="flex items-center shrink-0">
          <div className="leading-none">
            <p className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#1A3A6B]">GLEDE</p>
            <p className="text-[9px] text-[#6B7280] tracking-wide uppercase">Masonería Regular</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `text-sm transition-colors ${isActive ? 'text-[#1A3A6B] font-semibold' : 'text-[#4B5563] hover:text-[#1A3A6B]'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <HistoriaDropdown />
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <SocialIcons />
          <div className="w-px h-5 bg-[#E2E8F0]" />
          <Link to="/ingreso" className="btn-primary text-sm">
            {t('nav.solicitar')}
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-[#1A3A6B]"
          onClick={() => setOpen(v => !v)}
          aria-label="Menú"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-[#E2E8F0] px-6 pb-5 pt-3">
          <nav className="flex flex-col gap-3">
            {mobileLinks.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm py-1.5 border-b border-[#F1F5F9] ${isActive ? 'text-[#1A3A6B] font-semibold' : 'text-[#4B5563]'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/ingreso" className="btn-primary mt-2 justify-center" onClick={() => setOpen(false)}>
              {t('nav.solicitar')}
            </Link>
            <SocialIcons className="mt-3 justify-center" />
          </nav>
        </div>
      )}
    </header>
  )
}
