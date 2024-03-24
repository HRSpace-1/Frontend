import Chip from '../../ui/сhip/сhip'
import InputBlock from '../input-block/input-block'
import styles from './conditions-input.module.scss'

function ConditionsInput() {
  return (
    <InputBlock title='Условия' extraClass={styles.conditionsInput} required>
      <div className={styles.chips}>
        <Chip title='обучение' />
        <Chip title='фитнес' />
        <Chip title='ДМС' />
      </div>
    </InputBlock>
  )
}

export default ConditionsInput
