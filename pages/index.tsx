import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

import { IconContext } from "react-icons/lib"
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ゴーエイチヨンアールユー</title>
        <meta name="description" content="made by 5h4ru" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://5h4ru.com">5h4ru.com</a>
        </h1>

        <div className={styles.avatar}>
          <Image src="/sharu2.jpg" width={440} height={400} />
        </div>
        <p>↑これは <a href="https://twitter.com/limitshield" target="_blank" rel="noopener noreferrer">LimitShield</a> が描いてくれた</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <a href="https://github.com/5h4ru" target="_blank" rel="noopener noreferrer">
              <IconContext.Provider value={{ size: "100px" }}>
                <AiFillGithub />
              </IconContext.Provider>
            </a>
          </div>

          <div className={styles.card}>
            <a href="https://twitter.com/sharu0321" target="_blank" rel="noopener noreferrer">
              <IconContext.Provider value={{ size: "100px" }}>
                <AiFillTwitterCircle />
              </IconContext.Provider>
            </a>
          </div>

        </div>
      </main>
    </div>
  )
}

export default Home
