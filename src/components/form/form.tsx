import { FC } from 'react'
import styles from './form.module.scss'

interface IForm {
  title: string
  children: React.ReactNode
}

const Form: FC<IForm> = ({ title, children }) => {
  return (
    <div className={styles.formBlock}>
      <div className={styles.sidebar}></div>
      <form className={styles.form}>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </form>
    </div>
  )
}

export default Form
