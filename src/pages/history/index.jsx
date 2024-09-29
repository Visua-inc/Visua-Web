import { Link } from 'react-router-dom'
import Layout from '../../components/layout'
import styles from './index.module.css'
import datas from './datas'
import { useState } from 'react'
import Loading from '../../components/Loading'

export default function History() {
  const groupedDatas = datas.reduce((acc, item) => {
    if (!acc[item.dataEntrada]) {
      acc[item.dataEntrada] = []
    }
    acc[item.dataEntrada].push(item)
    return acc
  }, {})

  return (
    <Layout>
      <section className={styles.history}>
        {Object.keys(groupedDatas).map((data, index) => (
          <div key={index}>
            <h2>{data}</h2>
            <div className={styles.gridContainer}>
              {groupedDatas[data].map((item) => {
                const [loading, setLoading] = useState(true)
                return (
                  <Link
                    to={`/item/${item.id}`} 
                    key={item.id}
                    className={styles.entry}
                  >
                    {loading && (
                      <div className={styles.loadingContainer}>
                        <Loading />
                      </div>
                    )}{' '}
                    <img
                      className={styles.preview}
                      src={item.imagem}
                      alt={`preview ${item.titulo}`}
                      onLoad={() => setLoading(false)}
                      style={{ display: loading ? 'none' : 'block' }}
                    />
                    <p>{item.titulo}</p>
                    <p>Clique para mais informações</p>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </section>
    </Layout>
  )
}
