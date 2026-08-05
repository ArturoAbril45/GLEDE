import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Landmark, Star, Calendar, CheckCircle, Users, BookOpen, Mail, Phone, Globe } from 'lucide-react'
import Reveal from '../components/Reveal'
import { useTranslation } from '../context/LanguageContext'
import { SquareAndCompass, EyeOfProvidence, PlumbBob, MasonicLevel, Anchor, Trowel, StarOfSolomon } from '../components/MasonicIcons'

export default function FranciscoHuerta() {
  const { t } = useTranslation()

  const ficha = [
    { k: t('fhm.f1_k'), v: t('fhm.f1_v') },
    { k: t('fhm.f2_k'), v: t('fhm.f2_v') },
    { k: t('fhm.f3_k'), v: t('fhm.f3_v') },
    { k: t('fhm.f4_k'), v: t('fhm.f4_v') },
    { k: t('fhm.f5_k'), v: t('fhm.f5_v') },
    { k: t('fhm.f6_k'), v: t('fhm.f6_v') },
    { k: t('fhm.f7_k'), v: t('fhm.f7_v') },
    { k: t('fhm.f8_k'), v: t('fhm.f8_v') },
  ]

  const pilares = [
    { Icon: EyeOfProvidence, titulo: t('fhm.p1_titulo'), desc: t('fhm.p1_desc') },
    { Icon: MasonicLevel,    titulo: t('fhm.p2_titulo'), desc: t('fhm.p2_desc') },
    { Icon: PlumbBob,        titulo: t('fhm.p3_titulo'), desc: t('fhm.p3_desc') },
  ]

  const timeline = [
    { año: t('fhm.h1_año'), titulo: t('fhm.h1_titulo'), desc: t('fhm.h1_desc') },
    { año: t('fhm.h2_año'), titulo: t('fhm.h2_titulo'), desc: t('fhm.h2_desc') },
    { año: t('fhm.h3_año'), titulo: t('fhm.h3_titulo'), desc: t('fhm.h3_desc') },
  ]

  const actividades = [
    { Icon: SquareAndCompass, titulo: t('fhm.a1_titulo'), desc: t('fhm.a1_desc') },
    { Icon: EyeOfProvidence,  titulo: t('fhm.a2_titulo'), desc: t('fhm.a2_desc') },
    { Icon: Anchor,           titulo: t('fhm.a3_titulo'), desc: t('fhm.a3_desc') },
    { Icon: Trowel,           titulo: t('fhm.a4_titulo'), desc: t('fhm.a4_desc') },
    { Icon: StarOfSolomon,    titulo: t('fhm.a5_titulo'), desc: t('fhm.a5_desc'), link: 'https://demolay.org' },
    { Icon: MasonicLevel,     titulo: t('fhm.a6_titulo'), desc: t('fhm.a6_desc') },
  ]

  return (
    <main className="pt-16">

      {/* HERO */}
      <section className="bg-[#1A3A6B] border-b border-white/10 relative overflow-hidden">
        {/* Símbolo decorativo fondo */}
        <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none hidden md:block">
          <SquareAndCompass size={380} color="white" />
        </div>
        <div className="max-w-4xl mx-auto px-5 py-20 md:py-28 relative z-10">
          <Reveal from="fade">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#C9A84C] text-xs font-semibold px-3 py-1.5 rounded">
                {t('fhm.label')}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[#94A3B8] text-xs">
                <MapPin size={11} />
                {t('fhm.hero_badge')}
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              {t('fhm.titulo')}
            </h1>
            <p className="mt-2 text-[#C9A84C] text-lg font-semibold tracking-widest uppercase">— Guayas</p>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 text-base text-[#94A3B8] leading-relaxed max-w-2xl">{t('fhm.desc')}</p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-8">
              <Link to="/masoneria" className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#94A3B8] border border-white/20 px-6 py-3 rounded hover:bg-white/5 transition-colors">
                {t('fhm.btn_masoneria')}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NÚMERO Y FICHA */}
      <section className="py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-start">

          {/* Número destacado */}
          <Reveal from="left">
            <div className="bg-[#1A3A6B] rounded-xl p-10 text-center">
              <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-3">{t('fhm.numero_label')}</p>
              <p className="text-8xl font-bold text-[#C9A84C]" style={{ fontFamily: 'Georgia, serif' }}>69</p>
              <p className="text-[#94A3B8] text-xs mt-4 leading-relaxed">{t('fhm.numero_desc')}</p>
            </div>
          </Reveal>

          {/* Ficha */}
          <Reveal delay={100} className="md:col-span-2">
            <div>
              <span className="section-label">{t('fhm.ficha_label')}</span>
              <span className="gold-bar mt-3" />
              <h2 className="section-title mt-1 mb-8">{t('fhm.ficha_titulo')}</h2>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                {ficha.map(({ k, v }) => (
                  <div key={k} className="border-b border-[#F1F5F9] pb-4">
                    <p className="text-[10px] text-[#9CA3AF] uppercase tracking-wider mb-1">{k}</p>
                    <p className="text-sm font-semibold text-[#1A3A6B]">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOTO LOGIA FHM */}
      <section className="py-0">
        <Reveal from="fade">
          <div className="relative w-full h-72 md:h-96 overflow-hidden">
            <img
              src="/logia-fhm.jpg"
              alt="Respetable Logia Simbólica Francisco Huerta Montalvo No. 69"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A6B]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 px-8 py-6">
              <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-1">Guayas · Ecuador</p>
              <h3 className="text-white text-xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
                R.·.L.·.S. Francisco Huerta Montalvo No. 69
              </h3>
            </div>
          </div>
        </Reveal>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="bg-[#F4F7FB] py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <span className="section-label">{t('fhm.mv_label')}</span>
              <span className="gold-bar mt-3 mx-auto" />
              <h2 className="section-title mt-1">{t('fhm.mv_titulo')}</h2>
            </div>
          </Reveal>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <Reveal from="left">
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 h-full">
              <SquareAndCompass size={32} color="#1A3A6B" className="mb-4" />
              <h3 className="text-lg font-bold text-[#1A3A6B] mb-3" style={{ fontFamily: 'Georgia, serif' }}>{t('fhm.mision_titulo')}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{t('fhm.mision_desc')}</p>
            </div>
          </Reveal>
          <Reveal from="right" delay={100}>
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 h-full">
              <EyeOfProvidence size={32} color="#C9A84C" className="mb-4" />
              <h3 className="text-lg font-bold text-[#1A3A6B] mb-3" style={{ fontFamily: 'Georgia, serif' }}>{t('fhm.vision_titulo')}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{t('fhm.vision_desc')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PILARES */}
      <section className="py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <span className="section-label">{t('fhm.pilares_label')}</span>
              <span className="gold-bar mt-3 mx-auto" />
              <h2 className="section-title mt-1">{t('fhm.pilares_titulo')}</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {pilares.map((p, i) => (
              <Reveal key={p.titulo} from={i === 0 ? 'left' : i === 2 ? 'right' : 'fade'} delay={i * 120}>
                <div className="card p-8 text-center h-full">
                  <p.Icon size={38} color="#1A3A6B" className="mx-auto mb-5" />
                  <h3 className="font-bold text-[#1A3A6B] text-base mb-3" style={{ fontFamily: 'Georgia, serif' }}>{p.titulo}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="bg-[#1A3A6B] py-20 relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none">
          <EyeOfProvidence size={420} color="white" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="mb-14">
              <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest">{t('fhm.historia_label')}</span>
              <span className="block w-10 h-0.5 bg-[#C9A84C] mt-3 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>{t('fhm.historia_titulo')}</h2>
              <p className="mt-4 text-[#94A3B8] text-sm max-w-xl leading-relaxed">{t('fhm.historia_desc')}</p>
            </div>
          </Reveal>
          <div className="relative border-l-2 border-[#C9A84C]/40 ml-4 flex flex-col gap-10">
            {timeline.map((h, i) => (
              <Reveal key={h.año} delay={i * 120}>
                <div className="pl-8 relative">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#C9A84C] border-2 border-[#1A3A6B]" />
                  <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-1">{h.año}</p>
                  <h3 className="text-white font-bold text-base mb-2" style={{ fontFamily: 'Georgia, serif' }}>{h.titulo}</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{h.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVIDADES */}
      <section className="py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <span className="section-label">{t('fhm.actividades_label')}</span>
              <span className="gold-bar mt-3 mx-auto" />
              <h2 className="section-title mt-1">{t('fhm.actividades_titulo')}</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {actividades.map((a, i) => (
              <Reveal key={a.titulo} delay={i * 100}>
                <div className="card p-6 h-full flex flex-col">
                  <a.Icon size={32} color="#1A3A6B" className="mb-4" />
                  <h3 className="font-bold text-[#1A3A6B] text-sm mb-2">{a.titulo}</h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed flex-1">{a.desc}</p>
                  {a.link && (
                    <a href={a.link} target="_blank" rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A3A6B] hover:underline">
                      <Globe size={11} /> demolay.org
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SHRINERS */}
      <section className="bg-[#1A3A6B] py-20 border-b border-white/10 relative overflow-hidden">
        <div className="absolute right-[-30px] bottom-[-30px] opacity-[0.04] pointer-events-none hidden md:block">
          <StarOfSolomon size={340} color="white" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="mb-12">
              <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest">{t('shriners.label')}</span>
              <span className="block w-10 h-0.5 bg-[#C9A84C] mt-3 mb-5" />
              <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>{t('shriners.titulo')}</h2>
              <p className="mt-4 text-[#94A3B8] text-sm max-w-2xl leading-relaxed">{t('shriners.desc')}</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { Icon: SquareAndCompass, titulo: t('shriners.c1_titulo'), desc: t('shriners.c1_desc') },
              { Icon: Anchor,           titulo: t('shriners.c2_titulo'), desc: t('shriners.c2_desc') },
              { Icon: EyeOfProvidence,  titulo: t('shriners.c3_titulo'), desc: t('shriners.c3_desc') },
            ].map((c, i) => (
              <Reveal key={c.titulo} delay={i * 120}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full">
                  <c.Icon size={30} color="#C9A84C" className="mb-4" />
                  <h3 className="font-bold text-white text-sm mb-2" style={{ fontFamily: 'Georgia, serif' }}>{c.titulo}</h3>
                  <p className="text-[#94A3B8] text-xs leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-lg px-6 py-4">
              <p className="text-[#C9A84C] text-xs leading-relaxed">{t('shriners.cta')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOLLETO / CONTACTO */}
      <section className="py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <span className="section-label">{t('folleto.label')}</span>
              <span className="gold-bar mt-3 mx-auto" />
              <h2 className="section-title mt-1">{t('folleto.titulo')}</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal from="left">
              <div className="bg-[#F4F7FB] border border-[#E2E8F0] rounded-xl p-8">
                <Trowel size={28} color="#1A3A6B" className="mb-4" />
                <h3 className="font-bold text-[#1A3A6B] text-base mb-2" style={{ fontFamily: 'Georgia, serif' }}>{t('folleto.logia_titulo')}</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-4">{t('folleto.logia_desc')}</p>
                <ul className="space-y-2">
                  {[t('folleto.pilar1'), t('folleto.pilar2'), t('folleto.pilar3')].map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#4B5563]">
                      <span className="text-[#C9A84C] font-bold mt-0.5">·</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal from="right" delay={100}>
              <div className="bg-[#1A3A6B] rounded-xl p-8 text-white h-full flex flex-col">
                <MasonicLevel size={28} color="#C9A84C" className="mb-4" />
                <h3 className="font-bold text-[#C9A84C] text-base mb-5" style={{ fontFamily: 'Georgia, serif' }}>{t('folleto.contacto_titulo')}</h3>
                <div className="space-y-4 flex-1">
                  <a href={`mailto:${t('folleto.contacto_email')}`} className="flex items-center gap-3 text-[#94A3B8] hover:text-white transition-colors">
                    <div className="w-8 h-8 bg-[#C9A84C]/20 rounded flex items-center justify-center shrink-0">
                      <Mail size={14} className="text-[#C9A84C]" />
                    </div>
                    <span className="text-xs break-all">{t('folleto.contacto_email')}</span>
                  </a>
                  <a href={`tel:${t('folleto.contacto_tel')}`} className="flex items-center gap-3 text-[#94A3B8] hover:text-white transition-colors">
                    <div className="w-8 h-8 bg-[#C9A84C]/20 rounded flex items-center justify-center shrink-0">
                      <Phone size={14} className="text-[#C9A84C]" />
                    </div>
                    <span className="text-xs">{t('folleto.contacto_tel')}</span>
                  </a>
                  <div className="flex items-center gap-3 text-[#94A3B8]">
                    <div className="w-8 h-8 bg-[#C9A84C]/20 rounded flex items-center justify-center shrink-0">
                      <Globe size={14} className="text-[#C9A84C]" />
                    </div>
                    <span className="text-xs">{t('folleto.contacto_jurisdiccion')}</span>
                  </div>
                </div>
                <p className="mt-6 text-xs text-[#C9A84C]/70 border-t border-white/10 pt-4">{t('folleto.ingreso')}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MIEMBROS — privacidad */}
      <section className="bg-[#F4F7FB] py-20 border-b border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <StarOfSolomon size={44} color="#1A3A6B" className="mx-auto mb-6 opacity-60" />
            <span className="section-label">{t('fhm.miembros_label')}</span>
            <span className="gold-bar mt-3 mx-auto" />
            <h2 className="section-title mt-1 mb-5">{t('fhm.miembros_titulo')}</h2>
            <p className="text-sm text-[#4B5563] leading-relaxed">{t('fhm.miembros_desc')}</p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <span className="section-label">{t('fhm.cta_label')}</span>
            <h2 className="section-title mt-3">{t('fhm.cta_titulo')}</h2>
            <p className="mt-4 text-sm text-[#6B7280] leading-relaxed mb-8">{t('fhm.cta_desc')}</p>
            <Link to="/ingreso" className="inline-flex items-center gap-2 btn-primary">
              {t('fhm.cta_btn')} <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

    </main>
  )
}
