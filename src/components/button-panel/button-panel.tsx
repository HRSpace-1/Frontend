import { FC } from 'react'
import Button from '../../ui/button/button'
import styles from './button-panel.module.scss'

const ButtonPanel: FC = () => {
  const isStep1 = false
  const isStep3 = false

  return (
    <div className={styles.container}>
      {!isStep1 && (
        <div className={styles.optionalButtons}>
          <Button title='Назад' action='back' style='secondary' />
          <Button title='Сохранить в черновик' style='secondary' />
        </div>
      )}
      {isStep3 ? (
        <Button
          title='Перейти к оплате и публикации'
          action='submit'
          style='primary'
        />
      ) : (
        <Button title='Продолжить' action='forward' style='primary' />
      )}
    </div>
  )
}
export default ButtonPanel
