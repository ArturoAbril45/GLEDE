import { BookOpen, ExternalLink, Calendar, Hash } from 'lucide-react'
import Reveal from '../components/Reveal'
import { useTranslation } from '../context/LanguageContext'

const ediciones = [
  { numero: 37, portada: '/revista/portada-37.jpg', destacada: true },
]

function PortadaPlaceholder({ numero }) {
  return (
    <div className="w-full aspect-[3/4] bg-gradient-to-br from-[#1A3A6B] to-[#0f2347] flex flex-col items-center justify-center rounded select-none">
      <p className="text-[#C9A84C] text-[10px] font-semibold uppercase tracking-widest mb-1">Desde el</p>
      <p className="text-white text-2xl font-black tracking-tight">ANDAMIO</p>
      <p className="text-[#C9A84C] text-lg font-bold mt-2">#{numero}</p>
    </div>
  )
}

export default function Revista() {
  const { t } = useTranslation()

  const destacada = ediciones.find(e => e.destacada)
  const resto = ediciones.filter(e => !e.destacada)

  return (
    <main className="pt-16">

      {/* HERO */}
      <section className="bg-[#F4F7FB] border-b border-[#E2E8F0] py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal from="fade">
            <span className="section-label">{t('revista.label')}</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="section-title mt-3 text-4xl md:text-5xl">
              {t('revista.titulo')}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-[#4B5563] text-base leading-relaxed max-w-2xl">
              {t('revista.desc')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* EDICIÓN DESTACADA */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="flex items-center gap-3 mb-10">
              <span className="gold-bar" />
              <h2 className="section-title text-2xl">{t('revista.ultima_edicion')}</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal from="left">
              <div className="max-w-xs mx-auto md:mx-0 shadow-2xl rounded overflow-hidden">
                {destacada?.portada ? (
                  <img
                    src={destacada.portada}
                    alt={`Desde el Andamio #${destacada?.numero}`}
                    className="w-full h-auto"
                  />
                ) : (
                  <PortadaPlaceholder numero={destacada?.numero} />
                )}
              </div>
            </Reveal>

            <Reveal from="right">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Hash size={14} className="text-[#C9A84C]" />
                  <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest">
                    {t('revista.edicion')} {destacada?.numero}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-[#1A3A6B] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                  Desde el<br />Andamio
                </h3>
                <p className="mt-2 text-sm text-[#6B7280] uppercase tracking-widest font-medium">
                  {t('revista.organo')}
                </p>
                <div className="mt-6 card p-6">
                  <div className="flex items-start gap-3">
                    <BookOpen size={18} className="text-[#1A3A6B] mt-0.5 shrink-0" />
                    <p className="text-sm text-[#4B5563] leading-relaxed">
                      {t('revista.edicion_desc')}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-[#9CA3AF]">
                  <Calendar size={13} />
                  <span>{t('revista.publicacion_regular')}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INFO BAND */}
      <section className="py-10 border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-sm text-[#6B7280]">
              {t('revista.info')}
            </p>
          </Reveal>
        </div>
      </section>

    </main>
  )
}
