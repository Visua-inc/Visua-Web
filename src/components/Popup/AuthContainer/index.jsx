/* eslint-disable react/prop-types */
import { useState } from 'react'
import styles from './index.module.css'
import { motion } from 'framer-motion'
import LoginPopup from '../LoginPopup'
import RegisterPopup from '../RegisterPopup'

export default function AuthContainer({ formType, onClose }) {
  const [isForm, setIsForm] = useState(formType)
  const [isOpen, setIsOpen] = useState(true)

  const toggleForm = () => {
    setIsForm((prevState) => !prevState)
  }

  const handleClose = () => {
    setIsOpen(!isOpen)

    setTimeout(() => {
      onClose()
    }, 200)
  }

  return (
    <div className={styles.authContainer} onClick={handleClose}>
      <motion.div
        initial={{ opacity: 1, scale: 0.8 }}
        animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.3 }}
        transition={{ duration: 0.2 }}
        className={styles.authModal}
        onClick={(e) => e.stopPropagation()}
      >
        {isForm ? (
          <RegisterPopup onClose={handleClose} toggleForm={toggleForm} />
        ) : (
          <LoginPopup onClose={handleClose} toggleForm={toggleForm} />
        )}
      </motion.div>
    </div>
  )
}
