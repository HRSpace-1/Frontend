import styles from './stop-list-switch.module.scss'
import { FC, useState } from 'react'
import SwitchBlock from '../switch-block/switch-block'
import Input from '../../ui/input/input'

const StopListSwitch: FC = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <SwitchBlock
      title='Стоп-лист сотрудников'
      extraClass={styles.container}
      isChecked={isChecked}
      setIsChecked={setIsChecked}
    >
      {isChecked && (
        <Input
          placeholder='Укажите, кто входит в стоп-лист'
          isTextaria={true}
          extraClass={styles.textarea}
        />
      )}
    </SwitchBlock>
  )
}

export default StopListSwitch
