import { FC } from 'react'
import ButtonPanel from '../button-panel/button-panel'
import styles from './form.module.scss'
import { useAppSelector } from '../../services/hooks'

interface IForm {
  title: string
  children: React.ReactNode
}

const Form: FC<IForm> = ({ title, children }) => {
  const { step } = useAppSelector(state => state.progressBar)

  return (
    <div className={styles.formBlock}>
      <div className={styles.sidebar}></div>
      <form className={styles.form}>
        <h1 className={styles.title}>{title}</h1>
        {children}
        <div className={styles.buttonPanel}>
          <ButtonPanel step={step} />
        </div>
      </form>
    </div>
  )
}

export default Form
