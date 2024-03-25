import { FC } from 'react'
import IconChat from '../../images/icons/chat.svg'
import IconBack from '../../images/icons/back.svg'
import IconForward from '../../images/icons/forward.svg'
import styles from './button.module.scss'
import { useNavigate } from 'react-router'

interface IButton {
  title: string
  action?: 'back' | 'forward' | 'submit' | 'chat'
  style: 'primary' | 'secondary' | 'chat'
  step?: number
  clickButtonForward?: () => void
  extraClass?: string
}

const Button: FC<IButton> = ({
  title,
  action = '',
  style,
  step,
  clickButtonForward = () => {},
  extraClass
}) => {
  const navigate = useNavigate()

  function clickButton(evt: React.SyntheticEvent) {
    evt.preventDefault()

    clickButtonForward()

    if (action === 'back') {
      if (step === 2) {
        navigate('/vacancy')
      }

      if (step === 3) {
        navigate('/recruiter-pay')
      }
    }

    if (action === 'forward') {
      if (step === 1) {
        navigate('/recruiter-pay')
      }

      if (step === 2) {
        navigate('/conditions')
      }
    }
  }

  return (
    <button
      type={action === 'submit' ? 'submit' : 'button'}
      className={`${styles.button} ${styles[style]} ${extraClass}`}
      onClick={clickButton}
    >
      {action === 'chat' && <IconChat className={styles.chatIcon} />}
      {action === 'back' && (
        <IconBack className={`${styles.icon} ${styles.backIcon}`} />
      )}
      {title}
      {action === 'forward' && (
        <IconForward className={`${styles.icon} ${styles.forwardIcon}`} />
      )}
    </button>
  )
}
export default Button
