import Chip from '../../ui/сhip/сhip'
import InputBlock from '../input-block/input-block'
import styles from './experience-job-input.module.scss'

function ExperienceJobInput() {
  return (
    <InputBlock
      title='Опыт работы'
      extraClass={styles.experienceJobInput}
      required
    >
      <div className={styles.chips}>
        <Chip title='без опыта' />
        <Chip title='до года' />
        <Chip title='от 1 года' />
        <Chip title='от 2 лет' />
        <Chip title='от 3 лет' />
      </div>
    </InputBlock>
  )
}

export default ExperienceJobInput
