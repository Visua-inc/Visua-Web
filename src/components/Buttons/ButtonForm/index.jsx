import { useState } from 'react'
import Button from '../Button'
import styles from './index.module.css'

export default function ButtonForm ({ children, buttonClass, formType }) {
  const [showAuthContainer, setShowAuthContainer] = useState(false)

  const openAuthContainer = () => setShowAuthContainer(true)
  const closeAuthContainer = () => setShowAuthContainer(false)
  return (
    <div>
      <Button buttonClass={buttonClass} onclick={openAuthContainer}>
        {children}
      </Button>
      {showAuthContainer && (
        <div />
        // <AuthContainer formType={formType} onClose={closeAuthContainer} />
      )}
    </div>
  )
}
