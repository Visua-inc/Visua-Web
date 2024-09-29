import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import datas from '../datas'
import Layout from '../../../components/layout'
import styles from './index.module.css'
import Loading from '../../../components/Loading'
import { ChevronLeft } from 'lucide-react'

export default function ItemDetail() {
  const navigate = useNavigate()
  const { id } = useParams()
  const item = datas.find((data) => data.id === parseInt(id))
  const [loading, setLoading] = useState(true)

  const handleBack = () => {
    navigate(-1)
  }

  if (!item) {
    return <div>Item não encontrado</div>
  }

  return (
    <Layout>
      <div>
        <button
          onClick={handleBack}
          aria-label='Fechar'
          className={styles.closeButton}
        >
          <ChevronLeft />
        </button>
        <section className={styles.details}>
          <div className={styles.imgContainer}>
            {loading && (
              <div className={styles.loadingContainer}>
                <Loading />
              </div>
            )}
            <img
              src={item.imagem}
              alt={item.titulo}
              width={400}
              height={250}
              onLoad={() => setLoading(false)}
              style={{ display: loading ? 'none' : 'block' }}
            />
            <h1 className={styles.title}>{item.titulo}</h1>
            <p className={styles.data}>Data: {item.dataEntrada}</p>
          </div>
          <div className={styles.textContainer}>
            <p className={styles.text}>{item.descricao}</p>
          </div>
        </section>
      </div>
    </Layout>
  )
}
