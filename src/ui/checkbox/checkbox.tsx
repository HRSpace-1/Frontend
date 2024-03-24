import styles from './checkbox.module.scss'
import { FC } from 'react'

const Checkbox: FC = () => {
  return (
    <label className={styles.label}>
      <input type='checkbox' className={styles.checkbox} />
      <span className={styles.checkmark}></span>
    </label>
  )
}

export default Checkbox
