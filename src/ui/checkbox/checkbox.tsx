import styles from './checkbox.module.scss'
import { FC, useState } from 'react'

interface ICheckbox {
  label: string
}

const Checkbox: FC<ICheckbox> = ({ label, ...props }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <label className={styles.container}>
      <span className={styles.wrap}>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleChange}
          className={styles.checkbox}
          {...props}
        />
      </span>
      <p className={styles.label}>{label}</p>
    </label>
  )
}

export default Checkbox
