import Input from '../../ui/input/input'
import InputBlock from '../input-block/input-block'
import styles from './responsibilities-input.module.scss'

function ResponsibilitiesInput() {
  return (
    <InputBlock
      title='Обязанности и требования'
      extraClass={styles.responsibilitiesInput}
      required
    >
      <Input
        placeholder='Опишите подробнее вакансию'
        extraClass={styles.inputPrice}
      />
    </InputBlock>
  )
}

export default ResponsibilitiesInput
