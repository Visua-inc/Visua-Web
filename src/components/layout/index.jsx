/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom'
import styles from './index.module.css'
import ButtonForm from '../Buttons/ButtonForm'
import { FaUser } from 'react-icons/fa'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import {
  SideBar,
  SideBarContentLi,
  SideBarContentUl,
} from '../../Animations/Motion/Variants'
import { useState } from 'react'

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavBar = () => {
    setIsOpen(!isOpen)
  }

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

          <nav className={styles.mobileNav}>
            <motion.button
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={() => toggleNavBar()}
              className={styles.mobileButton}
            >
              {isOpen ? <X /> : <Menu />}
            </motion.button>
            <motion.div
              variants={SideBar}
              initial='close'
              animate={isOpen ? 'open' : 'close'}
              className={styles.sideBar}
            >
              <div className={styles.sideBarWidth}></div>
              <motion.ul
                variants={SideBarContentUl}
                initial='close'
                animate={isOpen ? 'open' : 'close'}
                className={styles.sideBarUl}
              >
                <motion.li
                  variants={SideBarContentLi}
                  className={styles.sideBarLi}
                >
                  <NavLink to='/#' className={styles.sideBarLink}>
                    Pagina Inicial
                  </NavLink>
                </motion.li>
                <motion.li
                  variants={SideBarContentLi}
                  className={styles.sideBarLi}
                >
                  <NavLink to='/Download' className={styles.sideBarLink}>
                    Download
                  </NavLink>
                </motion.li>
                <motion.li
                  variants={SideBarContentLi}
                  className={styles.sideBarLi}
                >
                  <NavLink to='/History' className={styles.sideBarLink}>
                    Historico
                  </NavLink>
                </motion.li>
                <motion.li
                  variants={SideBarContentLi}
                  className={styles.sideBarLi}
                >
                  <ButtonForm buttonClass={styles.button} formType={false}>
                    <p>Entrar</p>
                    <span>
                      <FaUser className={styles.icon} />
                    </span>
                  </ButtonForm>
                </motion.li>
              </motion.ul>
            </motion.div>
          </nav>
        </div>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>© 2024 Visua. Todos os direitos reservados.</p>
        <p>
          <a
            href='https://github.com/seu-repositorio'
            target='_blank'
            rel='noopener noreferrer'
          >
            Acesse o Portfólio
          </a>
        </p>
      </footer>
    </div>
  )
}
