import styles from './resume-release-date.module.scss'
import { FC } from 'react'
import InputBlock from '../input-block/input-block'
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
        <Chip name='desired_release_date' title='через неделю' type={type} />
        <Chip name='desired_release_date' title='через 2 недели' type={type} />
        <Chip name='desired_release_date' title='через месяц' type={type} />
      </div>
    </InputBlock>
  )
}

export default ResumeReleaseDate
