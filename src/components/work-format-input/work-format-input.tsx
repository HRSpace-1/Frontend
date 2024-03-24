import Input from '../../ui/input/input'
import Chip from '../../ui/сhip/сhip'
import InputBlock from '../input-block/input-block'
import styles from './work-format-input.module.scss'

function WorkFormatInput() {
  const type = 'secondary'

  return (
    <InputBlock title='Формат'>
      <div className={styles.chips}>
        <Chip title='офис' type={type} />
        <Chip title='гибрид' type={type} />
        <Chip title='удаленно' type={type} />
        <Chip title='удаленно из РФ' type={type} />
      </div>
      <Input
        placeholder='Введите город или точный адресс'
        extraClass={styles.input}
      />
    </InputBlock>
  )
}

export default WorkFormatInput
