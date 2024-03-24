import { FC, useEffect } from 'react'
import Input from '../../ui/input/input'
import InputBlock from '../input-block/input-block'
import styles from './company-industry-input.module.scss'
import { IPropsButtons } from '../../utils/types'

const CompanyIndustryInput: FC<IPropsButtons> = ({ addValue }) => {
  useEffect(() => {
    console.log(addValue)
  }, [])

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
