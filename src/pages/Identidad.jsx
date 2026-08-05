import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, BookOpen, GraduationCap, Heart } from 'lucide-react'
import Reveal from '../components/Reveal'
import { useTranslation } from '../context/LanguageContext'

export default function Identidad() {
  const { t } = useTranslation()

  const pilares = [
    { icon: BookOpen,      titulo: t('identidad.p1_titulo'), desc: t('identidad.p1_desc') },
    { icon: GraduationCap, titulo: t('identidad.p2_titulo'), desc: t('identidad.p2_desc') },
    { icon: Heart,         titulo: t('identidad.p3_titulo'), desc: t('identidad.p3_desc') },
  ]

  const ficha = [
    [t('identidad.f1_k'), t('identidad.f1_v')],
    [t('identidad.f2_k'), t('identidad.f2_v')],
    [t('identidad.f3_k'), t('identidad.f3_v')],
    [t('identidad.f4_k'), t('identidad.f4_v')],
    [t('identidad.f5_k'), t('identidad.f5_v')],
    [t('identidad.f6_k'), t('identidad.f6_v')],
    [t('identidad.f7_k'), t('identidad.f7_v')],
    [t('identidad.f8_k'), t('identidad.f8_v')],
  ]

  return (
    <main className="pt-16">

      <section className="bg-[#F4F7FB] border-b border-[#E2E8F0] py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal from="fade"><span className="section-label">{t('identidad.label')}</span></Reveal>
          <Reveal delay={100}><h1 className="section-title mt-3 text-4xl md:text-5xl">{t('identidad.titulo')}</h1></Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-[#4B5563] text-base leading-relaxed max-w-2xl">{t('identidad.desc')}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <Reveal from="left">
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-5">
                <Target size={20} className="text-[#1A3A6B]" />
                <h2 className="font-bold text-[#1A3A6B] text-lg" style={{ fontFamily: 'Georgia, serif' }}>{t('identidad.mision_titulo')}</h2>
              </div>
              <p className="text-sm text-[#4B5563] leading-relaxed">{t('identidad.mision_desc')}</p>
            </div>
          </Reveal>
          <Reveal from="right">
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-5">
                <Eye size={20} className="text-[#C9A84C]" />
                <h2 className="font-bold text-[#1A3A6B] text-lg" style={{ fontFamily: 'Georgia, serif' }}>{t('identidad.vision_titulo')}</h2>
              </div>
              <p className="text-sm text-[#4B5563] leading-relaxed">{t('identidad.vision_desc')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F4F7FB] py-16 border-y border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-10">
              <span className="section-label">{t('identidad.pilares_label')}</span>
              <h2 className="section-title mt-3">{t('identidad.pilares_titulo')}</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {pilares.map((p, i) => (
              <Reveal key={p.titulo} delay={i * 120}>
                <div className="card p-8 text-center">
                  <div className="flex items-center justify-center mb-5">
                    <p.icon size={26} className="text-[#C9A84C]" />
                  </div>
                  <h3 className="font-bold text-[#1A3A6B] text-base mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    {t('identidad.pilar')} {p.titulo}
                  </h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <span className="section-label mb-2 block">{t('identidad.ficha_label')}</span>
            <h2 className="section-title mb-8">{t('identidad.ficha_titulo')}</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="card overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {ficha.map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}>
                      <td className="py-3.5 px-6 text-[#9CA3AF] text-xs uppercase tracking-wider w-[40%] border-r border-[#F1F5F9]">{k}</td>
                      <td className="py-3.5 px-6 text-[#1A3A6B] text-xs font-medium">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#1A3A6B] py-12">
        <Reveal>
          <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-1">{t('identidad.cta_label')}</p>
              <h3 className="text-white text-xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>{t('identidad.cta_titulo')}</h3>
            </div>
            <Link to="/crecimiento" className="btn-gold shrink-0">{t('identidad.cta_btn')} <ArrowRight size={15} /></Link>
          </div>
        </Reveal>
      </section>

    </main>
  )
}
