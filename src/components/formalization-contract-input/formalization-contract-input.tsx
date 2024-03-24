import Chip from '../../ui/сhip/сhip'
import InputBlock from '../input-block/input-block'
import styles from './formalization-contract-input.module.scss'

function FormalizationContractInput() {
  const type = 'secondary'

  return (
    <InputBlock title='Оформление'>
      <div className={styles.chips}>
        <Chip title='полное оформление' type={type} />
        <Chip title='срочный договор' type={type} />
        <Chip title='ГПХ' type={type} />
      </div>
    </InputBlock>
  )
}

export default FormalizationContractInput
