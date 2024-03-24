import Input from '../../ui/input/input'
import InputBlock from '../input-block/input-block'
import styles from './company-industry-input.module.scss'

function CompanyIndustryInput() {
  return (
    <InputBlock
      title='Отрасль компании'
      extraClass={styles.nameVacancyInput}
      required
    >
      <Input placeholder='Направление бизнеса' extraClass={styles.inputPrice} />
    </InputBlock>
  )
}

export default CompanyIndustryInput
