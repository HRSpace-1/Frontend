import styles from './recruiter-number.module.scss'
import { FC } from 'react'
import InputBlock from '../input-block/input-block'
import Chip from '../../ui/сhip/сhip'

const RecruiterNumber: FC = () => {
  const type = 'secondary'

  return (
    <InputBlock title='Количество рекрутеров' extraClass='smallMargin'>
      <p className={styles.text}>
        Сколько рекрутеров могут работать над заявкой. Оплата будет только
        одному, кто закроет заявку
      </p>
      <div className={styles.chips}>
        <Chip title='1' type={type} />
        <Chip title='2' type={type} />
        <Chip title='3' type={type} />
      </div>
    </InputBlock>
  )
}

export default RecruiterNumber
