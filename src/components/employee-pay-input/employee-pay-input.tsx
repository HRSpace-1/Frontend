import InputBlock from '../input-block/input-block'
import styles from './employee-pay-input.module.scss'

function EmployeePayInput() {
  return (
    <InputBlock title='Вознаграждение за одного сотрудника' requred>
      <div className={styles.container}>
        <input
          className={styles.inputPrice}
          type='text'
          placeholder='Другая сумма оплаты'
        />
        <button className={styles.defaultPrice}>155 000 ₽</button>
      </div>
    </InputBlock>
  )
}

export default EmployeePayInput
