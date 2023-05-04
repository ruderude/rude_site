import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main>
      <h1 className={styles.title}>Hello World!</h1>
    </main>
  )
}
