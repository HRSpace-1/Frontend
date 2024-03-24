import { FC, useEffect } from 'react'
import Chip from '../../ui/сhip/сhip'
import { IPropsButtons } from '../../utils/types'
import InputBlock from '../input-block/input-block'
import styles from './conditions-input.module.scss'

const ConditionsInput: FC<IPropsButtons> = ({ addValue }) => {
  useEffect(() => {
    console.log(addValue)
  }, [])
  return (
    <InputBlock title='Условия' extraClass={styles.conditionsInput} required>
      <div className={styles.chips}>
        <Chip title='обучение' name='education' />
        <Chip title='фитнес' name='fitness' />
        <Chip title='ДМС' name='VHI' />
      </div>
    </InputBlock>
  )
}

export default ConditionsInput
