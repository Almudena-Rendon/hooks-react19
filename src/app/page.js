import Image from 'next/image'
import styles from './page.module.css'
import UseOptimitiscHook from './components/UseOptimitiscHook'
import UseFormStatusHook from './components/UseFormStatusHook'
import UseActionHook from './components/UseActionHook'


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <UseOptimitiscHook />
        <UseFormStatusHook />
        <UseActionHook />
      </main>
      <footer className={styles.footer}>
        Thanks for reading ⚛️
      </footer>
    </div>
  )
}
