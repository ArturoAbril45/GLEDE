import { Link } from 'react-router-dom'
import { ArrowRight, User, Award, Globe, Handshake } from 'lucide-react'
import Reveal from '../components/Reveal'
import { useTranslation } from '../context/LanguageContext'

export default function Crecimiento() {
  const { t } = useTranslation()

  const perfil = [
    t('crecimiento.p1'),
    t('crecimiento.p2'),
    t('crecimiento.p3'),
    t('crecimiento.p4'),
    t('crecimiento.p5'),
  ]

  const beneficios = [
    { icon: User,      titulo: t('crecimiento.b1_titulo'), desc: t('crecimiento.b1_desc') },
    { icon: Award,     titulo: t('crecimiento.b2_titulo'), desc: t('crecimiento.b2_desc') },
    { icon: Globe,     titulo: t('crecimiento.b3_titulo'), desc: t('crecimiento.b3_desc') },
    { icon: Handshake, titulo: t('crecimiento.b4_titulo'), desc: t('crecimiento.b4_desc') },
  ]

  return (
    <main className="pt-16">

      <section className="bg-[#F4F7FB] border-b border-[#E2E8F0] py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal from="fade"><span className="section-label">{t('crecimiento.label')}</span></Reveal>
          <Reveal delay={100}><h1 className="section-title mt-3 text-4xl md:text-5xl">{t('crecimiento.titulo')}</h1></Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-[#4B5563] text-base leading-relaxed max-w-2xl">{t('crecimiento.desc')}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
          <Reveal from="left">
            <div>
              <span className="gold-bar" />
              <h2 className="section-title text-2xl">{t('crecimiento.perfil_titulo')}</h2>
              <p className="mt-4 text-sm text-[#4B5563] leading-relaxed mb-7">{t('crecimiento.perfil_intro')}</p>
              <ul className="flex flex-col gap-3">
                {perfil.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#4B5563]">
                    <span className="w-5 h-5 rounded-full bg-[#C9A84C] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-[9px] font-bold">{i + 1}</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal from="right">
            <div>
              <span className="gold-bar" />
              <h2 className="section-title text-2xl">{t('crecimiento.metodo_titulo')}</h2>
              <p className="mt-4 text-sm text-[#4B5563] leading-relaxed">{t('crecimiento.metodo_p1')}</p>
              <p className="mt-4 text-sm text-[#4B5563] leading-relaxed">{t('crecimiento.metodo_p2')}</p>
              <div className="mt-6 p-5 bg-[#F4F7FB] rounded-lg border border-[#E2E8F0]">
                <p className="text-xs text-[#1A3A6B] font-semibold uppercase tracking-wider mb-2">{t('crecimiento.compromiso_label')}</p>
                <p className="text-xs text-[#6B7280] leading-relaxed">{t('crecimiento.compromiso_desc')}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F4F7FB] py-16 border-y border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-10">
              <span className="section-label">{t('crecimiento.beneficios_label')}</span>
              <h2 className="section-title mt-3">{t('crecimiento.beneficios_titulo')}</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {beneficios.map((b, i) => (
              <Reveal key={b.titulo} delay={i * 100}>
                <div className="card p-6">
                  <div className="mb-4">
                    <b.icon size={22} className="text-[#1A3A6B]" />
                  </div>
                  <h3 className="font-semibold text-[#1A3A6B] text-sm mb-2">{b.titulo}</h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <Reveal>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="section-label">{t('crecimiento.cta_label')}</span>
            <h2 className="section-title mt-3 mb-4">{t('crecimiento.cta_titulo')}</h2>
            <p className="text-sm text-[#6B7280] leading-relaxed mb-8">{t('crecimiento.cta_desc')}</p>
            <Link to="/ingreso" className="btn-gold inline-flex">
              {t('crecimiento.cta_btn')} <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
      </section>

    </main>
  )
}
