import { useEffect, useState } from 'react'
import styles from './index.module.css'

const images = [
  '/eu n aguento mais/Camera.png',
  '/eu n aguento mais/Codigodebarras.png',
  '/eu n aguento mais/Historico.png',
  '/eu n aguento mais/Textoereproducao.png',
]

export default function Mockup() {
  const [currentImg, setCurrentImg] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.mockup}>
      <img src={images[currentImg]} alt={currentImg} />
      <p>Em Breve...</p>
    </div>
  )
}
