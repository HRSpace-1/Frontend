import { FC } from 'react'
import Button from '../../ui/button/button'
import styles from './sidebar.module.scss'

interface ISidebar {
  title: string
  text: string
  step: number
}

const Sidebar: FC<ISidebar> = ({ title, text, step }) => {
  return (
    <div className={`${styles.sidebar} ${styles[`step${step}`]}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <Button title='Задать  вопрос' action='chat' style='chat' />
      </div>
    </div>
  )
}

export default Sidebar
