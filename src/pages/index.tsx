import Head from "next/head";

import { GiPadlock } from "react-icons/gi";

import styles from "../styles/pages/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2 >Sign in to your account</h2>
          </div>
          
          <form>
            <div className={styles.myInput}>
              <input 
                name="email" 
                type="email" 
                placeholder="E-mail"
              />
              <input 
                name="password" 
                type="password" 
                placeholder="Senha" 
              />
            </div>

            <div className={styles.forgot}>
              <div>
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                />
                <label htmlFor="remember_me">
                  Remember me
                </label>
              </div>

              <div>
                <a href="#">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div className={styles.myButton}>
              <button type="submit">
                <span><GiPadlock /></span>
                <strong>Sign in</strong> 
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
