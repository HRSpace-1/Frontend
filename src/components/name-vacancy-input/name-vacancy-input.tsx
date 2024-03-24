import Input from '../../ui/input/input'
import InputBlock from '../input-block/input-block'
import styles from './name-vacancy-input.module.scss'

function NameVacancyInput() {
  return (
    <InputBlock title='Название вакансии' extraClass={styles.input} required>
      <Input placeholder='Укажите вакансию' />
    </InputBlock>
  )
}

export default NameVacancyInput
