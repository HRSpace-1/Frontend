import Input from '../../ui/input/input'
import Chip from '../../ui/сhip/сhip'
import InputBlock from '../input-block/input-block'
import styles from './work-format-input.module.scss'

function WorkFormatInput() {
  return (
    <InputBlock title='Формат' extraClass={styles.nameWorkFormatInput} required>
      <div className={styles.chips}>
        <Chip title='офис' />
        <Chip title='гибрид' />
        <Chip title='удаленно' />
        <Chip title='удаленно из РФ' />
      </div>
      <Input
        placeholder='Введите город или точный адресс'
        extraClass={styles.inputPrice}
      />
    </InputBlock>
  )
}

export default WorkFormatInput
