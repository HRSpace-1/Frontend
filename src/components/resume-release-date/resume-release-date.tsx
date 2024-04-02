import styles from './resume-release-date.module.scss'
import { FC, useEffect, useState } from 'react'
import InputBlock from '../input-block/input-block'
import Datepicker from '../../ui/datepicker/datepicker'
import Chip from '../../ui/сhip/сhip'
import { IPropsButtons } from '../../utils/types'

const ResumeReleaseDate: FC<IPropsButtons> = ({ addValue }) => {
  const [activeChips, setActiveChips] = useState(null)
  const [date, setDate] = useState(null)
  const type = 'secondary'

  useEffect(() => {
    if (date !== null) {
      const newDate = `${date.inputYear}-${date.inputMonth}-${date.inputDay}T10:57:21.898Z`
      addValue('desired_release_date', newDate)
    }
  }, [date])

  return (
    <InputBlock title='Желаемая дата выхода' extraClass='smallMargin'>
      <p className={styles.text}>
        В среднем — от 1 месяца. За срочный поиск рекрутер может запросить
        доплату
      </p>
      <div className={styles.chips}>
        <Datepicker setDate={setDate} />
        <Chip
          name='week-later'
          title='через неделю'
          type={type}
          activeChips={activeChips}
          setActiveChips={setActiveChips}
          some={false}
        />
        <Chip
          name='in-two-weeks'
          title='через 2 недели'
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

export default ResumeReleaseDate
