import { FC } from 'react'
import Button from '../../ui/button/button'
import styles from './button-panel.module.scss'

interface IButtonPanel {
  step: number
}

const ButtonPanel: FC<IButtonPanel> = ({ step }) => {
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
          <Button title='Сохранить в черновик' style='secondary' step={step} />
          <Button
            title='Перейти к оплате и публикации'
            action='submit'
            style='primary'
            step={step}
          />
        </div>
      ) : (
        <Button
          title='Продолжить'
          action='forward'
          style='primary'
          step={step}
        />
      )}
    </div>
  )
}
export default ButtonPanel