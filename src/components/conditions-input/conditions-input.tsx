import Chip from '../../ui/сhip/сhip'
import InputBlock from '../input-block/input-block'
import styles from './conditions-input.module.scss'

function ConditionsInput() {
  const type = 'secondary'

  return (
    <InputBlock title='Условия'>
      <div className={styles.chips}>
        <Chip title='обучение' type={type} />
        <Chip title='фитнес' type={type} />
        <Chip title='ДМС' type={type} />
      </div>
    </InputBlock>
  )
}

export default ConditionsInput
