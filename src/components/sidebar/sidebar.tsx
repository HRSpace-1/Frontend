import { FC, useState } from 'react'
import Button from '../../ui/button/button'
import Tooltip from '../../ui/tooltip/tooltip'
import styles from './sidebar.module.scss'

interface ISidebar {
  title: string
  text: string
  step: number
}

const Sidebar: FC<ISidebar> = ({ title, text, step }) => {
  const [isHint, setIsHint] = useState(false)

  const handleChat = () => {
    setIsHint(!isHint)
  }

  return (
    <div className={`${styles.sidebar} ${styles[`step${step}`]}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <span className={styles.wrap}>
          <Button
            title='Задать  вопрос'
            action='chat'
            style='chat'
            onChat={handleChat}
          />
          <Tooltip
            text='В будущем здесь будет чат'
            isActive={isHint}
            position='right'
            extraClass={styles.tooltip}
          />
        </span>
      </div>
    </div>
  )
}

export default Sidebar
