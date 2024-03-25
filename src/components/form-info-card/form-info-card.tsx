import { FC, MouseEvent, useState } from 'react'
import IconInfo from '../../images/icons/info.svg'
import styles from './form-info-card.module.scss'

interface IFormInfoCard {
  title: string
  text: string
  info?: boolean
  infoText?: string
}

const FormInfoCard: FC<IFormInfoCard> = ({
  title,
  text,
  info = false,
  infoText = ''
}) => {
  const [isActive, setActive] = useState(false)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setActive(!isActive)
  }

  return (
    <div className={`${styles.infoCard} ${isActive && styles.active}`}>
      <h4 className={styles.title}>{title}</h4>
      {isActive ? (
        <p className={styles.text}>{infoText}</p>
      ) : (
        <p className={styles.text}>{text}</p>
      )}

      {info && (
        <button className={styles.info} onClick={handleClick}>
          <IconInfo className={styles.icon} />
        </button>
      )}
    </div>
  )
}

export default FormInfoCard
