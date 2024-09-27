/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { Mail, User, Lock, X } from 'lucide-react'
import { useState } from 'react'
import styles from './index.module.css' // Importando CSS Module
import Input from '../../Input'
import Button from '../../Buttons/Button'

export default function RegisterPopup({ onClose, toggleForm }) {
  const [emailValue, setEmailValue] = useState('')
  const [usernameValue, setUsernameValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  return (
    <div>
      <p className={styles.title}>Cadastre-se</p>
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
          type='text'
          placeholder='Nome de usuário'
          value={usernameValue}
          onChange={(e) => setUsernameValue(e.target.value)}
          icon={User}
          ariaLabel='Digite seu nome de usuário'
        />
        <Input
          type='password'
          placeholder='Senha'
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          icon={Lock}
          ariaLabel='Digite sua senha'
        />
        <Button buttonClass={styles.button}>Criar Conta</Button>
        <Button buttonClass={styles.button}>Entrar com Google</Button>
        <Link className={styles.link} onClick={toggleForm}>
          Já tem uma conta?
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
