import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const dots = [
  { x: '-18px', y: '-18px' },
  { x:  '18px', y: '-18px' },
  { x: '-18px', y:  '18px' },
  { x:  '18px', y:  '18px' },
]

export default function PageLoader() {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    const t = setTimeout(() => setVisible(false), 3000)
    return () => clearTimeout(t)
  }, [pathname])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[999] bg-white flex items-center justify-center">
      <div className="relative w-14 h-14">
        {dots.map((d, i) => (
          <span
            key={i}
            className="absolute w-6 h-6 rounded-full bg-[#1A3A6B]"
            style={{
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
              animation: 'square-dot 1s ease-in-out infinite alternate',
              animationDelay: `${i * 0.1}s`,
              '--tx': d.x,
              '--ty': d.y,
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes square-dot {
          0%   { transform: translate(0, 0); opacity: 0.3; }
          100% { transform: translate(var(--tx), var(--ty)); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
