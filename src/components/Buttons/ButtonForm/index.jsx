/* eslint-disable react/prop-types */
import { useState } from 'react'
import Button from '../Button'
import AuthContainer from '../../Popup/AuthContainer'

export default function ButtonForm({ children, buttonClass, formType }) {
  const [showAuthContainer, setShowAuthContainer] = useState(false)

  const openAuthContainer = () => setShowAuthContainer(true)
  const closeAuthContainer = () => setShowAuthContainer(false)
  return (
    <div>
      <Button buttonClass={buttonClass} onClick={openAuthContainer}>
        {children}
      </Button>
      {showAuthContainer && (
        <AuthContainer formType={formType} onClose={closeAuthContainer} />
      )}
    </div>
  )
}
