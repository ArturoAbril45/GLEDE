import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'

const ADMIN_USER = 'admin'
const ADMIN_PASS = 'glede2026'

export default function AdminLogin() {
  const [form, setForm]     = useState({ user: '', pass: '' })
  const [showPass, setShow] = useState(false)
  const [error, setError]   = useState('')
  const [loading, setLoad]  = useState(false)
  const navigate            = useNavigate()

  function handle(e) { setForm(f => ({ ...f, [e.target.name]: e.target.value })) }

  function submit(e) {
    e.preventDefault()
    setLoad(true)
    setError('')
    setTimeout(() => {
      if (form.user === ADMIN_USER && form.pass === ADMIN_PASS) {
        sessionStorage.setItem('glede_admin', '1')
        navigate('/admin/dashboard')
      } else {
        setError('Usuario o contraseña incorrectos.')
      }
      setLoad(false)
    }, 600)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ backgroundColor: '#EAECF0' }}>


      <p className="text-sm font-semibold text-[#1A3A6B] mb-1">¡Bienvenido al Panel Administrativo!</p>
      <p className="text-xs text-[#6B7280] mb-6">Por favor, inicia sesión con tus credenciales.</p>

      {/* CARD */}
      <div className="bg-white rounded-2xl shadow-md w-full max-w-sm px-8 py-8">
        <form onSubmit={submit} className="flex flex-col gap-4">

          <input
            name="user"
            value={form.user}
            onChange={handle}
            required
            autoComplete="username"
            placeholder="Ingrese nombre de usuario"
            className="w-full border border-[#D1D5DB] rounded-lg px-4 py-3 text-sm text-[#374151] placeholder-[#9CA3AF] focus:outline-none focus:border-[#1A3A6B] focus:ring-1 focus:ring-[#1A3A6B] transition-colors"
          />

          <div className="relative">
            <input
              name="pass"
              type={showPass ? 'text' : 'password'}
              value={form.pass}
              onChange={handle}
              required
              autoComplete="current-password"
              placeholder="Ingrese su contraseña"
              className="w-full border border-[#D1D5DB] rounded-lg px-4 py-3 pr-11 text-sm text-[#374151] placeholder-[#9CA3AF] focus:outline-none focus:border-[#1A3A6B] focus:ring-1 focus:ring-[#1A3A6B] transition-colors"
            />
            <button
              type="button"
              onClick={() => setShow(v => !v)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#1A3A6B] transition-colors"
            >
              {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {error && (
            <p className="text-xs text-red-600 text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1A3A6B] hover:bg-[#0f2548] text-white font-semibold py-3 rounded-lg text-sm transition-colors disabled:opacity-60 mt-1"
          >
            {loading ? 'Verificando...' : 'Iniciar sesión'}
          </button>

          <div className="text-center mt-1">
            <p className="text-xs text-[#9CA3AF]">
              ¿Experimentas algún inconveniente?
            </p>
            <p className="text-xs text-[#1A3A6B] font-medium mt-0.5">
              Por favor, comunícate con el administrador.
            </p>
          </div>

        </form>
      </div>

      {/* FOOTER */}
      <p className="text-[10px] text-[#9CA3AF] mt-6 text-center">
        © {new Date().getFullYear()} GLEDE · Todos los derechos reservados.
      </p>
    </div>
  )
}
