import Layout from '../../components/layout'
import styles from './index.module.css'

export default function Home() {
  return (
    <Layout>
        <div className={styles.ok}>
          <div>
            <h2>Escaneie objetos com o Visua</h2>
          </div>
          <p>Visua é uma aplicação para pessoas com deficiência visual, onde você
          pode escanear objetos ao seu redor ou escanear o código de barras para
          assim receber descrições detalhadas em áudio e em texto, permitindo
          uma experiência mais inclusiva e independente.</p>
          <p>Explore o mundo ao seu redor com confiança, graças à tecnologia do
          Visua, tornando a informação visual acessível à todos.</p>
        </div>
    </Layout>
  )
}