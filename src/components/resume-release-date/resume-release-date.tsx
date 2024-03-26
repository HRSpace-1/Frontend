import styles from './resume-release-date.module.scss'
import { FC, useState } from 'react'
import InputBlock from '../input-block/input-block'
import Datepicker from '../../ui/datepicker/datepicker'
import Chip from '../../ui/сhip/сhip'

const ResumeReleaseDate: FC = () => {
  const [activeChips, setActiveChips] = useState(null)
  const type = 'secondary'

  return (
    <InputBlock title='Желаемая дата выхода' extraClass='smallMargin'>
      <p className={styles.text}>
        В среднем — от 1 месяца. За срочный поиск рекрутер может запросить
        доплату
      </p>
      <div className={styles.chips}>
        <Datepicker />
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
