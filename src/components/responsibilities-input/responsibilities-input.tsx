import { FC } from 'react'
import Input from '../../ui/input/input'
import InputBlock from '../input-block/input-block'
import styles from './responsibilities-input.module.scss'
import { IPropsInputs } from '../../utils/types'

const ResponsibilitiesInput: FC<IPropsInputs> = ({ handleChange }) => {
  return (
    <InputBlock
      title='Обязанности и требования'
      extraClass={styles.responsibilitiesInput}
      required
    >
      <Input
        placeholder='Опишите подробнее вакансию'
        extraClass={styles.inputPrice}
        handleChange={handleChange}
      />
    </InputBlock>
  )
}

export default ResponsibilitiesInput
