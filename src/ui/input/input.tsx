import { FC } from 'react'
import styles from './input.module.scss'

interface IInput {
  placeholder: string
  isTextaria?: boolean
  extraClass?: string
  name?: string
  handleChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void
  handleKeyDownEnter?: (evt: React.KeyboardEvent<HTMLInputElement>) => void
}

const Input: FC<IInput> = ({
  placeholder,
  extraClass = '',
  name,
  handleChange,
  isTextaria = false,
  handleKeyDownEnter
}) => {
  return (
    <>
      {/* <input
        name={name}
        className={`${styles.input} ${extraClass}`}
        onChange={handleChange}
        type='text'
        placeholder={placeholder}
      /> */}
      {isTextaria ? (
        <input
          className={`${styles.common} ${styles.textarea} ${extraClass}`}
          placeholder={placeholder}
          onChange={handleChange}
          name={name}
        />
      ) : (
        <input
          className={`${styles.common} ${styles.input} ${extraClass}`}
          type='text'
          onChange={handleChange}
          placeholder={placeholder}
          name={name}
          onKeyDown={handleKeyDownEnter}
        />
      )}
    </>
  )
}

export default Input
