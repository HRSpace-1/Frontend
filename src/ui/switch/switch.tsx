import { FC } from 'react'
import styles from './switch.module.scss'

interface ISwitch {
  isChecked: boolean
  setIsChecked: React.Dispatch<boolean>
}

const Switch: FC<ISwitch> = ({ isChecked, setIsChecked }) => {
  const handleToggle = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <input
        className={styles.checkbox}
        id='switch'
        type='checkbox'
        checked={isChecked}
        onChange={handleToggle}
      />
      <label
        className={styles.label}
        htmlFor='switch'
        style={{ background: isChecked && '#1785e5' }}
      >
        <span className={styles.button} />
      </label>
    </>
  )
}

export default Switch
