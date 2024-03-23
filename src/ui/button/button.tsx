import { FC } from 'react'
import IconBack from '../../images/icons/back.svg'
import IconForward from '../../images/icons/forward.svg'
import styles from './button.module.scss'

interface IButton {
  title: string
  action?: 'back' | 'forward' | 'submit'
  style: 'primary' | 'secondary'
}

const Button: FC<IButton> = ({ title, action = '', style }) => {
  return (
    <button
      type={action === 'submit' ? 'submit' : 'button'}
      className={`${styles.button} ${styles[style]}`}
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
