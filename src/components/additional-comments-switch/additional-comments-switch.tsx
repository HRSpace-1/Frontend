import styles from './additional-comments-switch.module.scss'
import { FC, useState } from 'react'
import SwitchBlock from '../switch-block/switch-block'
import Input from '../../ui/input/input'

const AdditionalCommentsSwitch: FC = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <SwitchBlock
      name='comments'
      title='Дополнительные комментарии'
      isChecked={isChecked}
      handleToggle={() => setIsChecked(!isChecked)}
    >
      {isChecked && (
        <Input
          placeholder='Укажите, доп. комментарии для рекрутера'
          isTextaria={true}
          extraClass={styles.textarea}
        />
      )}
    </SwitchBlock>
  )
}

export default AdditionalCommentsSwitch
