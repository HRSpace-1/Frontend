import Input from '../../ui/input/input'
import InputBlock from '../input-block/input-block'
import styles from './company-industry-input.module.scss'

function CompanyIndustryInput() {
  return (
    <InputBlock title='Отрасль компании' extraClass={styles.input}>
      <Input placeholder='Направление бизнеса' />
    </InputBlock>
  )
}

export default CompanyIndustryInput
