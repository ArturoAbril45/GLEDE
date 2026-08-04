import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Mail, ChevronDown } from 'lucide-react'
import { useTranslation } from '../context/LanguageContext'

const navLinks = [
  { to: '/',               label: 'Inicio' },
  { to: '/masoneria',      label: 'Masonería' },
  { to: '/historia',       label: 'Historia' },
  { to: '/identidad',      label: 'Identidad' },
  { to: '/crecimiento',    label: 'Crecimiento' },
  { to: '/ingreso',        label: 'Solicitar Ingreso' },
]

const socials = [
  {
    label: 'X',
    href: '#',
    bg: '#000000',
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="white">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    bg: '#FF0000',
    icon: (
      <svg width="22" height="19" viewBox="0 0 24 24" fill="white">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    bg: '#C13584',
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="white">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'Flickr',
    href: '#',
    bg: '#FF0084',
    icon: (
      <svg width="24" height="19" viewBox="0 0 24 24" fill="white">
        <path d="M6.5 7a5 5 0 1 0 0 10A5 5 0 0 0 6.5 7zm11 0a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    bg: '#0077B5',
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="white">
        <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"/>
      </svg>
    ),
  },
]

const idiomas = [
  { code: 'ES', flag: 'https://www.unemi.edu.ec/wp-content/plugins/gtranslate/flags/svg/es.svg', label: 'Español' },
  { code: 'EN', flag: 'https://www.unemi.edu.ec/wp-content/plugins/gtranslate/flags/svg/en.svg', label: 'English' },
]

function LangSelector() {
  const [open, setOpen] = useState(false)
  const { lang: currentLang, setLang: setGlobalLang } = useTranslation()
  const lang = idiomas.find(i => i.code === currentLang) ?? idiomas[0]

  function select(item) {
    setGlobalLang(item.code)
    setOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-2 bg-white hover:bg-gray-50 transition-colors border border-white/20 rounded-lg px-3 py-2 text-sm text-[#1A3A6B]"
      >
        <img src={lang.flag} alt={lang.code} className="w-5 h-4 object-cover rounded-sm" />
        <span className="font-medium text-xs tracking-wide">{lang.code}</span>
        <ChevronDown size={12} className={`text-[#1A3A6B]/60 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full mt-2 left-0 bg-white border border-[#E2E8F0] rounded overflow-hidden shadow-lg min-w-[130px] z-50">
          {idiomas.map(l => (
            <button
              key={l.code}
              onClick={() => select(l)}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-xs text-left transition-colors
                ${lang.code === l.code ? 'bg-[#F4F7FB] text-[#1A3A6B] font-semibold' : 'text-[#374151] hover:bg-[#F4F7FB] hover:text-[#1A3A6B]'}`}
            >
              <img src={l.flag} alt={l.code} className="w-5 h-4 object-cover rounded-sm" />
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Footer() {
  const { t } = useTranslation()

  const navLinks = [
    { to: '/',               label: t('nav.inicio') },
    { to: '/masoneria',      label: t('nav.masoneria') },
    { to: '/historia',       label: t('nav.historia') },
    { to: '/identidad',      label: t('nav.identidad') },
    { to: '/crecimiento',    label: t('nav.crecimiento') },
    { to: '/ingreso',        label: t('nav.solicitar') },
  ]

  return (
    <footer className="bg-[#0f2548] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* Marca */}
        <div>
          <div className="mb-4">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-white">GLEDE</p>
            <p className="text-[9px] text-[#94A3B8] tracking-wide uppercase mt-0.5">{t('footer.masoneria_regular')}</p>
          </div>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            {t('footer.tagline1')}<br />{t('footer.tagline2')}
          </p>
          <div className="flex items-center gap-2 mt-5">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: s.bg }}
                className="w-8 h-8 rounded flex items-center justify-center hover:opacity-85 transition-opacity"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <div className="mt-4">
            <LangSelector />
          </div>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#94A3B8] mb-5">{t('footer.navegacion')}</h4>
          <div className="flex flex-col gap-2.5">
            {navLinks.map(l => (
              <Link key={l.to} to={l.to} className="text-sm text-[#CBD5E1] hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#94A3B8] mb-5">{t('footer.sede')}</h4>
          <div className="flex flex-col gap-3 text-sm text-[#CBD5E1]">
            <div className="flex items-start gap-2.5">
              <MapPin size={13} className="text-[#C9A84C] mt-0.5 shrink-0" />
              <span>{t('footer.direccion')}<br />{t('footer.ciudad')}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail size={13} className="text-[#C9A84C]" />
              <span>contacto@glede.org.ec</span>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#94A3B8] mb-2">{t('footer.cmi_label')}</p>
            <p className="text-xs text-[#64748B]">{t('footer.cmi_full')}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-[10px] text-[#475569] uppercase tracking-widest">
        © {new Date().getFullYear()} GLEDE · Gran Logia Equinoccial del Ecuador
      </div>
    </footer>
  )
}
