import InputBlock from '../input-block/input-block'
import Input from '../../ui/input/input'
import styles from './employee-pay-input.module.scss'

function EmployeePayInput() {
  return (
    <InputBlock title='Вознаграждение за одного сотрудника' required>
      <div className={styles.container}>
        <Input
          placeholder='Другая сумма оплаты'
          extraClass={styles.inputPrice}
        />
        <button className={styles.defaultPrice}>155 000 ₽</button>
      </div>
    </InputBlock>
  )
}

export default EmployeePayInput
