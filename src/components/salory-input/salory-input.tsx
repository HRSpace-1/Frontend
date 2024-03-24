import InputBlock from '../input-block/input-block'
import styles from './salory-input.module.scss'

function SaloryInput() {
  return (
    <InputBlock title='Заработная плата'>
      <div className={styles.inputBlock}>
        <p className={styles.inputText}>от</p>
        <input type='number' className={styles.input} />
        <p className={styles.inputText}>до</p>
        <input type='number' className={styles.input} />
        <p className={styles.inputText}> ₽</p>
      </div>
    </InputBlock>
  )
}

export default SaloryInput
