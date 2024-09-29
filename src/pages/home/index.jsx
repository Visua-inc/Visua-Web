import Button from '../../components/Buttons/Button'
import ButtonForm from '../../components/Buttons/ButtonForm'
import Layout from '../../components/layout'
import styles from './index.module.css'

export default function Home() {
  return (
    <Layout>
      <section className={styles.section}>
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
            <a href='#about'>
              <Button buttonClass={styles.hButton}>Saiba Mais</Button>
            </a>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.about}`} id='about'>
        <div className={styles.content}>
          <h2 className={styles.title}>Sobre o Projeto</h2>
          <p className={styles.text}>
            Um projeto feito para a cadeira de Desing Centrado no Ser Humano,
            com supervisão e auxilio do professor Savio Silva de Almeida, a
            ideia de criar um protótipo de um aplicativo voltado a pessoa com
            algum tipo de deficiência, e ai tivemos a ideia de criar o Visua.
          </p>
          <p className={styles.text}>
            Visua Inicialmente é um projeto feito para pessoas com deficiência
            visual, onde ele tem a missão de ajudar pessoas com limitação,
            escaneando objetos e código de barras, assim trazendo uma analise do
            que é o objeto, ou, caso tenha sido escaneado com o código de barras
            procurar num API os dados daquele produto e assim descrever de forma
            mais detalhada.
          </p>
          <p className={styles.text}>
            O visua oferece uma interface acessível e pratica tanto para pessoas
            com deficiência quanto a pessoa que forem usar o aplicativo para uso
            próprio no dia à dia.
          </p>
          <p className={styles.text}>
            As cores forem pensadas a partir de um estudo das cores onde: O azul
            associa a calma, tranquilidade e clareza, sendo suave aos olhos. O
            Branco associa simplicidade e a neutralidade dando contraste aos
            textos. O Cinza cria um aspecto de suavidade e uma leitura mais
            confortável.
          </p>
        </div>
      </section>
    </Layout>
  )
}
