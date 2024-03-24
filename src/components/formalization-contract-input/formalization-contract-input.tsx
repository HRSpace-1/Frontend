import { FC, useEffect, useState } from 'react'
import Chip from '../../ui/сhip/сhip'
import InputBlock from '../input-block/input-block'
import styles from './formalization-contract-input.module.scss'
import { IPropsButtons } from '../../utils/types'

const FormalizationContractInput: FC<IPropsButtons> = ({ addValue }) => {
  const [activeChips, setActiveChips] = useState(null)

  useEffect(() => {
    addValue('paperwork', activeChips)
  }, [activeChips])

  useEffect(() => {
    console.log(addValue)
  }, [])
  return (
    <InputBlock
      title='Оформление'
      extraClass={styles.experienceJobInput}
      required
    >
      <div className={styles.chips}>
        <Chip
          title='полное оформление'
          name='full_registration'
          id={1}
          activeChips={activeChips}
          setActiveChips={setActiveChips}
          some={false}
        />
        <Chip
          title='срочный договор'
          name='fixed_term'
          id={2}
          activeChips={activeChips}
          setActiveChips={setActiveChips}
          some={false}
        />
        <Chip
          title='ГПХ'
          name='gph'
          id={3}
          activeChips={activeChips}
          setActiveChips={setActiveChips}
          some={false}
        />
      </div>
    </InputBlock>
  )
}

export default FormalizationContractInput
