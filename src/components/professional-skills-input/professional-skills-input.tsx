import { FC, useEffect } from 'react'
import Input from '../../ui/input/input'
import { IPropsButtons } from '../../utils/types'
import InputBlock from '../input-block/input-block'
import styles from './professional-skills-input.module.scss'

const ProfessionalSkillsInput: FC<IPropsButtons> = ({ addValue }) => {
  useEffect(() => {
    console.log(addValue)
  }, [])
  return (
    <InputBlock
      title='Профессиональные навыки'
      extraClass={styles.professionalSkillsInput}
      required
    >
      <Input
        placeholder='Необходимые навыки кандидата'
        extraClass={styles.inputPrice}
      />
    </InputBlock>
  )
}

export default ProfessionalSkillsInput
