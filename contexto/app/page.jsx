import Image from 'next/image'
import styles from './page.module.css'
import Contador from '@/components/Contador'

export default function Home() {
  return (
    <main>
      <Contador></Contador>
    </main>
  )
}
