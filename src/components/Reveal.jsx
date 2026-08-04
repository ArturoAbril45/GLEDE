import { useInView } from '../hooks/useInView'

const startTransforms = {
  up:    'translateY(32px)',
  down:  'translateY(-32px)',
  left:  'translateX(-32px)',
  right: 'translateX(32px)',
  fade:  'none',
}

export default function Reveal({ children, className = '', delay = 0, from = 'up' }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    inView ? 1 : 0,
        transform:  inView ? 'none' : (startTransforms[from] ?? startTransforms.up),
        transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
