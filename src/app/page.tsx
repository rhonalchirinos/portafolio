import { Card } from '@/components/Card'
import { home } from '@/data/data'

/**
 *
 * @returns
 */
export default function Home() {
  return (
    <>
      {home.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </>
  )
}
