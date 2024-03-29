import InputBlock from '../input-block/input-block'
import SchemeCard from '../scheme-card/scheme-card'
import IconBadgeSmileGreen from '../../images/icons/badge-face-happy.svg'
import IconBadgeSmileOrange from '../../images/icons/badge-face-smile.svg'
import IconBadgeSmileRed from '../../images/icons/badge-face-neutral.svg'
import styles from './scheme-block.module.scss'
import { FC, useEffect, useState } from 'react'
import { IPropsButtons } from '../../utils/types'

const SchemeBlock: FC<IPropsButtons> = ({ addValue }) => {
  const [selectedCard, setSelectedCard] = useState(null)
  const [cardName, setCardName] = useState('')

  useEffect(() => {
    if (selectedCard === 'orange') {
      setCardName('fifty_fifty')
    }
    if (selectedCard === 'green') {
      setCardName('all_now')
    }
    if (selectedCard === 'red') {
      setCardName('all_after')
    }

    addValue('terms_payment', cardName)
  }, [selectedCard, cardName])

  return (
    <InputBlock title='Схема выплат рекрутеру' required>
      <div className={styles.schemeBlock}>
        <SchemeCard
          title='100% сразу'
          text='Полная выплата вознаграждения по факту выхода сотрудника'
          type='green'
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        >
          <div className={styles.badgeIcon}>
            <IconBadgeSmileGreen />
          </div>
          <p className={styles.badgeText}>Выбирают рекрутеры</p>
        </SchemeCard>
        <SchemeCard
          title='50% + 50%'
          text='50% выплачивается по факту выхода сотрудника, 50% — после гарантийного срока'
          type='orange'
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        >
          <div className={styles.badgeIcon}>
            <IconBadgeSmileOrange />
          </div>
          <p className={styles.badgeText}>Золотая середина</p>
        </SchemeCard>
        <SchemeCard
          title='100% после'
          text='Полная выплата  производится после  гарантийного срока (1 месяц)'
          type='red'
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        >
          <div className={styles.badgeIcon}>
            <IconBadgeSmileRed />
          </div>
          <p className={styles.badgeText}>Риски для рекрутера</p>
        </SchemeCard>
      </div>
    </InputBlock>
  )
}

export default SchemeBlock
