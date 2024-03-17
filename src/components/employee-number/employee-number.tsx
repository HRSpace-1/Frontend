import InputBlock from '../input-block/input-block'
import styles from './employee-number.module.scss'
import IconPlus from '../../images/iconPlus.svg'
import IconMinus from '../../images/iconMinus.svg'
import { useState } from 'react'

function EmployeeNumber() {
  const [count, setCount] = useState(1)

  function increment(evt: React.SyntheticEvent) {
    evt.preventDefault()

    setCount(count + 1)
  }

  function decrement(evt: React.SyntheticEvent) {
    evt.preventDefault()
    if (count >= 2) {
      setCount(count - 1)
    }
  }

  return (
    <div className={`${styles.employeeNumber}`}>
      <InputBlock title='Сколько сотрудников' requred>
        <div className={styles.container}>
          <button className={styles.countButton} onClick={increment}>
            <IconPlus />
          </button>
          <p className={styles.count}>{count}</p>
          <button className={styles.countButton} onClick={decrement}>
            <IconMinus />
          </button>
        </div>
      </InputBlock>
    </div>
  )
}

export default EmployeeNumber
