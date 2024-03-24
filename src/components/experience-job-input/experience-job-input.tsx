import { FC, useEffect } from 'react'
import Chip from '../../ui/сhip/сhip'
import { IPropsButtons } from '../../utils/types'
import InputBlock from '../input-block/input-block'
import styles from './experience-job-input.module.scss'

const ExperienceJobInput: FC<IPropsButtons> = ({ addValue }) => {
  useEffect(() => {
    console.log(addValue)
  }, [])

  return (
    <InputBlock
      title='Опыт работы'
      extraClass={styles.experienceJobInput}
      required
    >
      <div className={styles.chips}>
        <Chip title='без опыта' name='without_exp' />
        <Chip title='до года' name='up_to_one_year' />
        <Chip title='от 1 года' name='from_one_year' />
        <Chip title='от 2 лет' name='from_2_years' />
        <Chip title='от 3 лет' name='from_3_years' />
      </div>
    </InputBlock>
  )
}

export default ExperienceJobInput
