import { Link } from 'react-router-dom'
import { ArrowRight, Shield, BookOpen, Users, Landmark, Waves, Trees, MapPin, Star, Mail, Phone } from 'lucide-react'
import Reveal from '../components/Reveal'
import { useTranslation } from '../context/LanguageContext'
import { SquareAndCompass, EyeOfProvidence, MasonicLevel, Anchor, StarOfSolomon } from '../components/MasonicIcons'

export default function Inicio() {
  const { t } = useTranslation()

  const stats = [
    { n: '1978',   label: t('inicio.stat1_label') },
    { n: 'No. 69', label: t('inicio.stat2_label') },
    { n: '3',      label: t('inicio.stat3_label') },
    { n: 'CMI',    label: t('inicio.stat4_label') },
  ]

  const pilares = [
    { Icon: EyeOfProvidence, titulo: t('inicio.pilar1'), desc: t('inicio.pilar1_desc') },
    { Icon: MasonicLevel,    titulo: t('inicio.pilar2'), desc: t('inicio.pilar2_desc') },
    { Icon: Anchor,          titulo: t('inicio.pilar3'), desc: t('inicio.pilar3_desc') },
  ]

  const logias = [
    { region: t('inicio.logia1_region'), ciudad: t('inicio.logia1_ciudad'), dir: t('inicio.logia1_dir'), Icon: Landmark },
    { region: t('inicio.logia2_region'), ciudad: t('inicio.logia2_ciudad'), dir: t('inicio.logia2_dir'), Icon: StarOfSolomon, email: t('inicio.logia2_email'), phone: t('inicio.logia2_telefono') },
    { region: t('inicio.logia3_region'), ciudad: t('inicio.logia3_ciudad'), dir: t('inicio.logia3_dir'), Icon: Trees },
  ]

  const fhmData = [
    { label: t('inicio.fhm_ubicacion'),   icon: MapPin },
    { label: t('inicio.fhm_obediencia'),  icon: Landmark },
    { label: t('inicio.fhm_rito'),        icon: Star },
  ]

  return (
    <main className="pt-16">

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Fondo: foto del templo con overlay */}
        <div className="absolute inset-0">
          <img src="/templo.jpg" alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f2347]/92 via-[#1A3A6B]/85 to-[#0f2347]/90" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 py-20 md:py-28">
          {/* Encabezado institucional */}
          <Reveal from="fade">
            <p className="text-[#C9A84C] text-[11px] font-semibold uppercase tracking-[0.3em] text-center mb-10">
              {t('inicio.label')}
            </p>
          </Reveal>


          {/* Título principal */}
          <Reveal delay={200}>
            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              {t('inicio.titulo1')}<br />{t('inicio.titulo2')}
            </h1>
            <p className="text-center text-[#C9A84C] text-base md:text-lg font-semibold mt-2 tracking-widest uppercase">— Delegación Regional Guayas y Santa Elena —</p>
          </Reveal>

          {/* Descripción */}
          <Reveal delay={280}>
            <p className="mt-6 text-center text-sm md:text-base text-white/75 leading-relaxed max-w-2xl mx-auto">
              {t('inicio.desc')}
            </p>
          </Reveal>

          {/* Botón */}
          <Reveal delay={350}>
            <div className="mt-8 flex justify-center">
              <Link to="/masoneria" className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#b8943e] text-white font-semibold text-sm px-8 py-3.5 rounded transition-colors">
                {t('inicio.btn_masoneria')} <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>

          {/* Línea de legitimidad */}
          <Reveal delay={400}>
            <p className="mt-10 text-center text-white/40 text-[10px] uppercase tracking-[0.2em]">
              Miembro de la Confederación Masónica Interamericana · CMI · Fundada 4 de diciembre de 1978
            </p>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#1A3A6B]">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#C9A84C]" style={{ fontFamily: 'Georgia, serif' }}>{s.n}</p>
                <p className="text-xs text-[#94A3B8] mt-1 uppercase tracking-wider">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SOBRE — Qué es la Masonería */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
          <Reveal from="left">
            <div>
              <span className="section-label">{t('inicio.sobre_label')}</span>
              <span className="gold-bar mt-3" />
              <h2 className="section-title mt-1">{t('inicio.sobre_titulo')}</h2>
              <p className="mt-5 text-[#4B5563] text-sm leading-relaxed">{t('inicio.sobre_p1')}</p>
              <p className="mt-4 text-[#4B5563] text-sm leading-relaxed">{t('inicio.sobre_p2')}</p>
              <Link to="/masoneria" className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#1A3A6B] hover:underline">
                {t('inicio.conocer_mas')} <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-4">
            {pilares.map((p, i) => (
              <Reveal key={p.titulo} from="right" delay={i * 100}>
                <div className="card p-6 flex gap-4">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0">
                    <p.Icon size={28} color="#1A3A6B" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A3A6B] text-sm mb-1">{t('inicio.pilar')} {p.titulo}</h3>
                    <p className="text-xs text-[#6B7280] leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GUAYAS — La Gran Logia en Guayaquil */}
      <section className="bg-[#1A3A6B] py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <Reveal from="left">
            <div>
              <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest">{t('inicio.guayas_label')}</span>
              <span className="block w-10 h-0.5 bg-[#C9A84C] mt-3 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                {t('inicio.guayas_titulo')}
              </h2>
              <p className="mt-5 text-[#94A3B8] text-sm leading-relaxed">{t('inicio.guayas_p1')}</p>
              <p className="mt-4 text-[#94A3B8] text-sm leading-relaxed">{t('inicio.guayas_p2')}</p>
            </div>
          </Reveal>
          <Reveal from="right" delay={100}>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C9A84C]/20 mb-5">
                <MapPin size={28} className="text-[#C9A84C]" />
              </div>
              <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-2">Guayaquil</p>
              <h3 className="text-white text-xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>Provincia del Guayas</h3>
              <p className="text-[#94A3B8] text-xs mt-3">Representación oficial de la Gran Logia Equinoccial del Ecuador en la provincia del Guayas</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FRANCISCO HUERTA MONTALVO — Sección destacada */}
      <section className="py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <span className="section-label">{t('inicio.fhm_label')}</span>
              <span className="gold-bar mt-3 mx-auto" />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative bg-gradient-to-br from-[#F4F7FB] to-[#EEF2FF] border border-[#E2E8F0] rounded-xl overflow-hidden">
              {/* Símbolo decorativo fondo */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none hidden md:block">
                <SquareAndCompass size={220} color="#1A3A6B" />
              </div>

              <div className="p-6 md:p-12 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
                {/* Texto */}
                <div>
                  <div className="inline-flex items-center bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#8B6914] text-xs font-semibold px-3 py-1.5 rounded mb-4">
                    {t('inicio.fhm_badge')}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1A3A6B] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                    {t('inicio.fhm_titulo')}
                  </h2>
                  <p className="mt-4 text-sm text-[#4B5563] leading-relaxed">
                    {t('inicio.fhm_desc')}
                  </p>
                  <Link to="/logia" className="mt-6 inline-flex items-center gap-2 btn-primary">
                    {t('inicio.btn_conocer_logia')} <ArrowRight size={15} />
                  </Link>
                </div>

                {/* Datos */}
                <div className="flex flex-col gap-4">
                  {/* Número destacado */}
                  <div className="text-center bg-[#1A3A6B] text-white rounded-lg p-6 mb-2">
                    <p className="text-5xl font-bold text-[#C9A84C]" style={{ fontFamily: 'Georgia, serif' }}>69</p>
                    <p className="text-xs text-[#94A3B8] mt-1 uppercase tracking-widest">Número de Logia</p>
                  </div>
                  {fhmData.map(({ label, icon: Icon }, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white rounded-lg px-5 py-3 border border-[#E2E8F0]">
                      <div className="w-8 h-8 rounded bg-[#EEF2FF] flex items-center justify-center shrink-0">
                        <Icon size={15} className="text-[#1A3A6B]" />
                      </div>
                      <p className="text-xs text-[#4B5563] leading-snug">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LOGIAS REGIONALES */}
      <section className="bg-[#F4F7FB] py-20 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <span className="section-label">{t('inicio.logias_label')}</span>
              <h2 className="section-title mt-3">{t('inicio.logias_titulo')}</h2>
              <p className="mt-3 text-sm text-[#6B7280] max-w-xl mx-auto">{t('inicio.logias_desc')}</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {logias.map((l, i) => (
              <Reveal key={l.ciudad} delay={i * 120}>
                <div className="card p-8 text-center">
                  <l.Icon size={24} className="text-[#1A3A6B] mx-auto mb-4" />
                  <p className="section-label mb-1">{l.region}</p>
                  <h3 className="font-semibold text-[#1A3A6B] text-base mb-2" style={{ fontFamily: 'Georgia, serif' }}>{l.ciudad}</h3>
                  <p className="text-xs text-[#9CA3AF]">{l.dir}</p>
                  {l.email && (
                    <div className="mt-3 flex flex-col gap-1.5">
                      <a href={`mailto:${l.email}`} className="flex items-center justify-center gap-1.5 text-xs text-[#1A3A6B] hover:underline">
                        <Mail size={11} /> {l.email}
                      </a>
                      <a href={`tel:${l.phone}`} className="flex items-center justify-center gap-1.5 text-xs text-[#9CA3AF]">
                        <Phone size={11} /> {l.phone}
                      </a>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Reveal>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="section-label">{t('inicio.cta_label')}</span>
            <h2 className="section-title mt-3">{t('inicio.cta_titulo')}</h2>
            <p className="mt-4 text-sm text-[#6B7280] leading-relaxed">{t('inicio.cta_desc')}</p>
          </div>
        </Reveal>
      </section>

    </main>
  )
}
