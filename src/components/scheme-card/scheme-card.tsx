import { FC, useEffect, useState } from 'react'
import styles from './scheme-card.module.scss'

interface ISchemeCard {
  title: string
  text: string
  type: string
  children?: React.ReactNode
}

const SchemeCard: FC<ISchemeCard> = ({ title, text, children, type }) => {
  const [badgeClassName, setBadgeClassName] = useState(null)

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
    <div className={styles.schemeBlock}>
      <div className={`${styles.badgeBlock} ${badgeClassName}`}>{children}</div>
      <div className={styles.infoBlock}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  )
}

export default SchemeCard
