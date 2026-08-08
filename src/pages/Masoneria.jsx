import { Link } from 'react-router-dom'
import { ArrowRight, Scale, Lightbulb, Heart, Equal } from 'lucide-react'
import Reveal from '../components/Reveal'
import { useTranslation } from '../context/LanguageContext'
import { SquareAndCompass } from '../components/MasonicIcons'

export default function Masoneria() {
  const { t } = useTranslation()

  const principios = [
    { Icon: Scale,     titulo: t('masoneria.p1_titulo'), desc: t('masoneria.p1_desc') },
    { Icon: Lightbulb, titulo: t('masoneria.p2_titulo'), desc: t('masoneria.p2_desc') },
    { Icon: Heart,     titulo: t('masoneria.p3_titulo'), desc: t('masoneria.p3_desc') },
    { Icon: Equal,     titulo: t('masoneria.p4_titulo'), desc: t('masoneria.p4_desc') },
  ]

  const noEs = [
    [t('masoneria.no1_titulo'), t('masoneria.no1_desc')],
    [t('masoneria.no2_titulo'), t('masoneria.no2_desc')],
    [t('masoneria.no3_titulo'), t('masoneria.no3_desc')],
    [t('masoneria.no4_titulo'), t('masoneria.no4_desc')],
  ]

  return (
    <main className="pt-16">

      <section className="relative py-24 md:py-36 overflow-hidden">
        {/* Fondo: foto consagración con overlay oscuro */}
        <div className="absolute inset-0">
          <img src="/consagracion-giovanni.jpg" alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2347]/95 via-[#1A3A6B]/88 to-[#0f2347]/70" />
        </div>
        {/* Escuadra y Compás decorativa derecha */}
        <div className="absolute right-[-30px] top-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none hidden md:block">
          <SquareAndCompass size={360} color="white" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Reveal from="fade"><span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest">{t('masoneria.label')}</span></Reveal>
          <Reveal delay={100}><h1 className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>{t('masoneria.titulo')}</h1></Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-white/75 text-base leading-relaxed max-w-2xl">{t('masoneria.desc')}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-14">
          <Reveal from="left">
            <div>
              <span className="gold-bar" />
              <h2 className="section-title text-2xl">{t('masoneria.trabajo_titulo')}</h2>
              <p className="mt-4 text-sm text-[#4B5563] leading-relaxed">{t('masoneria.trabajo_p1')}</p>
              <p className="mt-4 text-sm text-[#4B5563] leading-relaxed">{t('masoneria.trabajo_p2')}</p>
            </div>
          </Reveal>
          <Reveal from="right">
            <div>
              <span className="gold-bar" />
              <h2 className="section-title text-2xl">{t('masoneria.libertad_titulo')}</h2>
              <p className="mt-4 text-sm text-[#4B5563] leading-relaxed">{t('masoneria.libertad_p1')}</p>
              <p className="mt-4 text-sm text-[#4B5563] leading-relaxed">{t('masoneria.libertad_p2')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* IMAGEN ATMOSFÉRICA — Arte Real */}
      <section className="py-0">
        <Reveal from="fade">
          <div className="relative w-full h-64 md:h-80 overflow-hidden">
            <img
              src="/folleto/image11.png"
              alt="El Arte Real — taller masónico"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f2347]/90 via-[#0f2347]/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 md:px-16 max-w-lg">
                <p className="text-[#C9A84C] text-[10px] uppercase tracking-widest mb-3">Arte Real · Simbolismo</p>
                <blockquote className="text-white text-xl md:text-2xl font-bold leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
                  "La Masonería transforma las herramientas del constructor en instrumentos del alma."
                </blockquote>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-[#F4F7FB] py-16 border-y border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-10">
              <span className="section-label">{t('masoneria.principios_label')}</span>
              <h2 className="section-title mt-3">{t('masoneria.principios_titulo')}</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {principios.map((p, i) => (
              <Reveal key={p.titulo} delay={i * 100}>
                <div className="card p-6">
                  <p.Icon size={34} color="#1A3A6B" className="mb-3 opacity-80" />
                  <h3 className="font-semibold text-[#1A3A6B] mt-1 mb-2">{p.titulo}</h3>
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
            <span className="section-label">{t('masoneria.no_label')}</span>
            <h2 className="section-title mt-3 mb-8">{t('masoneria.no_titulo')}</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {noEs.map(([titulo, desc], i) => (
              <Reveal key={titulo} delay={i * 100}>
                <div className="card p-6">
                  <h3 className="font-semibold text-[#1A3A6B] text-sm mb-2">{titulo}</h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SISTEMA DE TRABAJO — TRES RITOS */}
      <section className="py-16 border-t border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="mb-10">
              <span className="section-label">Sistema de Trabajo</span>
              <span className="gold-bar mt-3" />
              <h2 className="section-title mt-1 text-2xl md:text-3xl">Los tres ritos de la GLEDE</h2>
              <p className="mt-4 text-sm text-[#4B5563] leading-relaxed max-w-2xl">
                La Gran Logia Equinoccial del Ecuador practica tres ritos masónicos reconocidos. Cada uno ofrece un camino filosófico y ritual distinto hacia los principios universales de Libertad, Igualdad y Fraternidad.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[
              {
                sigla: 'REAA',
                grados: '33 grados',
                titulo: 'Rito Escocés Antiguo y Aceptado',
                desc: 'El rito masónico más extendido en el mundo. Sus 33 grados recorren el perfeccionamiento moral, filosófico e intelectual del masón, desde la Masonería Simbólica o Azul hasta los altos grados de la Filosofía Escocesa.',
              },
              {
                sigla: 'RY',
                grados: 'Capítulo · Consejo · Encomienda',
                titulo: 'Rito de York',
                desc: 'De tradición anglosajona, profundiza la Masonería Simbólica a través del Capítulo Real, el Consejo Criptográfico y la Encomienda. Incorpora elementos caballerescos y de la tradición cristiana histórica en su sistema ritual.',
              },
              {
                sigla: 'RFM',
                grados: '7 grados',
                titulo: 'Rito Francés Moderno',
                desc: 'Nacido en la Francia ilustrada del siglo XVIII, trabaja en 7 grados. De espíritu racionalista y filosófico, se distingue por su apertura, la libertad de conciencia y la búsqueda de la Verdad desde la razón y la fraternidad universal.',
              },
            ].map((r, i) => (
              <Reveal key={r.sigla} delay={i * 80}>
                <div className="card p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-[#C9A84C] text-2xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>{r.sigla}</span>
                    <span className="text-[10px] text-[#6B7280] uppercase tracking-widest text-right leading-tight">{r.grados}</span>
                  </div>
                  <h3 className="text-[#1A3A6B] font-bold text-sm mb-3" style={{ fontFamily: 'Georgia, serif' }}>{r.titulo}</h3>
                  <p className="text-[#4B5563] text-[13px] leading-relaxed flex-1">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Detalle REAA */}
          <div className="grid md:grid-cols-2 gap-12 items-center border-t border-[#E2E8F0] pt-12">
            <Reveal from="left">
              <div>
                <span className="section-label">Rito Escocés — detalle</span>
                <span className="gold-bar mt-3" />
                <h3 className="section-title mt-1 text-xl md:text-2xl">Estructura de los 33 grados</h3>
                <p className="mt-5 text-sm text-[#4B5563] leading-relaxed">
                  Los tres primeros grados — Aprendiz, Compañero y Maestro Masón — constituyen la Masonería Simbólica o Azul, base de toda la orden.
                </p>
                <p className="mt-4 text-sm text-[#4B5563] leading-relaxed">
                  Es el marco bajo el cual la R.L.S. Francisco Huerta Montalvo No. 69 desarrolla su trabajo ritual en la Provincia del Guayas.
                </p>
              </div>
            </Reveal>
            <Reveal from="right">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { grado: '1°', titulo: 'Aprendiz', desc: 'Inicio del camino. Purificación y apertura al conocimiento.' },
                  { grado: '2°', titulo: 'Compañero', desc: 'Formación intelectual. Ciencias y artes al servicio del alma.' },
                  { grado: '3°', titulo: 'Maestro Masón', desc: 'La búsqueda de la Palabra Perdida. Cumbre de la Masonería Simbólica.' },
                  { grado: '4°–14°', titulo: 'Logias de Perfección', desc: 'Profundización filosófica y moral del adepto.' },
                  { grado: '15°–32°', titulo: 'Capítulo y Consistorio', desc: 'Grados superiores de servicio, sabiduría y liderazgo.' },
                  { grado: '33°', titulo: 'Inspector Gral. Honorario', desc: 'Grado honorífico. Reconocimiento a la vida de servicio masónico.' },
                ].map((g, i) => (
                  <Reveal key={g.grado} delay={i * 60}>
                    <div className="card p-4 text-center h-full">
                      <p className="text-[#C9A84C] text-lg font-bold mb-1" style={{ fontFamily: 'Georgia, serif' }}>{g.grado}</p>
                      <p className="text-[#1A3A6B] text-[11px] font-bold uppercase tracking-wide mb-2">{g.titulo}</p>
                      <p className="text-[#6B7280] text-[10px] leading-relaxed">{g.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#1A3A6B] py-12">
        <Reveal>
          <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-1">{t('masoneria.cta_label')}</p>
              <h3 className="text-white text-xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>{t('masoneria.cta_titulo')}</h3>
            </div>
            <Link to="/historia" className="btn-gold shrink-0">{t('masoneria.cta_btn')} <ArrowRight size={15} /></Link>
          </div>
        </Reveal>
      </section>

    </main>
  )
}
