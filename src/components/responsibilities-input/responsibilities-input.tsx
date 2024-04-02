import { FC } from 'react'
import Input from '../../ui/input/input'
import InputBlock from '../input-block/input-block'
import styles from './responsibilities-input.module.scss'
import { IPropsInputs } from '../../utils/types'

const ResponsibilitiesInput: FC<IPropsInputs> = ({ handleChange }) => {
  return (
    <InputBlock title='Обязанности и требования' extraClass={styles.inputBlock}>
      <p className={styles.hint}>
        описание рекрутер отредактирует перед публикацией
      </p>
      <Input
        placeholder='Опишите подробнее вакансию'
        // extraClass={styles.inputPrice}
        name='responsibilities_requirements'
        handleChange={handleChange}
        isTextaria={true}
        extraClass={styles.textarea}
      />
    </InputBlock>
  )
}

export default ResponsibilitiesInput
