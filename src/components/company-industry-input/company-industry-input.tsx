import { FC, useEffect, useState } from 'react'
import Input from '../../ui/input/input'
import InputBlock from '../input-block/input-block'
import styles from './company-industry-input.module.scss'
import { IPropsButtons } from '../../utils/types'
import ChipTypePrimery from '../../ui/сhip/chip-type-primery'

const CompanyIndustryInput: FC<IPropsButtons> = ({ addValue }) => {
  const [specializationValue, setSpecializationValue] = useState(null)
  const [inputValue, setInputValue] = useState(null)

  useEffect(() => {
    addValue('company_specialization', specializationValue)
  }, [specializationValue])

  function handleKeyDownEnter(evt: React.KeyboardEvent<HTMLInputElement>) {
    if (evt.key === 'Enter') {
      setSpecializationValue(inputValue)
    }
  }

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const { value } = evt.target
    setInputValue(value)
  }

  function handleDelete() {
    setSpecializationValue(null)
  }

  return (
    <InputBlock title='Отрасль компании'>
      <Input
        placeholder='Направление бизнеса'
        handleChange={handleChange}
        handleKeyDownEnter={handleKeyDownEnter}
        extraClass={styles.input}
      />
      <div
        className={`${styles.chips} ${specializationValue !== null && styles.chipsActive}`}
      >
        {specializationValue !== null && (
          <ChipTypePrimery
            handleDelete={handleDelete}
            name={specializationValue}
            title={specializationValue}
            some
          />
        )}
      </div>
    </InputBlock>
  )
}

export default CompanyIndustryInput
