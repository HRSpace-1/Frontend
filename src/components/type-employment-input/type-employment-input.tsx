import Chip from '../../ui/сhip/сhip'
import InputBlock from '../input-block/input-block'
import styles from './type-employment-input.module.scss'

function TypeEmploymentInput() {
  const type = 'secondary'

  return (
    <InputBlock title='Занятость'>
      <div className={styles.chips}>
        <Chip title='полная' type={type} />
        <Chip title='частичная' type={type} />
        <Chip title='проектная деятельность' type={type} />
      </div>
    </InputBlock>
  )
}

export default TypeEmploymentInput
