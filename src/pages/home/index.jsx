import Button from '../../components/Buttons/Button'
import ButtonForm from '../../components/Buttons/ButtonForm'
import Layout from '../../components/layout'
import Mockup from '../../components/Mockup'
import styles from './index.module.css'

export default function Home() {
  return (
    <Layout>
      <section className={styles.section}>
        <div className={styles.content}>
          <h2 className={styles.title}>Escaneie objetos com o Visua</h2>
          <p className={styles.text}>
            Visua é uma inovadora aplicação projetada para promover a inclusão
            de pessoas com deficiência visual. Com tecnologia de ponta, o Visua
            permite que os usuários escaneiem objetos e códigos de barras em seu
            ambiente, recebendo descrições detalhadas em áudio e texto. Essa
            funcionalidade proporciona uma experiência rica e autônoma,
            empoderando os usuários a interagir com o mundo ao seu redor de
            forma mais independente.
          </p>
          <p className={styles.text}>
            Descubra e explore seu ambiente com confiança. A tecnologia do Visua
            transforma a informação visual em conhecimento acessível para todos,
            garantindo que cada interação seja significativa e enriquecedora.
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
        <div className={styles.mockup}>
          <img className={styles.mockupImg} src='/Logo.svg' alt='' />
        </div>
      </section>

      <section className={`${styles.section} ${styles.about}`} id='about'>
        <Mockup/>
        <div className={styles.content}>
          <h2 className={styles.title}>Sobre o Projeto</h2>
          <p className={styles.text}>
            Visua é um projeto desenvolvido como parte da disciplina de Design
            Centrado no Ser Humano, sob a supervisão do professor Savio Silva de
            Almeida. A iniciativa nasceu da vontade de criar um protótipo de
            aplicativo voltado para pessoas com deficiência, resultando na
            concepção do Visua.
          </p>
          <p className={styles.text}>
            Este aplicativo é especialmente projetado para atender pessoas com
            deficiência visual, com a missão de promover autonomia e inclusão. O
            Visua permite que os usuários escaneiem objetos e códigos de barras,
            fornecendo análises detalhadas sobre os itens identificados. Ao
            escanear um código de barras, o aplicativo consulta uma API para
            recuperar informações relevantes do produto, apresentando-as de
            forma clara e acessível.
          </p>
          <p className={styles.text}>
            A interface do Visua foi elaborada para ser prática e intuitiva,
            beneficiando tanto pessoas com deficiência quanto usuários em geral
            em seu dia a dia.
          </p>
          <p className={styles.text}>
            As escolhas de cores para a interface foram fundamentadas em um
            estudo cromático, onde o azul representa calma, tranquilidade e
            clareza, sendo suave para os olhos. O branco simboliza simplicidade
            e neutralidade, criando contraste com os textos. O cinza foi
            escolhido para proporcionar suavidade e facilitar a leitura,
            contribuindo para uma experiência visual agradável e confortável.
          </p>
        </div>
      </section>
    </Layout>
  )
}
