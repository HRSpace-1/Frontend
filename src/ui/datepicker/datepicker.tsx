import { FC, useEffect } from 'react'
import styles from './datepicker.module.scss'
import IconDate from '../../images/icons/IconDate.svg'
import { useForm } from '../../utils/hooks'

interface IDatepicker {
  setDate: React.Dispatch<any>
}

const Datepicker: FC<IDatepicker> = ({ setDate }) => {
  const { inputValues, handleChange } = useForm({
    inputDay: null,
    inputMonth: null,
    inputYear: null
  })

  useEffect(() => {
    setDate(inputValues)
  }, [inputValues])

  return (
    <div className={styles.datepicker}>
      <input
        type='number'
        name='inputDay'
        className={styles.input}
        onChange={handleChange}
      />
      .
      <input
        type='string'
        name='inputMonth'
        className={styles.input}
        onChange={handleChange}
        pattern='^[ 0-9]+$'
      />
      .
      <input
        type='string'
        name='inputYear'
        className={`${styles.input} ${styles.inputYeat}`}
        onChange={handleChange}
        pattern='^[ 0-9]+$'
      />
      <IconDate />
    </div>
  )
}

export default Datepicker
