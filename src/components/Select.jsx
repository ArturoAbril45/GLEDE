import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Check } from 'lucide-react'

export default function Select({ value, onChange, options = [], placeholder = 'Selecciona...', disabled = false }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  function select(opt) {
    onChange(opt)
    setOpen(false)
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen(v => !v)}
        className={`w-full flex items-center justify-between gap-2 border rounded-xl px-4 py-2.5 text-sm text-left transition-all
          ${disabled ? 'bg-[#F9FAFB] border-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed' : 'bg-white border-[#D1D5DB] hover:border-[#1A3A6B] cursor-pointer'}
          ${open ? 'border-[#1A3A6B] ring-1 ring-[#1A3A6B]' : ''}
        `}
      >
        <span className={value ? 'text-[#1A1A2E]' : 'text-[#9CA3AF]'}>
          {value || placeholder}
        </span>
        <ChevronDown size={14} className={`shrink-0 text-[#9CA3AF] transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute z-50 mt-1.5 w-full bg-white border border-[#E2E8F0] rounded-xl shadow-lg overflow-hidden">
          <div className="max-h-52 overflow-y-auto py-1">
            {options.map(opt => (
              <button
                key={opt}
                type="button"
                onClick={() => select(opt)}
                className={`w-full flex items-center justify-between px-4 py-2 text-sm text-left transition-colors
                  ${value === opt ? 'bg-[#EEF2FF] text-[#1A3A6B] font-medium' : 'text-[#374151] hover:bg-[#F4F7FB]'}
                `}
              >
                {opt}
                {value === opt && <Check size={13} className="text-[#1A3A6B] shrink-0" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
