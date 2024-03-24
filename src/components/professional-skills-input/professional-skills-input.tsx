import Input from '../../ui/input/input'
import InputBlock from '../input-block/input-block'
import styles from './professional-skills-input.module.scss'

function ProfessionalSkillsInput() {
  return (
    <InputBlock
      title='Профессиональные навыки'
      extraClass={styles.input}
      required
    >
      <Input placeholder='Необходимые навыки кандидата' />
    </InputBlock>
  )
}

export default ProfessionalSkillsInput
