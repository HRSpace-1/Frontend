import { FC, useEffect } from 'react'
import Input from '../../ui/input/input'
import Chip from '../../ui/сhip/сhip'
import InputBlock from '../input-block/input-block'
import styles from './work-format-input.module.scss'
import { IPropsButtons } from '../../utils/types'

const WorkFormatInput: FC<IPropsButtons> = ({ addValue }) => {
  useEffect(() => {
    console.log(addValue)
  }, [])

  return (
    <InputBlock title='Формат' extraClass={styles.nameWorkFormatInput} required>
      <div className={styles.chips}>
        <Chip title='офис' name='office' />
        <Chip title='гибрид' name='hybrid' />
        <Chip title='удаленно' name='remotely_world' />
        <Chip title='удаленно из РФ' name='remotely_rf' />
      </div>
      <Input
        placeholder='Введите город или точный адресс'
        extraClass={styles.inputPrice}
      />
    </InputBlock>
  )
}

export default WorkFormatInput
