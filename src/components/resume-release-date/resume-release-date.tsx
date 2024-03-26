import styles from './resume-release-date.module.scss'
import { FC } from 'react'
import InputBlock from '../input-block/input-block'
import Datepicker from '../../ui/datepicker/datepicker'
import Chip from '../../ui/сhip/сhip'

const ResumeReleaseDate: FC = () => {
  const type = 'secondary'

  return (
    <InputBlock title='Желаемая дата выхода' extraClass='smallMargin'>
      <p className={styles.text}>
        В среднем — от 1 месяца. За срочный поиск рекрутер может запросить
        доплату
      </p>
      <div className={styles.chips}>
        <Datepicker />
        <Chip name='week-later' title='через неделю' type={type} />
        <Chip name='in-two-weeks' title='через 2 недели' type={type} />
        <Chip name='month-later' title='через месяц' type={type} />
      </div>
    </InputBlock>
  )
}

export default ResumeReleaseDate
