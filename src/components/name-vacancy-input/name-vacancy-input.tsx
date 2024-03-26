import { FC, useState, useEffect } from 'react'
import Input from '../../ui/input/input'
import { IPropsButtons } from '../../utils/types'
import InputBlock from '../input-block/input-block'
import styles from './name-vacancy-input.module.scss'
import ChipTypePrimery from '../../ui/сhip/chip-type-primery'

const NameVacancyInput: FC<IPropsButtons> = ({ addValue }) => {
  const [arrChipsName, setArrChipsName] = useState([])
  const [chipName, setChipName] = useState(null)

  useEffect(() => {
    addValue('title', arrChipsName)
  }, [arrChipsName])

  function handleKeyDownEnter(evt: React.KeyboardEvent<HTMLInputElement>) {
    if (evt.key === 'Enter' && chipName !== null) {
      if (arrChipsName.length > 0) {
        const isChipName = arrChipsName.some(item => {
          return item === chipName
        })
        if (!isChipName) {
          setArrChipsName([...arrChipsName, chipName])
        }
      } else {
        setArrChipsName([...arrChipsName, chipName])
      }
    }
  }

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const { value } = evt.target
    setChipName(value)
  }

  function handleDelete(name: string) {
    const newArrChipsName = arrChipsName.filter(item => {
      return item !== name
    })

    setArrChipsName(newArrChipsName)
  }

  return (
    <InputBlock title='Название вакансии' extraClass={styles.input} required>
      <Input
        placeholder='Укажите вакансию'
        handleChange={handleChange}
        handleKeyDownEnter={handleKeyDownEnter}
      />
      <div
        className={`${styles.chips} ${arrChipsName.length > 0 && styles.chipsActive}`}
      >
        {arrChipsName.length > 0 &&
          arrChipsName.map((item: string, index: number) => {
            return (
              <ChipTypePrimery
                handleDelete={handleDelete}
                key={index}
                name={item}
                title={item}
                some
              />
            )
          })}
      </div>
    </InputBlock>
  )
}

export default NameVacancyInput
