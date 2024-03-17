import { FC } from 'react'
import styles from './input-block.module.scss'

interface IInputBlock {
  title: string
  requred?: boolean
  children: React.ReactNode
}

const InputBlock: FC<IInputBlock> = ({ title, children, requred }) => {
  return (
    <div className={styles.inputBlock}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        {requred === true && <p className={styles.star}>*</p>}
      </div>
      {children}
    </div>
  )
}

export default InputBlock
