import styles from './stop-list-switch.module.scss'
import { FC, useState } from 'react'
import SwitchBlock from '../switch-block/switch-block'
import Input from '../../ui/input/input'
import { IPropsInputs } from '../../utils/types'

const StopListSwitch: FC<IPropsInputs> = ({ handleChange }) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <SwitchBlock
      name='stoplist'
      title='Стоп-лист сотрудников'
      extraClass={styles.container}
      isChecked={isChecked}
      handleToggle={() => {
        setIsChecked(!isChecked)
      }}
    >
      {isChecked && (
        <Input
          placeholder='Укажите, кто входит в стоп-лист'
          isTextaria={true}
          name='stop_list_employee'
          handleChange={handleChange}
          extraClass={styles.textarea}
        />
      )}
    </SwitchBlock>
  )
}

export default StopListSwitch
