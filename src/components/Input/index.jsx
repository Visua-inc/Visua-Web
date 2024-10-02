import { useState } from 'react'
import styles from './index.module.css' 

 
export default function Input({
  type,
  placeholder,
  value,
  onChange,
  icon: Icon,
  ariaLabel,
}) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className={styles.inputContainer}>
      {Icon && (
        <Icon
          className={`${styles.inputIcon} ${isFocused || value ? styles.iconFocused : ''}`}
        />
      )}
      <input
        type={type}
        placeholder={isFocused ? null : placeholder}
        aria-label={ariaLabel}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={styles.inputField}
      />
    </div>
  )
}
