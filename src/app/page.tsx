import { Card } from '@/components/Card'
import { home } from '@/data/data'
import Link from 'next/link'
import { LiaGithub } from 'react-icons/lia'

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
