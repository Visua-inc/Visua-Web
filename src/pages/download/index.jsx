import Button from '../../components/Buttons/Button'
import Layout from '../../components/layout'
import styles from './index.module.css'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import QrCode from '../../../public/Qr_Code.svg'

export default function Download() {
  return (
    <Layout>
      <section className={styles.download}>
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <img src={QrCode} alt='Qr Code' />
          </div>
          <div className={styles.botao}>
            <p className={styles.p1}>Baixe agora mesmo!</p>
            <Button buttonClass={styles.b}>
              <FaApple className={styles.icona} />
              <p>Baixe na App Store</p>
            </Button>
            <Button buttonClass={styles.b}>
              <FaGooglePlay className={styles.icongp} />
              <p>Baixe no Google Play</p>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
