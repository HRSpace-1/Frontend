import { FC } from 'react'
import styles from './input.module.scss'

interface IInput {
  placeholder: string
  isTextaria?: boolean
  extraClass?: string
}

const Input: FC<IInput> = ({
  placeholder,
  isTextaria = false,
  extraClass = ''
}) => {
  return (
    <>
      {isTextaria ? (
        <textarea
          className={`${styles.common} ${styles.textarea} ${extraClass}`}
          placeholder={placeholder}
        />
      ) : (
        <input
          className={`${styles.common} ${styles.input} ${extraClass}`}
          type='text'
          placeholder={placeholder}
        />
      )}
    </>
  )
}

export default Input
