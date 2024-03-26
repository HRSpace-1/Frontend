import styles from './preliminary-interview-switch.module.scss'
import { FC, useState } from 'react'
import SwitchBlock from '../switch-block/switch-block'

const PreliminaryInterviewSwitch: FC = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <SwitchBlock
      name='resume_type'
      title='Рекрутер проводит предварительное интервью'
      isChecked={isChecked}
      handleToggle={() => setIsChecked(!isChecked)}
    >
      <p className={styles.text}>
        Резюме предоставляется с комментариями от рекрутера
      </p>
    </SwitchBlock>
  )
}

export default PreliminaryInterviewSwitch
