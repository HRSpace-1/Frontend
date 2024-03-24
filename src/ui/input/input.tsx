import { FC } from 'react'
import styles from './input.module.scss'

interface IInput {
  placeholder: string
  extraClass?: string
  name?: string
  handleChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<IInput> = ({
  placeholder,
  extraClass = '',
  name,
  handleChange
}) => {
  return (
    <input
      name={name}
      className={`${styles.input} ${extraClass}`}
      onChange={handleChange}
      type='text'
      placeholder={placeholder}
    />
  )
}

export default Input
