import styles from './recruiter-number.module.scss'
import { FC } from 'react'
import InputBlock from '../input-block/input-block'

const RecruiterNumber: FC = () => {
  return (
    <InputBlock title='Количество рекрутеров'>
      <p className={styles.text}>
        Сколько рекрутеров могут работать над заявкой. Оплата будет только
        одному, кто закроет заявку
      </p>
    </InputBlock>
  )
}

export default RecruiterNumber
