import InputBlock from '../input-block/input-block'
import styles from './result-block.module.scss'

function ResultBlock() {
  return (
    <InputBlock title='Результат' extraClass={styles.container}>
      <div className={styles.resultBlock}>
        <p className={styles.text}>Итоговая сумма с комиссией:</p>
        <p className={styles.endPrice}>125 000 ₽</p>
      </div>
    </InputBlock>
  )
}

export default ResultBlock
