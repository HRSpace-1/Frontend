import { FC } from 'react'
import IconClose from '../../images/icons/close.svg'
import styles from './сhip.module.scss'

interface IChip {
  title: string
  name: string
  type?: 'primary' | 'secondary'
  setActiveChips?: (value: any) => void
  activeChips?: any[] | string
  some?: boolean
  isWorkFormat?: boolean
  handleDelete?: (name: string) => void
}

const ChipTypePrimery: FC<IChip> = ({ title, handleDelete, name }) => {
  function handleClick() {
    handleDelete(name)
  }

  return (
    <div
      className={`${styles.chip} ${styles.primary} ${styles[`primaryActive`]}`}
    >
      <p className={styles.text}>{title}</p>

      <IconClose className={styles.close} onClick={handleClick} />
    </div>
  )
}
export default ChipTypePrimery
