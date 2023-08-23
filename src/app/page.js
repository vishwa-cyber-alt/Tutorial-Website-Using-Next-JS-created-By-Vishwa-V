import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Created By Vishwa V&nbsp;
          <code className={styles.code}></code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vishwa.jpg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={90}
              height={84}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/pl.jpg"
          alt="Next.js Logo"
          width={200}
          height={197}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://www.w3schools.com/python/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 id="d">
            Learn Python<span></span>
          </h2>
          <p></p>
        </a>

        <a
          href="https://www.w3schools.com/java/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 id="l">
            Learn Java <span></span>
          </h2>
          <p></p>
        </a>

        <a
          href="https://www.w3schools.com/js/DEFAULT.asp"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 id="tem">
            Learn JavaScript <span></span>
          </h2>
          <p></p>
        </a>

        <a
          href="https://www.w3schools.com/cpp/default.asp"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 id="de">
            Learn C++<span></span>
          </h2>
          <p>
            
          </p>
        </a>
      </div>
    </main>
  )
}
