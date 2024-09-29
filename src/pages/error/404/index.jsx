import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.css'
import Button from '../../../components/Buttons/Button'

export default function Error404() {
  const [seconds, setSeconds] = useState(500)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          navigate('/Home')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [navigate])

  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorTitle}>404</h1>
      <h2 className={styles.errorSubtitle}>Página Não Encontrada</h2>
      <p className={styles.errorMessage}>
        A página que você está procurando não existe.
      </p>
      <p className={styles.redirectTimer}>
        Você será redirecionado para a página inicial em {seconds} segundos.
      </p>
      <Button
        onClick={() => navigate('/Home')}
        buttonClass={styles.button}
      >
        Ir para a Página Inicial Agora
      </Button>
    </div>
  )
}
