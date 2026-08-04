import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  LogOut, Users, Clock, CheckCircle, XCircle,
  Search, ChevronDown, Eye, LayoutDashboard, Save, User2, Mail, Lock, Upload,
  FileText, Settings, Bell, Menu, X
} from 'lucide-react'

const DEMO_SOLICITUDES = [
  { id: 1, nombre: 'Carlos Enríquez Vega',    profesion: 'Ingeniero Civil',       telefono: '+593 99 123 4567', email: 'cenriquez@gmail.com',  motivo: 'Busco crecimiento personal y espiritual dentro de un marco filosófico sólido.',     fecha: '2026-07-10', estado: 'pendiente' },
  { id: 2, nombre: 'Roberto Salinas Mora',     profesion: 'Médico',                telefono: '+593 98 765 4321', email: 'rsalinas@outlook.com', motivo: 'Me interesa la fraternidad y el trabajo interno que ofrece la Masonería.',          fecha: '2026-07-11', estado: 'pendiente' },
  { id: 3, nombre: 'Miguel Ángel Torres',      profesion: 'Abogado',               telefono: '+593 97 654 3210', email: 'matorres@yahoo.com',   motivo: 'Deseo pertenecer a una institución con valores de libertad y tolerancia.',         fecha: '2026-07-12', estado: 'revisado'  },
  { id: 4, nombre: 'Andrés Felipe Castillo',   profesion: 'Arquitecto',            telefono: '+593 96 321 0987', email: 'acastillo@gmail.com',  motivo: 'Busco un espacio de reflexión filosófica y crecimiento como ser humano.',          fecha: '2026-07-13', estado: 'aprobado'  },
  { id: 5, nombre: 'Luis Eduardo Peñafiel',    profesion: 'Economista',            telefono: '+593 95 987 6543', email: 'lpenafiel@gmail.com',  motivo: 'Un amigo masón me habló de la institución y me identifico con sus principios.',     fecha: '2026-07-14', estado: 'pendiente' },
  { id: 6, nombre: 'Fernando Jácome Rueda',    profesion: 'Docente Universitario', telefono: '+593 94 456 7890', email: 'fjacome@edu.ec',       motivo: 'El estudio y la búsqueda de la verdad son parte esencial de mi vida. Quiero más.', fecha: '2026-07-15', estado: 'rechazado' },
]

const estadoConfig = {
  pendiente: { label: 'Pendiente',   color: 'bg-amber-50 text-amber-600'   },
  revisado:  { label: 'En revisión', color: 'bg-sky-50 text-sky-600'       },
  aprobado:  { label: 'Aprobado',    color: 'bg-emerald-50 text-emerald-600' },
  rechazado: { label: 'Rechazado',   color: 'bg-red-50 text-red-400'       },
}

const navItems = [
  { key: 'solicitudes', icon: FileText,       label: 'Solicitudes'  },
  { key: 'dashboard',   icon: LayoutDashboard, label: 'Resumen'     },
  { key: 'notif',       icon: Bell,            label: 'Notificaciones' },
  { key: 'config',      icon: Settings,        label: 'Configuración' },
]

function ConfigPanel({ showToast }) {
  const [perfil, setPerfil] = useState({ nombre: 'Administrador', email: 'admin@glede.org.ec', usuario: 'admin' })
  const [avatar, setAvatar] = useState(null)
  const [pass, setPass]     = useState({ actual: '', nueva: '', confirmar: '' })
  const [showActual, setShowActual]       = useState(false)
  const [showNueva, setShowNueva]         = useState(false)
  const [showConfirmar, setShowConfirmar] = useState(false)

  function guardarPerfil(e) {
    e.preventDefault()
    showToast('Perfil actualizado correctamente.', 'bg-emerald-50 text-emerald-700 border border-emerald-200')
  }

  function cambiarPass(e) {
    e.preventDefault()
    if (pass.nueva !== pass.confirmar) {
      showToast('Las contraseñas no coinciden.', 'bg-red-50 text-red-400 border border-red-200')
      return
    }
    if (pass.nueva.length < 6) {
      showToast('La contraseña debe tener al menos 6 caracteres.', 'bg-red-50 text-red-400 border border-red-200')
      return
    }
    setPass({ actual: '', nueva: '', confirmar: '' })
    showToast('Contraseña actualizada correctamente.', 'bg-emerald-50 text-emerald-700 border border-emerald-200')
  }

  const inputCls = 'w-full border border-[#D1D5DB] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1A3A6B] focus:ring-1 focus:ring-[#1A3A6B] transition-colors'

  return (
    <div className="grid md:grid-cols-3 gap-6 items-start">

      {/* PERFIL */}
      <div className="bg-white rounded-md border border-[#E2E8F0] overflow-hidden">
        <div className="px-6 py-4 border-b border-[#E2E8F0]">
          <h2 className="text-sm font-semibold text-[#1A3A6B]">Datos del perfil</h2>
          <p className="text-xs text-[#9CA3AF] mt-0.5">Nombre, usuario e email de acceso.</p>
        </div>
        <form onSubmit={guardarPerfil} className="p-6 flex flex-col gap-4">
          <div>
            <label className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280] flex items-center gap-1.5 mb-1.5">
              <User2 size={11} /> Nombre completo
            </label>
            <input value={perfil.nombre} onChange={e => setPerfil(p => ({ ...p, nombre: e.target.value }))}
              className={inputCls} placeholder="Nombre del administrador" />
          </div>
          <div>
            <label className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280] flex items-center gap-1.5 mb-1.5">
              <User2 size={11} /> Usuario de inicio de sesión
            </label>
            <input value={perfil.usuario} onChange={e => setPerfil(p => ({ ...p, usuario: e.target.value }))}
              className={inputCls} placeholder="usuario" />
          </div>
          <div>
            <label className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280] flex items-center gap-1.5 mb-1.5">
              <Mail size={11} /> Correo electrónico
            </label>
            <input type="email" value={perfil.email} onChange={e => setPerfil(p => ({ ...p, email: e.target.value }))}
              className={inputCls} placeholder="correo@glede.org.ec" />
          </div>
          <div className="flex justify-end pt-1">
            <button type="submit" className="flex items-center gap-2 bg-[#1A3A6B] hover:bg-[#0f2548] text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors">
              <Save size={13} /> Guardar cambios
            </button>
          </div>
        </form>
      </div>

      {/* FOTO DE PERFIL */}
      <div className="bg-white rounded-md border border-[#E2E8F0] overflow-hidden">
        <div className="px-6 py-4 border-b border-[#E2E8F0]">
          <h2 className="text-sm font-semibold text-[#1A3A6B]">Foto de perfil</h2>
          <p className="text-xs text-[#9CA3AF] mt-0.5">JPG o PNG. Máx. 2 MB.</p>
        </div>
        <div className="p-6 flex flex-col items-center gap-4">
          {/* Preview */}
          <div className="w-24 h-24 rounded-full border-2 border-[#E2E8F0] overflow-hidden bg-[#F4F7FB] flex items-center justify-center">
            {avatar
              ? <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
              : <User2 size={32} className="text-[#C8DFF4]" />
            }
          </div>

          {/* Upload */}
          <label className="cursor-pointer w-full">
            <div className="flex items-center justify-center gap-2 border border-dashed border-[#C8DFF4] rounded-lg py-3 px-4 text-xs text-[#4B6A8A] hover:bg-[#F4F7FB] transition-colors">
              <Upload size={13} />
              {avatar ? 'Cambiar imagen' : 'Subir imagen'}
            </div>
            <input type="file" accept="image/*" className="hidden"
              onChange={e => {
                const file = e.target.files?.[0]
                if (file) setAvatar(URL.createObjectURL(file))
              }} />
          </label>

          {avatar && (
            <button onClick={() => setAvatar(null)}
              className="text-[10px] text-red-400 hover:text-red-500 transition-colors">
              Quitar imagen
            </button>
          )}
        </div>
      </div>

      {/* CONTRASEÑA */}
      <div className="bg-white rounded-md border border-[#E2E8F0] overflow-hidden">
        <div className="px-6 py-4 border-b border-[#E2E8F0]">
          <h2 className="text-sm font-semibold text-[#1A3A6B]">Cambiar contraseña</h2>
          <p className="text-xs text-[#9CA3AF] mt-0.5">Mínimo 6 caracteres.</p>
        </div>
        <form onSubmit={cambiarPass} className="p-6 flex flex-col gap-4">
          {[
            { label: 'Contraseña actual',    key: 'actual',    show: showActual,    setShow: setShowActual    },
            { label: 'Nueva contraseña',     key: 'nueva',     show: showNueva,     setShow: setShowNueva     },
            { label: 'Confirmar contraseña', key: 'confirmar', show: showConfirmar, setShow: setShowConfirmar },
          ].map(f => (
            <div key={f.key}>
              <label className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280] flex items-center gap-1.5 mb-1.5">
                <Lock size={11} /> {f.label}
              </label>
              <div className="relative">
                <input type={f.show ? 'text' : 'password'} value={pass[f.key]}
                  onChange={e => setPass(p => ({ ...p, [f.key]: e.target.value }))}
                  required className={inputCls + ' pr-10'} placeholder="••••••••" />
                <button type="button" onClick={() => f.setShow(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#1A3A6B] transition-colors">
                  {f.show ? <Eye size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-end pt-1">
            <button type="submit" className="flex items-center gap-2 bg-[#1A3A6B] hover:bg-[#0f2548] text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors">
              <Save size={13} /> Actualizar contraseña
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default function Dashboard() {
  const navigate = useNavigate()
  const [search, setSearch]     = useState('')
  const [filtro, setFiltro]     = useState('todos')
  const [selected, setSelected] = useState(null)
  const [data, setData]         = useState(DEMO_SOLICITUDES)
  const [active, setActive]         = useState('solicitudes')
  const [sideOpen, setSideOpen]     = useState(false)
  const [collapsed, setCollapsed]   = useState(false)
  const [toast, setToast]           = useState(null)

  useEffect(() => {
    if (!sessionStorage.getItem('glede_admin')) navigate('/admin/login')
  }, [])

  function logout() {
    sessionStorage.removeItem('glede_admin')
    navigate('/admin/login')
  }

  const toastConfig = {
    aprobado:  { msg: 'El candidato fue aprobado.',       bg: 'bg-emerald-50 text-emerald-700 border border-emerald-200' },
    revisado:  { msg: 'El candidato está en revisión.',   bg: 'bg-sky-50 text-sky-700 border border-sky-200'             },
    rechazado: { msg: 'El candidato fue rechazado.',      bg: 'bg-red-50 text-red-400 border border-red-200'             },
  }

  function cambiarEstado(id, estado) {
    const nombre = data.find(s => s.id === id)?.nombre ?? ''
    setData(d => d.map(s => s.id === id ? { ...s, estado } : s))
    setSelected(null)
    const cfg = toastConfig[estado]
    if (cfg) {
      setToast({ msg: `${nombre} — ${cfg.msg}`, bg: cfg.bg })
      setTimeout(() => setToast(null), 3500)
    }
  }

  const filtradas = data.filter(s => {
    const matchSearch = s.nombre.toLowerCase().includes(search.toLowerCase()) ||
                        s.email.toLowerCase().includes(search.toLowerCase()) ||
                        s.profesion.toLowerCase().includes(search.toLowerCase())
    const matchFiltro = filtro === 'todos' || s.estado === filtro
    return matchSearch && matchFiltro
  })

  const counts = {
    total:     data.length,
    pendiente: data.filter(s => s.estado === 'pendiente').length,
    aprobado:  data.filter(s => s.estado === 'aprobado').length,
    rechazado: data.filter(s => s.estado === 'rechazado').length,
  }

  return (
    <div className="min-h-screen bg-[#F4F7FB] flex flex-col">

      {/* TOPBAR */}
      <header className="bg-[#0f2548] h-14 flex items-center justify-between px-5 shrink-0 z-30 relative">
        <div className="flex items-center gap-3">
          {/* hamburger mobile */}
          <button className="md:hidden text-[#94A3B8] hover:text-white transition-colors"
            onClick={() => setSideOpen(v => !v)}>
            <Menu size={18} />
          </button>
          <div>
            <span className="text-white text-[12px] font-bold uppercase tracking-[0.25em]">R.L.S. No. 69</span>
            <span className="text-[#94A3B8] text-[10px] ml-2 uppercase tracking-wider hidden sm:inline">· Francisco Huerta Montalvo</span>
          </div>
        </div>
        {/* Avatar + nombre */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-white/20 border border-white/40 flex items-center justify-center shrink-0">
            <span className="text-white text-xs font-bold">A</span>
          </div>
          <span className="text-white text-xs font-medium hidden sm:inline">Administrador</span>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">

        {/* OVERLAY mobile */}
        {sideOpen && (
          <div className="fixed inset-0 bg-black/30 z-20 md:hidden" onClick={() => setSideOpen(false)} />
        )}

        {/* SIDEBAR */}
        <aside className={`
          fixed md:static top-14 bottom-0 left-0 z-20
          bg-[#0f2548] flex flex-col py-5
          transition-all duration-200
          ${sideOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          ${collapsed ? 'w-14' : 'w-56'}
        `}>

          {/* Botón colapsar — solo desktop */}
          <div className={`hidden md:flex mb-4 ${collapsed ? 'justify-center px-0' : 'justify-end px-3'}`}>
            <button
              onClick={() => setCollapsed(v => !v)}
              className="text-white hover:text-[#94A3B8] transition-colors p-1"
              title={collapsed ? 'Expandir' : 'Colapsar'}
            >
              <Menu size={15} />
            </button>
          </div>

          {/* Nav items */}
          <nav className={`flex flex-col gap-1 flex-1 ${collapsed ? 'px-0' : 'px-2'}`}>
            {navItems.map(item => (
              <button
                key={item.key}
                onClick={() => { setActive(item.key); setSideOpen(false) }}
                title={collapsed ? item.label : ''}
                className={`flex items-center py-2.5 rounded-lg text-xs font-medium transition-colors w-full ${
                  collapsed ? 'justify-center px-0' : 'gap-3 px-2.5 text-left'
                } ${
                  active === item.key
                    ? 'bg-white/10 text-white font-semibold'
                    : 'text-[#94A3B8] hover:bg-white/10 hover:text-white'
                }`}
              >
                <item.icon size={15} className="shrink-0 text-white" />
                {!collapsed && <span>{item.label}</span>}
              </button>
            ))}
          </nav>

          {/* Cerrar sesión bottom */}
          <div className={`pt-4 border-t border-white/10 mx-2 ${collapsed ? 'flex justify-center' : 'px-2'}`}>
            <button
              onClick={logout}
              title="Cerrar sesión"
              className={`flex items-center gap-2.5 py-2 px-2.5 rounded-lg w-full text-xs font-medium text-red-400 hover:bg-white/10 hover:text-red-300 transition-colors ${collapsed ? 'justify-center' : ''}`}
            >
              <LogOut size={14} className="shrink-0" />
              {!collapsed && <span>Cerrar sesión</span>}
            </button>
          </div>
        </aside>

        {/* MAIN */}
        <main className="flex-1 overflow-auto p-5">

          {active === 'solicitudes' && (
            <>
              {/* STATS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
                {[
                  { label: 'Total',      value: counts.total,     icon: Users,       color: 'text-[#1A3A6B]' },
                  { label: 'Pendientes', value: counts.pendiente, icon: Clock,       color: 'text-yellow-600' },
                  { label: 'Aprobados',  value: counts.aprobado,  icon: CheckCircle, color: 'text-green-600'  },
                  { label: 'Rechazados', value: counts.rechazado, icon: XCircle,     color: 'text-red-500'    },
                ].map(s => (
                  <div key={s.label} className="bg-white rounded-md border border-[#E2E8F0] p-5">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[10px] text-[#9CA3AF] uppercase tracking-wider">{s.label}</p>
                      <s.icon size={14} className={s.color} />
                    </div>
                    <p className={`text-3xl font-bold ${s.color}`} style={{ fontFamily: 'Georgia, serif' }}>{s.value}</p>
                  </div>
                ))}
              </div>

              {/* TABLA */}
              <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden">
                <div className="p-4 border-b border-[#E2E8F0] flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                  <h2 className="font-semibold text-[#1A3A6B] text-sm">Solicitudes de Ingreso</h2>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-52">
                      <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                      <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar..."
                        className="w-full border border-[#D1D5DB] rounded-lg pl-8 pr-3 py-2 text-xs focus:outline-none focus:border-[#1A3A6B] transition-colors" />
                    </div>
                    <div className="relative">
                      <select value={filtro} onChange={e => setFiltro(e.target.value)}
                        className="border border-[#D1D5DB] rounded-lg px-3 py-2 text-xs appearance-none pr-7 focus:outline-none focus:border-[#1A3A6B] bg-white text-[#374151]">
                        <option value="todos">Todos</option>
                        <option value="pendiente">Pendientes</option>
                        <option value="revisado">En revisión</option>
                        <option value="aprobado">Aprobados</option>
                        <option value="rechazado">Rechazados</option>
                      </select>
                      <ChevronDown size={11} className="absolute right-2 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                        {['Nombre', 'Profesión', 'Contacto', 'Fecha', 'Estado', ''].map(h => (
                          <th key={h} className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF]">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filtradas.length === 0 ? (
                        <tr><td colSpan={6} className="text-center py-10 text-xs text-[#9CA3AF]">No hay solicitudes que coincidan.</td></tr>
                      ) : filtradas.map((s, i) => (
                        <tr key={s.id} className={`border-b border-[#F1F5F9] hover:bg-[#F8FAFC] transition-colors ${i % 2 === 1 ? 'bg-[#FAFBFC]' : ''}`}>
                          <td className="px-4 py-3"><p className="text-xs font-semibold text-[#1A2E4E]">{s.nombre}</p></td>
                          <td className="px-4 py-3 text-xs text-[#6B7280]">{s.profesion}</td>
                          <td className="px-4 py-3">
                            <p className="text-xs text-[#6B7280]">{s.telefono}</p>
                            <p className="text-[10px] text-[#9CA3AF]">{s.email}</p>
                          </td>
                          <td className="px-4 py-3 text-xs text-[#9CA3AF] whitespace-nowrap">{s.fecha}</td>
                          <td className="px-4 py-3">
                            <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full ${estadoConfig[s.estado].color}`}>
                              {estadoConfig[s.estado].label}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <button onClick={() => setSelected(s)} className="text-[#1A3A6B] hover:text-[#C9A84C] transition-colors" title="Ver detalle">
                              <Eye size={15} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {active === 'dashboard' && (
            <div className="flex items-center justify-center h-64 text-[#9CA3AF] text-sm">
              Módulo de resumen — próximamente.
            </div>
          )}
          {active === 'notif' && (
            <div className="flex items-center justify-center h-64 text-[#9CA3AF] text-sm">
              Módulo de notificaciones — próximamente.
            </div>
          )}
          {active === 'config' && <ConfigPanel showToast={(msg, bg) => { setToast({ msg, bg }); setTimeout(() => setToast(null), 3500) }} />}
        </main>
      </div>

      {/* TOAST */}
      {toast && (
        <div className={`fixed bottom-6 right-6 z-50 ${toast.bg} text-xs font-medium px-5 py-3 rounded-lg shadow-md flex items-center gap-3`}>
          <CheckCircle size={15} className="shrink-0" />
          {toast.msg}
        </div>
      )}

      {/* MODAL DETALLE */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg" onClick={e => e.stopPropagation()}>
            <div className="px-6 py-5 border-b border-[#E2E8F0] flex items-center justify-between">
              <div>
                <p className="text-[#1A3A6B] font-semibold text-sm">{selected.nombre}</p>
                <p className="text-[#6B7280] text-xs mt-0.5">{selected.profesion}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${estadoConfig[selected.estado].color}`}>
                  {estadoConfig[selected.estado].label}
                </span>
                <button onClick={() => setSelected(null)} className="text-[#9CA3AF] hover:text-[#1A3A6B] transition-colors">
                  <X size={16} />
                </button>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  ['Teléfono', selected.telefono],
                  ['Correo',   selected.email],
                  ['Fecha solicitud', selected.fecha],
                  ['Estado',   estadoConfig[selected.estado].label],
                ].map(([k, v]) => (
                  <div key={k}>
                    <p className="text-[9px] uppercase tracking-wider text-[#9CA3AF] mb-0.5">{k}</p>
                    <p className="text-xs font-medium text-[#1A3A6B]">{v}</p>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-wider text-[#9CA3AF] mb-1.5">¿Por qué desea unirse?</p>
                <p className="text-xs text-[#4B5563] leading-relaxed bg-[#F8FAFC] p-3 rounded border border-[#E2E8F0]">
                  {selected.motivo}
                </p>
              </div>
              <div className="flex gap-2 pt-1">
                <button onClick={() => cambiarEstado(selected.id, 'aprobado')}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-2 rounded-lg transition-colors">
                  Aprobar
                </button>
                <button onClick={() => cambiarEstado(selected.id, 'revisado')}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2 rounded-lg transition-colors">
                  En revisión
                </button>
                <button onClick={() => cambiarEstado(selected.id, 'rechazado')}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white text-xs font-semibold py-2 rounded-lg transition-colors">
                  Rechazar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
