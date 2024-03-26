import { FC, useEffect, useState } from 'react'
import Chip from '../../ui/сhip/сhip'
import InputBlock from '../input-block/input-block'
import styles from './formalization-contract-input.module.scss'
import { IPropsButtons } from '../../utils/types'

const FormalizationContractInput: FC<IPropsButtons> = ({ addValue }) => {
  const type = 'secondary'
  const [activeChips, setActiveChips] = useState(null)

  useEffect(() => {
    addValue('paperwork', activeChips)
  }, [activeChips])

  return (
    <InputBlock title='Оформление'>
      <div className={styles.chips}>
        <Chip
          title='полное оформление'
          name='full_registration'
          activeChips={activeChips}
          setActiveChips={setActiveChips}
          some={false}
          type={type}
        />
        <Chip
          title='срочный договор'
          name='fixed_term'
          activeChips={activeChips}
          setActiveChips={setActiveChips}
          some={false}
          type={type}
        />
        <Chip
          title='ГПХ'
          name='gph'
          activeChips={activeChips}
          setActiveChips={setActiveChips}
          some={false}
          type={type}
        />
      </div>
    </InputBlock>
  )
}

export default FormalizationContractInput
