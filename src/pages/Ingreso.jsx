import { useState } from 'react'
import { CheckCircle, Send, Search, XCircle, Clock } from 'lucide-react'
import Reveal from '../components/Reveal'
import { ecuador, provincias } from '../data/ecuador'
import Select from '../components/Select'
import { useTranslation } from '../context/LanguageContext'

const DEMO_SOLICITUDES = {
  '1713456789': { nombre: 'Carlos Andrade Mora',      estado: 'aprobado' },
  '0912345678': { nombre: 'Miguel Ángel Reyes',       estado: 'rechazado' },
  '1756234890': { nombre: 'Fernando Suárez Alvarado', estado: 'revision' },
  '0801234567': { nombre: 'Roberto Lema Vargas',      estado: 'aprobado' },
  '1312345670': { nombre: 'Patricio Cárdenas Núñez',  estado: 'revision' },
}

export default function Ingreso() {
  const { t } = useTranslation()

  const ESTADO_CONFIG = {
    aprobado:  { icon: CheckCircle, color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200', label: t('ingreso.estado_aprobado'), msg: t('ingreso.msg_aprobado') },
    rechazado: { icon: XCircle,     color: 'text-red-500',     bg: 'bg-red-50 border-red-200',         label: t('ingreso.estado_rechazado'), msg: t('ingreso.msg_rechazado') },
    revision:  { icon: Clock,       color: 'text-sky-600',     bg: 'bg-sky-50 border-sky-200',         label: t('ingreso.estado_revision'), msg: t('ingreso.msg_revision') },
  }

  const criterios = [
    t('ingreso.c1'), t('ingreso.c2'), t('ingreso.c3'),
    t('ingreso.c4'), t('ingreso.c5'), t('ingreso.c6'),
  ]

  const [form, setForm] = useState({ nombre: '', profesion: '', telefono: '', email: '', ciudad: '', provincia: '', motivo: '' })
  const [enviado, setEnviado] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [cedula, setCedula] = useState('')
  const [consultaResult, setConsultaResult] = useState(null)
  const [consultaError, setConsultaError] = useState(false)

  function handle(e) { setForm(f => ({ ...f, [e.target.name]: e.target.value })) }

  async function submit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/ingreso', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!res.ok) throw new Error()
      setEnviado(true)
    } catch {
      setError(t('ingreso.error'))
    } finally {
      setLoading(false)
    }
  }

  function consultar(e) {
    e.preventDefault()
    const found = DEMO_SOLICITUDES[cedula.trim()]
    if (found) {
      setConsultaResult(found)
      setConsultaError(false)
    } else {
      setConsultaResult(null)
      setConsultaError(true)
    }
  }

  if (enviado) {
    return (
      <main className="pt-16 min-h-screen bg-[#F4F7FB] flex items-center justify-center px-6">
        <Reveal>
          <div className="text-center max-w-md">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
              <CheckCircle size={28} className="text-green-600" />
            </div>
            <h2 className="section-title text-2xl mb-3">{t('ingreso.exito_titulo')}</h2>
            <p className="text-sm text-[#6B7280] leading-relaxed">{t('ingreso.exito_desc')}</p>
            <p className="text-xs text-[#9CA3AF] mt-6">{t('ingreso.exito_firma')}</p>
          </div>
        </Reveal>
      </main>
    )
  }

  return (
    <main className="pt-16">

      <section className="bg-[#F4F7FB] border-b border-[#E2E8F0] py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal from="fade"><span className="section-label">{t('ingreso.label')}</span></Reveal>
          <Reveal delay={100}><h1 className="section-title mt-3 text-4xl md:text-5xl">{t('ingreso.titulo')}</h1></Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-[#4B5563] text-base leading-relaxed max-w-2xl">{t('ingreso.desc')}</p>
          </Reveal>
        </div>
      </section>

      {/* CONSULTA POR CÉDULA */}
      <section className="py-16 border-b border-[#E2E8F0]">
        <div className="max-w-2xl mx-auto px-6">
          <Reveal from="fade">
            <div className="text-center mb-8">
              <span className="section-label">{t('ingreso.label')}</span>
              <h2 className="section-title mt-3 text-2xl md:text-3xl">{t('ingreso.consulta_titulo')}</h2>
              <p className="mt-3 text-sm text-[#6B7280] leading-relaxed">{t('ingreso.consulta_desc')}</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={consultar} className="flex gap-3">
              <input
                type="text"
                value={cedula}
                onChange={e => { setCedula(e.target.value); setConsultaResult(null); setConsultaError(false) }}
                placeholder={t('ingreso.consulta_ph')}
                maxLength={10}
                required
                className="flex-1 border border-[#D1D5DB] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1A3A6B] focus:ring-1 focus:ring-[#1A3A6B] transition-colors"
              />
              <button type="submit" className="btn-primary shrink-0">
                <Search size={15} /> {t('ingreso.consulta_btn')}
              </button>
            </form>
          </Reveal>

          {(consultaResult || consultaError) && (
            <Reveal delay={50}>
              <div className="mt-5">
                {consultaResult ? (() => {
                  const cfg = ESTADO_CONFIG[consultaResult.estado]
                  return (
                    <div className={`border rounded-xl p-5 flex gap-4 items-start ${cfg.bg}`}>
                      <cfg.icon size={22} className={`${cfg.color} shrink-0 mt-0.5`} />
                      <div>
                        <p className="text-sm font-semibold text-[#1A3A6B]">{consultaResult.nombre}</p>
                        <p className={`text-xs font-bold uppercase tracking-wide mt-0.5 ${cfg.color}`}>{cfg.label}</p>
                        <p className="text-xs text-[#6B7280] mt-2 leading-relaxed">{cfg.msg}</p>
                      </div>
                    </div>
                  )
                })() : (
                  <div className="border border-[#E2E8F0] rounded-xl p-5 bg-white text-center">
                    <p className="text-sm font-semibold text-[#374151]">{t('ingreso.no_found_titulo')}</p>
                    <p className="text-xs text-[#9CA3AF] mt-1">{t('ingreso.no_found_desc')}</p>
                  </div>
                )}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-12">

          <Reveal from="left" className="md:col-span-2">
            <div>
              <span className="gold-bar" />
              <h2 className="section-title text-xl mb-5">{t('ingreso.criterios_titulo')}</h2>
              <ul className="flex flex-col gap-3">
                {criterios.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#4B5563]">
                    <span className="w-4 h-4 rounded-full border-2 border-[#C9A84C] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-5 bg-[#F4F7FB] rounded-lg border border-[#E2E8F0]">
                <p className="text-xs font-semibold text-[#1A3A6B] uppercase tracking-wider mb-2">{t('ingreso.importante_label')}</p>
                <p className="text-xs text-[#6B7280] leading-relaxed">{t('ingreso.importante_desc')}</p>
              </div>
            </div>
          </Reveal>

          <Reveal from="right" className="md:col-span-3">
            <div className="card p-8">
              <h2 className="font-bold text-[#1A3A6B] text-lg mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                {t('ingreso.form_titulo')}
              </h2>
              <form onSubmit={submit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#374151] block mb-1.5">{t('ingreso.nombre')} <span className="text-red-500">*</span></label>
                    <input name="nombre" value={form.nombre} onChange={handle} required placeholder={t('ingreso.nombre_ph')}
                      className="w-full border border-[#D1D5DB] rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#1A3A6B] focus:ring-1 focus:ring-[#1A3A6B] transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#374151] block mb-1.5">{t('ingreso.profesion')} <span className="text-red-500">*</span></label>
                    <input name="profesion" value={form.profesion} onChange={handle} required placeholder={t('ingreso.profesion_ph')}
                      className="w-full border border-[#D1D5DB] rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#1A3A6B] focus:ring-1 focus:ring-[#1A3A6B] transition-colors" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#374151] block mb-1.5">{t('ingreso.telefono')} <span className="text-red-500">*</span></label>
                    <input name="telefono" value={form.telefono} onChange={handle} required placeholder={t('ingreso.telefono_ph')}
                      className="w-full border border-[#D1D5DB] rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#1A3A6B] focus:ring-1 focus:ring-[#1A3A6B] transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#374151] block mb-1.5">{t('ingreso.email')} <span className="text-red-500">*</span></label>
                    <input name="email" type="email" value={form.email} onChange={handle} required placeholder={t('ingreso.email_ph')}
                      className="w-full border border-[#D1D5DB] rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#1A3A6B] focus:ring-1 focus:ring-[#1A3A6B] transition-colors" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#374151] block mb-1.5">{t('ingreso.provincia')} <span className="text-red-500">*</span></label>
                    <Select
                      value={form.provincia}
                      onChange={v => setForm(f => ({ ...f, provincia: v, ciudad: '' }))}
                      options={provincias}
                      placeholder={t('ingreso.provincia_ph')}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#374151] block mb-1.5">{t('ingreso.ciudad')} <span className="text-red-500">*</span></label>
                    <Select
                      value={form.ciudad}
                      onChange={v => setForm(f => ({ ...f, ciudad: v }))}
                      options={ecuador[form.provincia] ?? []}
                      placeholder={t('ingreso.ciudad_ph')}
                      disabled={!form.provincia}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#374151] block mb-1.5">{t('ingreso.motivo')} <span className="text-red-500">*</span></label>
                  <textarea name="motivo" value={form.motivo} onChange={handle} required rows={5}
                    placeholder={t('ingreso.motivo_ph')}
                    className="w-full border border-[#D1D5DB] rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#1A3A6B] focus:ring-1 focus:ring-[#1A3A6B] transition-colors resize-none" />
                </div>
                {error && <p className="text-red-500 text-xs">{error}</p>}
                <button type="submit" disabled={loading} className="btn-primary justify-center disabled:opacity-60">
                  {loading ? t('ingreso.enviando') : <><Send size={14} /> {t('ingreso.enviar')}</>}
                </button>
                <p className="text-[10px] text-[#9CA3AF] text-center leading-relaxed">{t('ingreso.privacidad')}</p>
              </form>
            </div>
          </Reveal>

        </div>
      </section>

    </main>
  )
}
