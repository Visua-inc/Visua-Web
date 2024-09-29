import styles from './index.module.css'

export default function Loading() {
  return (
    /* From Uiverse.io by rushik0507 */
    <svg viewBox='25 25 50 50' className={styles.loading}>
      <circle cx='50' cy='50' r='20' className={styles.loader}></circle>
    </svg>
  )
}
