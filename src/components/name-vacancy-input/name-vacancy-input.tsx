import { FC } from 'react'
import Input from '../../ui/input/input'
import InputBlock from '../input-block/input-block'
import styles from './name-vacancy-input.module.scss'
import { IPropsInputs } from '../../utils/types'

const NameVacancyInput: FC<IPropsInputs> = ({ handleChange }) => {
  return (
    <InputBlock
      title='Название вакансии'
      extraClass={styles.nameVacancyInput}
      required
    >
      <Input
        placeholder='Укажите вакансию'
        extraClass={styles.inputPrice}
        name='title'
        handleChange={handleChange}
      />
    </InputBlock>
  )
}

export default NameVacancyInput
