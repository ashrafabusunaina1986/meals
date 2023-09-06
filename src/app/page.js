import Image from 'next/image'
import styles from './pacge.module.css'
import Meals from '@/components/meals/Meals'

export default function Home() {
  return (
    <main className={styles.container} >
      <Meals/>
    </main>
  )
}

