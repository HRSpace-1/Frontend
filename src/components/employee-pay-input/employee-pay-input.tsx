import { FC, useEffect, useState } from 'react'
import InputBlock from '../input-block/input-block'
import Input from '../../ui/input/input'
import Tooltip from '../../ui/tooltip/tooltip'
import styles from './employee-pay-input.module.scss'
import { IPropsButtons } from '../../utils/types'

const EmployeePayInput: FC<IPropsButtons> = ({ addValue }) => {
  const [isHint, setIsHint] = useState(false)
  const [premium, setPremium] = useState('155 000')
  const [inputValue, setInputValue] = useState('0')

  useEffect(() => {
    const text = premium.replace(' ', '')
    const number = Number(text)
    addValue('payment', number)
  }, [setPremium])

  const handleClick = () => {
    setIsHint(!isHint)
  }

  function handleKeyDownEnter(evt: React.KeyboardEvent<HTMLInputElement>) {
    if (evt.key === 'Enter') {
      setPremium(inputValue)
    }
  }

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const { value } = evt.target

    const newValue = String(value)

    setInputValue(newValue)
  }

  return (
    <InputBlock title='Вознаграждение за одного сотрудника' required>
      <div className={styles.container}>
        <Input
          placeholder='Другая сумма оплаты'
          extraClass={styles.inputPrice}
          handleKeyDownEnter={handleKeyDownEnter}
          handleChange={handleChange}
          typeInput={'number'}
        />
        <button
          className={styles.defaultPrice}
          type='button'
          onClick={handleClick}
        >
          {premium} ₽
          <Tooltip
            text='Средний оклад, исходя из информации, которую вы указали в первом шаге'
            isActive={isHint}
            position='bottom'
          />
        </button>
      </div>
    </InputBlock>
  )
}

export default EmployeePayInput
