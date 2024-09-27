import Button from '../../components/Buttons/Button'
import ButtonForm from '../../components/Buttons/ButtonForm'
import Layout from '../../components/layout'
import styles from './index.module.css'

export default function Home() {
  return (
    <Layout>
      <section className={styles.home}>
        <div className={styles.content}>
          <h2 className={styles.title}>Escaneie objetos com o Visua</h2>
          <p className={styles.text}>
            Visua é uma aplicação para pessoas com deficiência visual, onde você
            pode escanear objetos ao seu redor ou escanear o código de barras
            para assim receber descrições detalhadas em áudio e em texto,
            permitindo uma experiência mais inclusiva e independente.
          </p>
          <p className={styles.text}>
            Explore o mundo ao seu redor com confiança, graças à tecnologia do
            Visua, tornando a informação visual acessível à todos.
          </p>
          <div className={styles.buttonDiv}>
            <ButtonForm buttonClass={styles.hButton} formType='False'>
              Criar Conta
            </ButtonForm>
            <Button buttonClass={styles.hButton}>Saiba Mais</Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
