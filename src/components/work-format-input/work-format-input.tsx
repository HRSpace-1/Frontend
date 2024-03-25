import { FC, useEffect, useState } from 'react'
import Input from '../../ui/input/input'
import Chip from '../../ui/сhip/сhip'
import InputBlock from '../input-block/input-block'
import styles from './work-format-input.module.scss'
import { IPropsButtons } from '../../utils/types'

const WorkFormatInput: FC<IPropsButtons> = ({ addValue }) => {
  const type = 'secondary'
  const [activeChips, setActiveChips] = useState([])

  useEffect(() => {
    addValue('work_format', activeChips)
  }, [activeChips])

  return (
    <InputBlock title='Формат'>
      <div className={styles.chips}>
        <Chip
          title='офис'
          name='office'
          setActiveChips={setActiveChips}
          activeChips={activeChips}
          some={true}
          isWorkFormat
          type={type}
        />
        <Chip
          title='гибрид'
          name='hybrid'
          setActiveChips={setActiveChips}
          activeChips={activeChips}
          some={true}
          isWorkFormat
          type={type}
        />
        <Chip
          title='удаленно'
          name='remotely_world'
          setActiveChips={setActiveChips}
          activeChips={activeChips}
          some={true}
          isWorkFormat
          type={type}
        />
        <Chip
          title='удаленно из РФ'
          name='remotely_rf'
          setActiveChips={setActiveChips}
          activeChips={activeChips}
          some={true}
          isWorkFormat
          type={type}
        />
      </div>
      <Input
        placeholder='Введите город или точный адресс'
        extraClass={styles.input}
      />
    </InputBlock>
  )
}

export default WorkFormatInput
