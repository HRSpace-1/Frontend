import { FC, useEffect } from 'react'
import Chip from '../../ui/сhip/сhip'
import InputBlock from '../input-block/input-block'
import styles from './formalization-contract-input.module.scss'
import { IPropsButtons } from '../../utils/types'

const FormalizationContractInput: FC<IPropsButtons> = ({ addValue }) => {
  useEffect(() => {
    console.log(addValue)
  }, [])
  return (
    <InputBlock
      title='Оформление'
      extraClass={styles.experienceJobInput}
      required
    >
      <div className={styles.chips}>
        <Chip title='полное оформление' name='full_registration' />
        <Chip title='срочный договор' name='fixed_term' />
        <Chip title='ГПХ' name='gph' />
      </div>
    </InputBlock>
  )
}

export default FormalizationContractInput
