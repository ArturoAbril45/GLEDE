import {
  Compass,
  Eye,
  Scale,
  Anchor as LucideAnchor,
  Columns2,
  Gem,
  BookOpen,
} from 'lucide-react'

// Compás — identidad masónica / craft
export function SquareAndCompass({ size = 48, color = 'currentColor', className = '' }) {
  return <Compass size={size} color={color} className={className} />
}

// Ojo — iluminación / filosofía / visión
export function EyeOfProvidence({ size = 48, color = 'currentColor', className = '' }) {
  return <Eye size={size} color={color} className={className} />
}

// Balanza — rectitud / justicia / equilibrio
export function PlumbBob({ size = 48, color = 'currentColor', className = '' }) {
  return <Scale size={size} color={color} className={className} />
}

// Ancla — esperanza / estabilidad / acción social
export function Anchor({ size = 48, color = 'currentColor', className = '' }) {
  return <LucideAnchor size={size} color={color} className={className} />
}

// Columnas clásicas — arquitectura / fraternidad / construcción moral
export function Trowel({ size = 48, color = 'currentColor', className = '' }) {
  return <Columns2 size={size} color={color} className={className} />
}

// Gema — sabiduría / valor / excelencia
export function StarOfSolomon({ size = 48, color = 'currentColor', className = '' }) {
  return <Gem size={size} color={color} className={className} />
}

// Libro abierto — formación académica / conocimiento
export function MasonicLevel({ size = 48, color = 'currentColor', className = '' }) {
  return <BookOpen size={size} color={color} className={className} />
}
