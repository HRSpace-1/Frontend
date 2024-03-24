import { FC, useEffect, useState } from 'react'
import Input from '../../ui/input/input'
import Chip from '../../ui/сhip/сhip'
import InputBlock from '../input-block/input-block'
import styles from './work-format-input.module.scss'
import { IPropsButtons } from '../../utils/types'

const WorkFormatInput: FC<IPropsButtons> = ({ addValue }) => {
  const [activeChips, setActiveChips] = useState([])

  useEffect(() => {
    addValue('work_format', activeChips)
  }, [activeChips])

  return (
    <InputBlock title='Формат' extraClass={styles.nameWorkFormatInput} required>
      <div className={styles.chips}>
        <Chip
          title='офис'
          name='office'
          setActiveChips={setActiveChips}
          activeChips={activeChips}
          some={true}
          id={1}
          isWorkFormat
        />
        <Chip
          title='гибрид'
          name='hybrid'
          setActiveChips={setActiveChips}
          activeChips={activeChips}
          some={true}
          id={2}
          isWorkFormat
        />
        <Chip
          title='удаленно'
          name='remotely_world'
          setActiveChips={setActiveChips}
          activeChips={activeChips}
          some={true}
          id={3}
          isWorkFormat
        />
        <Chip
          title='удаленно из РФ'
          name='remotely_rf'
          setActiveChips={setActiveChips}
          activeChips={activeChips}
          some={true}
          id={4}
          isWorkFormat
        />
      </div>
      <Input
        placeholder='Введите город или точный адресс'
        extraClass={styles.inputPrice}
      />
    </InputBlock>
  )
}

export default WorkFormatInput
