import Chip from '../../ui/сhip/сhip'
import InputBlock from '../input-block/input-block'
import styles from './experience-job-input.module.scss'

function ExperienceJobInput() {
  const type = 'secondary'

  return (
    <InputBlock title='Опыт работы'>
      <div className={styles.chips}>
        <Chip title='без опыта' type={type} />
        <Chip title='до года' type={type} />
        <Chip title='от 1 года' type={type} />
        <Chip title='от 2 лет' type={type} />
        <Chip title='от 3 лет' type={type} />
      </div>
    </InputBlock>
  )
}

export default ExperienceJobInput
