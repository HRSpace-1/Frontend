import styles from './resume-showing-date.module.scss'
import { FC, useState } from 'react'
import InputBlock from '../input-block/input-block'
import Datepicker from '../../ui/datepicker/datepicker'
import Chip from '../../ui/сhip/сhip'

const ResumeShowingDate: FC = () => {
  const [activeChips, setActiveChips] = useState(null)
  const type = 'secondary'

  return (
    <InputBlock title='Дата показа резюме' extraClass='smallMargin'>
      <p className={styles.text}>
        Когда готовы приступить к рассмотрению первых кандидатов
      </p>
      <div className={styles.chips}>
        <Datepicker />
        <Chip
          name='in-three-days'
          title='через 3 дня'
          type={type}
          activeChips={activeChips}
          setActiveChips={setActiveChips}
          some={false}
        />
        <Chip
          name='week-later'
          title='через неделю'
          type={type}
          activeChips={activeChips}
          setActiveChips={setActiveChips}
          some={false}
        />
        <Chip
          name='month-later'
          title='через месяц'
          type={type}
          activeChips={activeChips}
          setActiveChips={setActiveChips}
          some={false}
        />
      </div>
    </InputBlock>
  )
}

export default ResumeShowingDate
