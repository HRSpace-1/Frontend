import { FC, useEffect, useState } from 'react'
import Chip from '../../ui/сhip/сhip'
import { IPropsButtons } from '../../utils/types'
import InputBlock from '../input-block/input-block'
import styles from './type-employment-input.module.scss'

const TypeEmploymentInput: FC<IPropsButtons> = ({ addValue }) => {
  const [activeChips, setActiveChips] = useState([])

  useEffect(() => {
    // setActiveChips([...activeChips, { name: 'tatata', id: 1397418 }])
    addValue('employment', activeChips)
  }, [activeChips])

  return (
    <InputBlock
      title='Занятость'
      extraClass={styles.typeEmploymentInput}
      required
    >
      <div className={styles.chips}>
        <Chip
          title='полная'
          name='full_time'
          activeChips={activeChips}
          setActiveChips={setActiveChips}
          id={1}
          some={true}
        />
        <Chip
          title='частичная'
          name='"part_time'
          activeChips={activeChips}
          setActiveChips={setActiveChips}
          id={2}
          some={true}
        />
        <Chip
          title='проектная деятельность'
          name='project_activities'
          activeChips={activeChips}
          setActiveChips={setActiveChips}
          id={3}
          some={true}
        />
      </div>
    </InputBlock>
  )
}

export default TypeEmploymentInput
