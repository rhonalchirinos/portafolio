import { FaGithub, FaJs, FaLaravel, FaLinux, FaNodeJs, FaPhp, FaPython, FaReact, FaVuejs } from 'react-icons/fa'
import { SiDjango } from 'react-icons/si'

/**
 *
 * @param numCircles
 * @returns
 */
interface CirclePosition {
  top: string
  left: string
}

export function generateCirclePositions(numCircles: number): CirclePosition[] {
  const positions: Set<string> = new Set()
  const range = Array.from({ length: 22 }, (_, i) => 4 + i * 4)

  while (positions.size < numCircles) {
    const top = `${range[Math.floor(Math.random() * range.length)]}%`
    const left = `${range[Math.floor(Math.random() * range.length)]}%`
    positions.add(`${top},${left}`)
  }

  const result: CirclePosition[] = Array.from(positions).map((position) => {
    const [top, left] = position.split(',')
    return { top, left }
  })

  return result
}

const Circle = ({ duration = undefined, top, left }: { duration: number | undefined; top: string; left: string }) => {
  const items = [FaNodeJs, FaPhp, FaPython, FaGithub, FaLaravel, FaLinux, FaJs, FaReact, FaVuejs, SiDjango]
  const Icon = items[Math.floor(Math.random() * items.length)]

  return (
    <div
      className={`animate-float absolute rounded ${duration ? `duration-[${duration}s]` : ''} `}
      style={{
        top: top,
        left: left,
      }}
    >
      <Icon className="text-4xl text-white" />
    </div>
  )
}

export default Circle
