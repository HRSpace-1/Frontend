import { useState } from 'react'
import InputBlock from '../input-block/input-block'
import Input from '../../ui/input/input'
import styles from './employee-pay-input.module.scss'

function EmployeePayInput() {
  const [isHint, setIsHint] = useState(false)

  const handleClick = () => {
    setIsHint(!isHint)
  }

  return (
    <InputBlock title='Вознаграждение за одного сотрудника' required>
      <div className={styles.container}>
        <Input
          placeholder='Другая сумма оплаты'
          extraClass={styles.inputPrice}
        />
        <button
          className={styles.defaultPrice}
          type='button'
          onClick={handleClick}
        >
          155 000 ₽
        </button>
        {isHint && <></>}
      </div>
    </InputBlock>
  )
}

export default EmployeePayInput
