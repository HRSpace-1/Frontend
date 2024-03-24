import Chip from '../../ui/сhip/сhip'
import InputBlock from '../input-block/input-block'
import styles from './type-employment-input.module.scss'

function TypeEmploymentInput() {
  return (
    <InputBlock
      title='Занятость'
      extraClass={styles.typeEmploymentInput}
      required
    >
      <div className={styles.chips}>
        <Chip title='полная' />
        <Chip title='частичная' />
        <Chip title='проектная деятельность' />
      </div>
    </InputBlock>
  )
}

export default TypeEmploymentInput
