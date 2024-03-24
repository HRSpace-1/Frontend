import { FC, ChangeEvent, useEffect, useState } from 'react'
import IconChecked from '../../images/icons/done-active.svg'
import styles from './scheme-card.module.scss'

interface ISchemeCard {
  title: string
  text: string
  type: string
  children?: React.ReactNode
  selectedCard: string | null
  setSelectedCard: React.Dispatch<string>
}

const SchemeCard: FC<ISchemeCard> = ({
  title,
  text,
  children,
  type,
  selectedCard,
  setSelectedCard
}) => {
  const [badgeClassName, setBadgeClassName] = useState(null)
  const isSelected = (value: string): boolean => selectedCard === value

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedCard(event.currentTarget.value)
  }

  useEffect(() => {
    if (type === 'green') {
      setBadgeClassName(styles.badgeBlockGreen)
    }
    if (type === 'orange') {
      setBadgeClassName(styles.badgeBlockOrange)
    }
    if (type === 'red') {
      setBadgeClassName(styles.badgeBlockRed)
    }
  }, [])

  return (
    <label>
      <input
        type='radio'
        value={type}
        className={styles.radio}
        checked={isSelected(type)}
        onChange={handleChange}
      />
      <div className={styles.schemeBlock}>
        {isSelected(type) && <IconChecked className={styles.checked} />}
        <div className={`${styles.badgeBlock} ${badgeClassName}`}>
          {children}
        </div>
        <div className={styles.infoBlock}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </label>
  )
}

export default SchemeCard
