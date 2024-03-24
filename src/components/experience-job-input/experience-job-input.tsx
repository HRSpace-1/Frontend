import { FC, useEffect, useState } from 'react'
import Chip from '../../ui/сhip/сhip'
import { IPropsButtons } from '../../utils/types'
import InputBlock from '../input-block/input-block'
import styles from './experience-job-input.module.scss'

const ExperienceJobInput: FC<IPropsButtons> = ({ addValue }) => {
  const [activeChips, setActiveChips] = useState(null)

  useEffect(() => {
    addValue('experience', activeChips)
  }, [activeChips])

  return (
    <InputBlock
      title='Опыт работы'
      extraClass={styles.experienceJobInput}
      required
    >
      <div className={styles.chips}>
        <Chip
          title='без опыта'
          name='without_exp'
          setActiveChips={setActiveChips}
          activeChips={activeChips}
          some={false}
          id={1}
        />
        <Chip
          title='до года'
          name='up_to_one_year'
          setActiveChips={setActiveChips}
          activeChips={activeChips}
          some={false}
          id={2}
        />
        <Chip
          title='от 1 года'
          name='from_one_year'
          setActiveChips={setActiveChips}
          activeChips={activeChips}
          some={false}
          id={3}
        />
        <Chip
          title='от 2 лет'
          name='from_2_years'
          setActiveChips={setActiveChips}
          activeChips={activeChips}
          some={false}
          id={4}
        />
        <Chip
          title='от 3 лет'
          name='from_3_years'
          setActiveChips={setActiveChips}
          activeChips={activeChips}
          some={false}
          id={5}
        />
      </div>
    </InputBlock>
  )
}

export default ExperienceJobInput
