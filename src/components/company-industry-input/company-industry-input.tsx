import Input from '../../ui/input/input'
import InputBlock from '../input-block/input-block'
import styles from './company-industry-input.module.scss'

function CompanyIndustryInput() {
  return (
    <InputBlock
      title='Название вакансии'
      extraClass={styles.nameVacancyInput}
      required
    >
      <Input placeholder='Укажите вакансию' extraClass={styles.inputPrice} />
    </InputBlock>
  )
}

export default CompanyIndustryInput
