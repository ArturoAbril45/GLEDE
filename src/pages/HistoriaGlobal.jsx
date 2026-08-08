import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { useTranslation } from '../context/LanguageContext'

export default function HistoriaGlobal() {
  const { t } = useTranslation()

  const hitos = [
    { año: t('hglobal.h1_año'), titulo: t('hglobal.h1_titulo'), desc: t('hglobal.h1_desc') },
    { año: t('hglobal.h2_año'), titulo: t('hglobal.h2_titulo'), desc: t('hglobal.h2_desc') },
    { año: t('hglobal.h3_año'), titulo: t('hglobal.h3_titulo'), desc: t('hglobal.h3_desc') },
    { año: t('hglobal.h4_año'), titulo: t('hglobal.h4_titulo'), desc: t('hglobal.h4_desc') },
    { año: t('hglobal.h5_año'), titulo: t('hglobal.h5_titulo'), desc: t('hglobal.h5_desc') },
    { año: t('hglobal.h6_año'), titulo: t('hglobal.h6_titulo'), desc: t('hglobal.h6_desc') },
  ]

  return (
    <main className="pt-16">

      <section className="bg-[#F4F7FB] border-b border-[#E2E8F0] py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal from="fade"><span className="section-label">{t('hglobal.label')}</span></Reveal>
          <Reveal delay={100}><h1 className="section-title mt-3 text-4xl md:text-5xl">{t('hglobal.titulo')}</h1></Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-[#4B5563] text-base leading-relaxed max-w-2xl">{t('hglobal.desc')}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal><span className="section-label mb-6 block">{t('hglobal.timeline_label')}</span></Reveal>
          <div className="relative">
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-[#E2E8F0]" />
            <div className="flex flex-col gap-10">
              {hitos.map((h, i) => (
                <Reveal key={i} from="left" delay={i * 80}>
                  <div className="flex gap-6">
                    <div className="relative shrink-0">
                      <div className="w-6 h-6 rounded-full border-2 border-[#C9A84C] bg-white flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
                      </div>
                    </div>
                    <div className="pb-2">
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9A84C] mb-1">{h.año}</p>
                      <h3 className="font-bold text-[#1A3A6B] text-base mb-2" style={{ fontFamily: 'Georgia, serif' }}>{h.titulo}</h3>
                      <p className="text-sm text-[#4B5563] leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMAGEN — Bolívar y San Martín */}
      <section className="py-0">
        <Reveal from="fade">
          <div className="relative w-full h-72 md:h-[420px] overflow-hidden">
            <img
              src="/folleto/image10.png"
              alt="Encuentro histórico — Bolívar y San Martín, Guayaquil 1822"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2347]/90 via-[#0f2347]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 px-8 py-6 max-w-2xl">
              <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-2">Guayaquil · 1822</p>
              <h3 className="text-white text-xl md:text-2xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
                Encuentro Histórico: Bolívar y San Martín
              </h3>
              <p className="text-white/70 text-sm mt-2 hidden md:block">Los dos grandes libertadores de América, ambos iniciados en la Orden, se reúnen en Guayaquil para sellar el destino de la independencia sudamericana.</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* MASONES NOTABLES */}
      <section className="py-16 border-t border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-10">
              <span className="section-label">Masones Notables</span>
              <h2 className="section-title mt-3">Figuras que marcaron la historia</h2>
              <p className="mt-3 text-sm text-[#6B7280] max-w-xl mx-auto">Hombres de virtud, ciencia y patriotismo que, formados en los principios de la Orden, transformaron la realidad de sus pueblos.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal from="left">
              <div className="card overflow-hidden">
                <img src="/folleto/image12.png" alt="General Eloy Alfaro" className="w-full h-64 object-cover object-top" />
                <div className="p-6">
                  <p className="section-label mb-1">Ecuador · Grado 33°</p>
                  <h3 className="font-bold text-[#1A3A6B] text-lg mb-2" style={{ fontFamily: 'Georgia, serif' }}>Gral. Eloy Alfaro Delgado</h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">Gran Inspector General y Gran Maestro Grado 33°. Presidente de la República del Ecuador, líder de la Revolución Liberal. Usó los principios masónicos de libertad e igualdad para transformar profundamente la nación ecuatoriana.</p>
                </div>
              </div>
            </Reveal>
            <Reveal from="right" delay={100}>
              <div className="card overflow-hidden">
                <img src="/folleto/image6.jpg" alt="José Martí" className="w-full h-64 object-cover object-top" />
                <div className="p-6">
                  <p className="section-label mb-1">Cuba</p>
                  <h3 className="font-bold text-[#1A3A6B] text-lg mb-2" style={{ fontFamily: 'Georgia, serif' }}>José Martí</h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">Poeta, escritor y héroe de la independencia de Cuba. Masón iniciado en los principios de la fraternidad universal. Escribió: <em>"En el seno de la Francmasonería existen manantiales de verdadera moral y felicidad."</em></p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#1A3A6B] py-14">
        <Reveal>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-4">{t('hglobal.quote_label')}</p>
            <blockquote className="text-white text-2xl md:text-3xl font-bold leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
              {t('hglobal.quote')}
            </blockquote>
            <p className="text-[#94A3B8] text-sm mt-6 max-w-xl mx-auto">{t('hglobal.quote_desc')}</p>
          </div>
        </Reveal>
      </section>

      <section className="py-12 border-t border-[#E2E8F0]">
        <Reveal>
          <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-1">{t('hglobal.cta_label')}</p>
              <h3 className="section-title text-xl">{t('hglobal.cta_titulo')}</h3>
            </div>
            <Link to="/identidad" className="btn-primary shrink-0">{t('hglobal.cta_btn')} <ArrowRight size={15} /></Link>
          </div>
        </Reveal>
      </section>

    </main>
  )
}
