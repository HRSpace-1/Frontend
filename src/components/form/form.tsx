import { FC } from 'react'
import ButtonPanel from '../button-panel/button-panel'
import styles from './form.module.scss'

interface IForm {
  title: string
  children: React.ReactNode
  step: number
  clickButtonForward?: () => void
}

const Form: FC<IForm> = ({ title, children, step, clickButtonForward }) => {
  return (
    <form className={styles.form}>
      <h1 className={styles.title}>{title}</h1>
      {children}
      <div className={styles.buttonPanel}>
        <ButtonPanel step={step} clickButtonForward={clickButtonForward} />
      </div>
    </form>
  )
}

export default Form
