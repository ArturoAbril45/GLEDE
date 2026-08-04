export function SquareAndCompass({ size = 48, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none"
         stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
         className={className}>
      {/* Escuadra: vértice abajo (50,76), brazos a 90° hacia arriba */}
      <polyline points="16,44 50,76 84,44" />
      {/* Compás: pivote arriba (50,10), patas hacia abajo */}
      <line x1="50" y1="10" x2="22" y2="89" />
      <line x1="50" y1="10" x2="78" y2="89" />
      {/* Pivote */}
      <circle cx="50" cy="10" r="4.5" fill={color} stroke="none" />
      {/* Arco entre puntas del compás */}
      <path d="M 22,89 A 32,9 0 0,0 78,89" />
      {/* G central */}
      <text x="50" y="59" textAnchor="middle" fontSize="19"
            fontFamily="Georgia,serif" fill={color} stroke="none">G</text>
    </svg>
  )
}

export function EyeOfProvidence({ size = 48, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 92" fill="none"
         stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
         className={className}>
      {/* Triángulo */}
      <polygon points="50,6 4,88 96,88" />
      {/* Párpado superior */}
      <path d="M 24,60 Q 50,40 76,60" />
      {/* Párpado inferior */}
      <path d="M 24,60 Q 50,78 76,60" />
      {/* Iris */}
      <circle cx="50" cy="61" r="10" />
      {/* Pupila */}
      <circle cx="50" cy="61" r="4.5" fill={color} stroke="none" />
    </svg>
  )
}

export function PlumbBob({ size = 48, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 110" fill="none"
         stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
         className={className}>
      {/* Anillo de suspensión */}
      <circle cx="30" cy="9" r="6.5" />
      {/* Hilo */}
      <line x1="30" y1="16" x2="30" y2="44" />
      {/* Cuerpo de la plomada */}
      <path d="M 16,44 L 44,44 L 46,68 L 30,104 L 14,68 Z" />
    </svg>
  )
}

export function Anchor({ size = 48, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 100" fill="none"
         stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
         className={className}>
      {/* Anillo superior */}
      <circle cx="40" cy="12" r="9" />
      {/* Shaft vertical */}
      <line x1="40" y1="21" x2="40" y2="85" />
      {/* Stock horizontal */}
      <line x1="16" y1="33" x2="64" y2="33" />
      {/* Flukes */}
      <path d="M 40,85 Q 16,92 14,72" />
      <path d="M 40,85 Q 64,92 66,72" />
      {/* Puntas de flukes */}
      <circle cx="14" cy="72" r="3.5" fill={color} stroke="none" />
      <circle cx="66" cy="72" r="3.5" fill={color} stroke="none" />
      {/* Cable curvo */}
      <path d="M 40,21 Q 64,21 66,72" strokeWidth="2" strokeDasharray="3 2" />
    </svg>
  )
}

export function Trowel({ size = 48, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none"
         stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
         className={className}>
      {/* Mango */}
      <line x1="80" y1="12" x2="58" y2="38" strokeWidth="6" />
      {/* Cuello */}
      <line x1="58" y1="38" x2="48" y2="48" strokeWidth="4" />
      {/* Hoja (rombo) */}
      <path d="M 8,68 L 48,48 L 88,68 L 48,90 Z" />
    </svg>
  )
}

export function StarOfSolomon({ size = 48, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none"
         stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
         className={className}>
      {/* Triángulo hacia arriba */}
      <polygon points="50,6 93,77 7,77" />
      {/* Triángulo hacia abajo */}
      <polygon points="50,94 7,23 93,23" />
      {/* Círculo central */}
      <circle cx="50" cy="50" r="11" />
    </svg>
  )
}

export function MasonicLevel({ size = 48, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 85" fill="none"
         stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
         className={className}>
      {/* Barra horizontal */}
      <line x1="5" y1="18" x2="95" y2="18" />
      {/* Pata izquierda */}
      <line x1="10" y1="18" x2="10" y2="34" />
      {/* Pata derecha */}
      <line x1="90" y1="18" x2="90" y2="34" />
      {/* Triángulo colgante */}
      <polygon points="50,18 30,72 70,72" />
      {/* Hilo de plomada interno */}
      <line x1="50" y1="18" x2="50" y2="65" strokeDasharray="4 3" strokeWidth="1.5" />
      {/* Burbuja */}
      <circle cx="50" cy="46" r="8" />
    </svg>
  )
}
