import { FC } from 'react'
import IconInfo from '../../images/icons/info.svg'
import styles from './form-info-card.module.scss'

interface IFormInfoCard {
  title: string
  text: string
  info?: boolean
}

const FormInfoCard: FC<IFormInfoCard> = ({ title, text, info = false }) => {
  const active = false

  return (
    <div className={`${styles.infoCard} ${active && styles.active}`}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>{text}</p>
      {info && (
        <button className={styles.info}>
          <IconInfo className={styles.icon} />
        </button>
      )}
    </div>
  )
}

export default FormInfoCard
