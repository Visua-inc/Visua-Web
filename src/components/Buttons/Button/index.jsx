import styles from './index.module.css'

export default function Button({ children, buttonClass, ...props }) {
  return (
    <button
      // className={styles.button}
      className={`${buttonClass} ${styles.button}`}
      {...props}
    >
      {children}
    </button>
  )
}
