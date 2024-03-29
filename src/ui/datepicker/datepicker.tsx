import { FC } from 'react'
import styles from './datepicker.module.scss'
import IconDate from '../../images/icons/IconDate.svg'

const Datepicker: FC = () => {
  return (
    <div className={styles.datepicker}>
      <input type='number' className={styles.input} />
      .
      <input type='number' className={styles.input} />
      .
      <input type='number' className={`${styles.input} ${styles.inputYeat}`} />
      <IconDate />
    </div>
  )
}

export default Datepicker
