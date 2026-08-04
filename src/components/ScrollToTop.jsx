import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function goTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={goTop}
      aria-label="Volver arriba"
      className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded flex items-center justify-center bg-[#1A3A6B] text-white shadow-lg transition-all duration-300
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <ChevronUp size={20} strokeWidth={2.5} />
    </button>
  )
}
