import styles from './index.module.css'

export default function Layout({children}) {
  
  return (
    <div className={styles.Layout}>
      <header className={styles.header}>
        <div className={styles.container}>
          <img src="/Logo.svg" alt="Visua Logo" width={100} height={100}/>
          <nav>
            
          </nav>
        </div>
      </header>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  );
}
