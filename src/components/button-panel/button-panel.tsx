import { FC, useState } from 'react'
import Button from '../../ui/button/button'
import Tooltip from '../../ui/tooltip/tooltip'
import styles from './button-panel.module.scss'

interface IButtonPanel {
  step: number
  clickButtonForward?: () => void
}

const ButtonPanel: FC<IButtonPanel> = ({ step, clickButtonForward }) => {
  const [isDraft, setIsDraft] = useState(false)
  const [isPublished, setIsPublished] = useState(false)

  const handleClickDraft = () => {
    setIsDraft(!isDraft)
  }

  const handleClickPublish = () => {
    setIsPublished(!isPublished)
  }

  return (
    <div className={styles.container}>
      {step === 2 && (
        <div className={styles.optionalButtons}>
          <Button title='Назад' action='back' style='secondary' step={step} />
        </div>
      )}
      {step === 3 ? (
        <div className={styles.optionalButtons}>
          <Button title='Назад' action='back' style='secondary' step={step} />
          <div className={styles.wrap}>
            <Button
              title='Сохранить в черновик'
              action='draft'
              style='secondary'
              step={step}
              onDraft={handleClickDraft}
            />
            <Tooltip
              text='Заявка сохранена в черновики'
              isActive={isDraft}
              position='top'
              extraClass={styles.tooltip}
            />
          </div>
          <div className={`${styles.wrap} ${styles.forward}`}>
            <Button
              title='Перейти к оплате и публикации'
              action='submit'
              style='primary'
              step={step}
              onPublish={handleClickPublish}
            />
            <Tooltip
              text='Данные отправлены на сервер. Благодарим за использование нашего билдера!'
              isActive={isPublished}
              position='top'
              extraClass={styles.tooltip}
            />
          </div>
        </div>
      ) : (
        <Button
          title='Продолжить'
          action='forward'
          style='primary'
          step={step}
          extraClass={styles.forward}
          clickButtonForward={clickButtonForward}
        />
      )}
    </div>
  )
}
export default ButtonPanel
