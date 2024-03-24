import { FC, useEffect, useState } from 'react'
import Chip from '../../ui/сhip/сhip'
import { IPropsButtons } from '../../utils/types'
import InputBlock from '../input-block/input-block'
import styles from './conditions-input.module.scss'

const ConditionsInput: FC<IPropsButtons> = ({ addValue }) => {
  const [activeChips, setActiveChips] = useState([])

  useEffect(() => {
    addValue('condition_vacancy', activeChips)
  }, [activeChips])
  return (
    <InputBlock title='Условия' extraClass={styles.conditionsInput} required>
      <div className={styles.chips}>
        <Chip
          title='обучение'
          name='education'
          setActiveChips={setActiveChips}
          activeChips={activeChips}
          some={true}
          id={1}
        />
        <Chip
          title='фитнес'
          name='fitness'
          setActiveChips={setActiveChips}
          activeChips={activeChips}
          some={true}
          id={1}
        />
        <Chip
          title='ДМС'
          name='VHI'
          setActiveChips={setActiveChips}
          activeChips={activeChips}
          some={true}
          id={1}
        />
      </div>
    </InputBlock>
  )
}

export default ConditionsInput
