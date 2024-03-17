import { FC } from 'react'
import styles from './form-info-card.module.scss'

interface IFormInfoCard {
  title: string
  text: string
}

const FormInfoCard: FC<IFormInfoCard> = ({ title, text }) => {
  return (
    <div className={styles.infoCard}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default FormInfoCard
