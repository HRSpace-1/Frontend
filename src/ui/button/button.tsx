import { FC } from 'react'
import IconBack from '../../images/icons/back.svg'
import IconForward from '../../images/icons/forward.svg'
import styles from './button.module.scss'
import { useNavigate } from 'react-router'

interface IButton {
  title: string
  action?: 'back' | 'forward' | 'submit'
  style: 'primary' | 'secondary'
  step: number
}

const Button: FC<IButton> = ({ title, action = '', style, step }) => {
  const navigate = useNavigate()

  function clickButton(evt: React.SyntheticEvent) {
    evt.preventDefault()

    if (action === 'back') {
      if (step === 2) {
        navigate('/vacancy')
      }

      if (step === 3) {
        navigate('/recruter-pay')
      }
    }

    if (action === 'forward') {
      if (step === 1) {
        navigate('/recruter-pay')
      }

      if (step === 2) {
        navigate('/conditions')
      }
    }
  }

  return (
    <button
      type={action === 'submit' ? 'submit' : 'button'}
      className={`${styles.button} ${styles[style]}`}
      onClick={clickButton}
    >
      {action === 'back' && (
        <IconBack className={`${styles.icon} ${styles.back}`} />
      )}
      {title}
      {action === 'forward' && (
        <IconForward className={`${styles.icon} ${styles.forward}`} />
      )}
    </button>
  )
}
export default Button
