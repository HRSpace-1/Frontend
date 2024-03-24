import { FC } from 'react'
import styles from './input-block.module.scss'

interface IInputBlock {
  title: string
  required?: boolean
  children: React.ReactNode
  extraClass?: string
}

const InputBlock: FC<IInputBlock> = ({
  title,
  children,
  required,
  extraClass = ''
}) => {
  return (
    <div className={`${styles.inputBlock} ${extraClass}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        {required === true && <p className={styles.star}>*</p>}
      </div>
      {children}
    </div>
  )
}

export default InputBlock
