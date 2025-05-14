import styles from './page.module.css'
import UseFormStatusHook from './components/UseFormStatusHook'
import UseActionHook from './components/UseActionHook'
import UseOptimisticHook from './components/UseOptimisticHook'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <UseOptimisticHook />
        <UseFormStatusHook />
        <UseActionHook />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/Almudena-Rendon/hooks-react19"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="link-with-icon">
            Check out the repo{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.96.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.72-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.2 11.2 0 0 1 5.83 0c2.22-1.49 3.19-1.18 3.19-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.85 1.19 3.11 0 4.43-2.69 5.4-5.25 5.68.42.36.77 1.08.77 2.18 0 1.57-.01 2.84-.01 3.22 0 .31.2.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.74 18.26.5 12 .5Z" />
            </svg>
          </p>
        </a>

        <p>Thanks for reading ⚛️</p>
      </footer>
    </div>
  )
}
