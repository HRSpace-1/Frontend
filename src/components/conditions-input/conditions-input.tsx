import { FC, useEffect, useState } from 'react'
import Chip from '../../ui/сhip/сhip'
import { IPropsButtons } from '../../utils/types'
import InputBlock from '../input-block/input-block'
import styles from './conditions-input.module.scss'

const ConditionsInput: FC<IPropsButtons> = ({ addValue }) => {
  const [activeChips, setActiveChips] = useState([])
  const type = 'secondary'

  useEffect(() => {
    addValue('condition_vacancy', activeChips)
  }, [activeChips])

  return (
    <InputBlock title='Условия'>
      <div className={styles.chips}>
        <Chip
          title='обучение'
          name='education'
          setActiveChips={setActiveChips}
          activeChips={activeChips}
          some={true}
          id={1}
          type={type}
        />
        <Chip
          title='фитнес'
          name='fitness'
          setActiveChips={setActiveChips}
          activeChips={activeChips}
          some={true}
          id={1}
          type={type}
        />
        <Chip
          title='ДМС'
          name='VHI'
          setActiveChips={setActiveChips}
          activeChips={activeChips}
          some={true}
          id={1}
          type={type}
        />
      </div>
    </InputBlock>
  )
}

export default ConditionsInput
