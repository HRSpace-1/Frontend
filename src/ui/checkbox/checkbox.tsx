import styles from './checkbox.module.scss'
import { FC, useEffect, useState } from 'react'

interface ICheckbox {
  label: string
  setRecruiterResponsibilities: React.Dispatch<any>
  recruiterResponsibilities: Array<string> | null
}

const Checkbox: FC<ICheckbox> = ({
  label,
  setRecruiterResponsibilities,
  recruiterResponsibilities
}) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = () => {
    setIsChecked(!isChecked)
  }

  useEffect(() => {
    if (isChecked === true && recruiterResponsibilities === null) {
      setRecruiterResponsibilities([label])
    }
    if (isChecked === true && recruiterResponsibilities !== null) {
      setRecruiterResponsibilities([...recruiterResponsibilities, label])
    }
    if (isChecked === false && recruiterResponsibilities !== null) {
      const newArray = recruiterResponsibilities.filter(item => {
        return item !== label
      })

      setRecruiterResponsibilities(newArray)
    }
  }, [isChecked])

  return (
    <label className={styles.container}>
      <span className={styles.wrap}>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleChange}
          className={styles.checkbox}
          value={label}
        />
      </span>
      <p className={styles.label}>{label}</p>
    </label>
  )
}

export default Checkbox
