import { FC } from 'react'
import styles from './input.module.scss'

interface IInput {
  placeholder: string
  extraClass?: string
}

const Input: FC<IInput> = ({ placeholder, extraClass = '' }) => {
  return (
    <input
      className={`${styles.input} ${extraClass}`}
      type='text'
      placeholder={placeholder}
    />
  )
}

export default Input
