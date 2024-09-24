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
              <NavLink to='/#'>Download</NavLink>
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
    </div>
  )
}
