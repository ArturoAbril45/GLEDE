import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Landmark, Waves, Trees } from 'lucide-react'
import Reveal from '../components/Reveal'
import { useTranslation } from '../context/LanguageContext'

export default function Historia() {
  const { t } = useTranslation()

  const logias = [
    { nombre: t('historia.logia1_nombre'), tipo: t('historia.logia1_tipo'), dir: t('historia.logia1_dir'), desc: t('historia.logia1_desc'), Icon: Landmark },
    { nombre: t('historia.logia2_nombre'), tipo: t('historia.logia2_tipo'), dir: t('historia.logia2_dir'), desc: t('historia.logia2_desc'), Icon: Waves },
    { nombre: t('historia.logia3_nombre'), tipo: t('historia.logia3_tipo'), dir: t('historia.logia3_dir'), desc: t('historia.logia3_desc'), Icon: Trees },
  ]

  const reconocimiento = [
    [t('historia.r1_k'), t('historia.r1_v')],
    [t('historia.r2_k'), t('historia.r2_v')],
    [t('historia.r3_k'), t('historia.r3_v')],
    [t('historia.r4_k'), t('historia.r4_v')],
    [t('historia.r5_k'), t('historia.r5_v')],
  ]

  return (
    <main className="pt-16">

      <section className="bg-[#F4F7FB] border-b border-[#E2E8F0] py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal from="fade"><span className="section-label">{t('historia.label')}</span></Reveal>
          <Reveal delay={100}><h1 className="section-title mt-3 text-4xl md:text-5xl">{t('historia.titulo')}</h1></Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-[#4B5563] text-base leading-relaxed max-w-2xl">{t('historia.desc')}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <Reveal from="left">
              <div>
                <span className="gold-bar" />
                <h2 className="section-title text-2xl">{t('historia.estructura_titulo')}</h2>
                <p className="mt-4 text-sm text-[#4B5563] leading-relaxed">{t('historia.estructura_p1')}</p>
                <p className="mt-4 text-sm text-[#4B5563] leading-relaxed">{t('historia.estructura_p2')}</p>
                <p className="mt-4 text-sm text-[#4B5563] leading-relaxed">{t('historia.estructura_p3')}</p>

                {/* Foto del Templo */}
                <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/templo.jpg"
                    alt="Templo de la Gran Logia Equinoccial del Ecuador"
                    className="w-full h-56 object-cover object-center"
                  />
                  <div className="bg-[#F4F7FB] px-4 py-3 border-t border-[#E2E8F0]">
                    <p className="text-xs text-[#6B7280] text-center tracking-wide">
                      {t('historia.templo_caption')}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal from="right">
              <div className="card p-8 mt-16">
                <h3 className="font-semibold text-[#1A3A6B] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                  {t('historia.reconocimiento_titulo')}
                </h3>
                <div className="flex flex-col gap-5">
                  {reconocimiento.map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 border-b border-[#F1F5F9] pb-4 last:border-0 last:pb-0">
                      <span className="text-xs text-[#9CA3AF] uppercase tracking-wider">{k}</span>
                      <span className="text-xs font-semibold text-[#1A3A6B] text-right">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FB] py-16 border-y border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-10">
              <span className="section-label">{t('historia.logias_label')}</span>
              <h2 className="section-title mt-3">{t('historia.logias_titulo')}</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {logias.map((l, i) => (
              <Reveal key={l.nombre} delay={i * 120}>
                <div className="card p-7">
                  <l.Icon size={24} className="text-[#1A3A6B] mb-4" />
                  <p className="section-label mb-2">{l.tipo}</p>
                  <h3 className="font-bold text-[#1A3A6B] text-base mb-3" style={{ fontFamily: 'Georgia, serif' }}>{l.nombre}</h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed mb-4">{l.desc}</p>
                  <div className="flex items-start gap-2 text-xs text-[#9CA3AF]">
                    <MapPin size={11} className="text-[#C9A84C] mt-0.5 shrink-0" />
                    <span>{l.dir}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 LOGIAS DEL GUAYAS */}
      <section className="py-16 border-b border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-10">
              <span className="section-label">Delegación Regional · Guayas y Santa Elena</span>
              <h2 className="section-title mt-3">Logias en el Guayas y Santa Elena</h2>
              <p className="mt-3 text-sm text-[#6B7280] max-w-xl mx-auto">Tres logias hermanas trabajan unidas bajo la delegación regional, aportando al desarrollo moral e intelectual de la Costa ecuatoriana.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: '49', full: 'Respetable Logia Simbólica Vicente Rocafuerte No. 49' },
              { num: '75', full: 'Cámara del Bien R.L.S. Luz de América No. 75' },
              { num: '69', full: 'Respetable Logia Simbólica Francisco Huerta Montalvo No. 69' },
            ].map((l, i) => (
              <Reveal key={l.num} delay={i * 120}>
                <div className="card p-7 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#1A3A6B] flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#C9A84C] text-lg font-bold" style={{ fontFamily: 'Georgia, serif' }}>No.{l.num}</span>
                  </div>
                  <h3 className="font-bold text-[#1A3A6B] text-sm mb-2" style={{ fontFamily: 'Georgia, serif' }}>{l.full}</h3>
                  <div className="flex items-center justify-center gap-1.5 text-xs text-[#9CA3AF] mt-3">
                    <MapPin size={11} className="text-[#C9A84C]" />
                    <span>Guayaquil, Provincia del Guayas</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <Reveal>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="section-label">{t('historia.cmi_label')}</span>
            <h2 className="section-title mt-3 mb-6">{t('historia.cmi_titulo')}</h2>
            <p className="text-sm text-[#4B5563] leading-relaxed max-w-2xl mx-auto">{t('historia.cmi_desc')}</p>
          </div>
        </Reveal>
      </section>

      {/* REVISTA DESDE EL ANDAMIO */}
      <section className="py-16 border-t border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal from="left">
              <div className="max-w-xs mx-auto md:mx-0 shadow-2xl rounded overflow-hidden">
                <img
                  src="/revista/portada-37.jpg"
                  alt="Desde el Andamio #37"
                  className="w-full h-auto"
                />
              </div>
            </Reveal>
            <Reveal from="right">
              <div>
                <span className="section-label">{t('revista.label')}</span>
                <h2 className="section-title mt-3 text-3xl" style={{ fontFamily: 'Georgia, serif' }}>
                  {t('revista.titulo')}
                </h2>
                <p className="mt-1 text-xs text-[#C9A84C] uppercase tracking-widest font-semibold">
                  {t('revista.organo')}
                </p>
                <p className="mt-5 text-sm text-[#4B5563] leading-relaxed">
                  {t('revista.desc')}
                </p>
                <p className="mt-4 text-sm text-[#4B5563] leading-relaxed">
                  {t('revista.edicion_desc')}
                </p>
                <p className="mt-6 text-xs text-[#9CA3AF]">
                  {t('revista.publicacion_regular')}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#1A3A6B] py-12">
        <Reveal>
          <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-1">{t('historia.cta_label')}</p>
              <h3 className="text-white text-xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>{t('historia.cta_titulo')}</h3>
            </div>
            <Link to="/historia-global" className="btn-gold shrink-0">{t('historia.cta_btn')} <ArrowRight size={15} /></Link>
          </div>
        </Reveal>
      </section>

    </main>
  )
}
