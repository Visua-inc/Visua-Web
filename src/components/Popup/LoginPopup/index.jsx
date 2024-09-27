/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Mail, Lock, X } from 'lucide-react'
import Button from '../../Buttons/Button'
import Input from '../../Input'
import { Link } from 'react-router-dom'
import styles from './index.module.css'

export default function LoginPopup({ onClose, toggleForm }) {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  return (
    <div>
      <p className={styles.title}>Login</p>
      <form>
        <Input
          type='email'
          placeholder='E-mail'
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          icon={Mail}
          ariaLabel='Digite seu e-mail'
        />
        <Input
          type='password'
          placeholder='Senha'
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          icon={Lock}
          ariaLabel='Digite sua senha'
        />
        <Button buttonClass={styles.button}>Entrar</Button>
        <Button buttonClass={styles.button}>Entrar com Google</Button>
        <Link onClick={toggleForm} className={styles.link}>
          Não tem uma conta?
        </Link>
      </form>
      <button
        onClick={onClose}
        aria-label='Fechar'
        className={styles.closeButton}
      >
        <X />
      </button>
    </div>
  )
}
