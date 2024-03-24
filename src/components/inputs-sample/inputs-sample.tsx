import styles from './inputs-sample.module.scss'

function InputsSample() {
  return (
    <div className={styles.inputs}>
      <button type='button' className={styles.input}>
        Загрузить уже созданное
      </button>
      <button type='button' className={styles.input}>
        Создать из шаблона
      </button>
    </div>
  )
}

export default InputsSample
