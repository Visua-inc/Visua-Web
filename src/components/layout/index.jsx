/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom'
import styles from './index.module.css'
import ButtonForm from '../Buttons/ButtonForm'
import { FaUser } from 'react-icons/fa'

export default function Layout({ children }) {
  return (
    <div className={styles.Layout}>
      <header className={styles.header}>
        <div className={styles.SeparatorHeader}>
          <img src='/Logo.svg' alt='Visua Logo' width={100} height={100} />
          <nav>
            <div className={styles.navlinks}>
              <NavLink to='/#'>Pagina Inicial</NavLink>
              <NavLink to='/Download'>Download</NavLink>
              <NavLink to='/History'>Historico</NavLink>
              <div>
                <ButtonForm buttonClass={styles.button} formType={false}>
                  <p>Entrar</p>
                  <span>
                    <FaUser className={styles.icon} />
                  </span>
                </ButtonForm>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>© 2024 Visua. Todos os direitos reservados.</p>
        <p>
          <a href='https://github.com/seu-repositorio' target='_blank' rel='noopener noreferrer'>
            Acesse o Portfólio
          </a>
        </p>
      </footer>
    </div>
  )
}
