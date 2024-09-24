import Button from '../../components/Buttons/Button'
import Layout from '../../components/layout'
import styles from './index.module.css'

export default function History() {
  return (
    <Layout>
      <section className={styles.history}>
        <h2>Hoje</h2>
        <Button buttonClass={styles.entry}>
          <img
            className={styles.preview}
            src=''
            alt='preview'
            width={259}
            height={145}
          />
          <p>Titulo da Entrada da Lista</p>
          <p>00/00/0000</p>
        </Button>
      </section>
    </Layout>
  )
}
