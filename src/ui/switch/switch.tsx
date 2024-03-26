import { FC } from 'react'
import styles from './switch.module.scss'

interface ISwitch {
  name?: string
  isChecked: boolean
  handleToggle: () => void
}

const Switch: FC<ISwitch> = ({ name, isChecked, handleToggle }) => {
  return (
    <>
      <input
        id={name}
        className={styles.checkbox}
        name={name}
        type='checkbox'
        checked={isChecked}
        onChange={handleToggle}
      />
      <label
        className={styles.label}
        htmlFor={name}
        style={{ background: isChecked && '#1785e5' }}
      >
        <span className={styles.button} />
      </label>
    </>
  )
}

export default Switch
