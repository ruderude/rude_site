import Image from 'next/image'
import styles from './page.module.scss'

// const btnImage = '/images/button/rude_logo_icon_white.png'

export default function Home() {
  return (
    <main>
      <h1 className={styles.title}>Hello World!</h1>
      <div>
        {/* <Image
          src={btnImage}
          alt="画像"
          width={400}
          height={400}
          sizes="150px"
          style={{
            width: '150px',
            height: 'auto',
          }}
        /> */}
      </div>
    </main>
  )
}
