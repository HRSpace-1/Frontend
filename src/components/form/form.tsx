import { FC } from 'react'
import ButtonPanel from '../button-panel/button-panel'
import styles from './form.module.scss'

interface IForm {
  title: string
  children: React.ReactNode
  step: number
}

const Form: FC<IForm> = ({ title, children, step }) => {
  return (
    <form className={`${styles.form} ${styles[`step${step}`]}`}>
      <h1 className={styles.title}>{title}</h1>
      {children}
      <div className={styles.buttonPanel}>
        <ButtonPanel step={step} />
      </div>
    </form>
  )
}

export default Form
