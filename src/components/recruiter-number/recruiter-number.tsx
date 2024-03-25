import styles from './recruiter-number.module.scss'
import { FC, useEffect, useState } from 'react'
import InputBlock from '../input-block/input-block'
import Chip from '../../ui/сhip/сhip'
import { IPropsButtons } from '../../utils/types'

const RecruiterNumber: FC<IPropsButtons> = ({ addValue }) => {
  const [activeChips, setActiveChips] = useState(null)
  const type = 'secondary'

  useEffect(() => {
    const number = Number(activeChips)
    addValue('recruiters_number', number)
  }, [activeChips])

  return (
    <InputBlock title='Количество рекрутеров' extraClass='smallMargin'>
      <p className={styles.text}>
        Сколько рекрутеров могут работать над заявкой. Оплата будет только
        одному, кто закроет заявку
      </p>
      <div className={styles.chips}>
        <Chip
          title='1'
          type={type}
          activeChips={activeChips}
          setActiveChips={setActiveChips}
          name='1'
        />
        <Chip
          title='2'
          type={type}
          activeChips={activeChips}
          setActiveChips={setActiveChips}
          name='2'
        />
        <Chip
          title='3'
          type={type}
          activeChips={activeChips}
          setActiveChips={setActiveChips}
          name='3'
        />
      </div>
    </InputBlock>
  )
}

export default RecruiterNumber
