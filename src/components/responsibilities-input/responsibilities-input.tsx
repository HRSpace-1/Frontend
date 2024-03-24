import Input from '../../ui/input/input'
import InputBlock from '../input-block/input-block'
import styles from './responsibilities-input.module.scss'

function ResponsibilitiesInput() {
  return (
    <InputBlock title='Обязанности и требования' extraClass={styles.inputBlock}>
      <p className={styles.hint}>
        описание рекрутер отредактирует перед публикацией
      </p>
      <Input
        placeholder='Опишите подробнее вакансию'
        isTextaria={true}
        extraClass={styles.textarea}
      />
    </InputBlock>
  )
}

export default ResponsibilitiesInput
