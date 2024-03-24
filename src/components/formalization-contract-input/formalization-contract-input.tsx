import Chip from '../../ui/сhip/сhip'
import InputBlock from '../input-block/input-block'
import styles from './formalization-contract-input.module.scss'

function FormalizationContractInput() {
  return (
    <InputBlock
      title='Оформление'
      extraClass={styles.experienceJobInput}
      required
    >
      <div className={styles.chips}>
        <Chip title='полное оформление' />
        <Chip title='срочный договор' />
        <Chip title='ГПХ' />
      </div>
    </InputBlock>
  )
}

export default FormalizationContractInput
