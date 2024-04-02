import styles from './resume-showing-date.module.scss'
import { FC, useEffect, useState } from 'react'
import InputBlock from '../input-block/input-block'
import Datepicker from '../../ui/datepicker/datepicker'
import Chip from '../../ui/сhip/сhip'
import { IPropsButtons } from '../../utils/types'

const ResumeShowingDate: FC<IPropsButtons> = ({ addValue }) => {
  const [activeChips, setActiveChips] = useState(null)
  const type = 'secondary'

  const [date, setDate] = useState(null)

  useEffect(() => {
    if (date !== null) {
      const newDate = `${date.inputYear}-${date.inputMonth}-${date.inputDay}T10:57:21.898Z`

      addValue('resume_showing_date', newDate)
    }
  }, [])

  return (
    <InputBlock title='Дата показа резюме' extraClass='smallMargin'>
      <p className={styles.text}>
        Когда готовы приступить к рассмотрению первых кандидатов
      </p>
      <div className={styles.chips}>
        <Datepicker setDate={setDate} />
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
