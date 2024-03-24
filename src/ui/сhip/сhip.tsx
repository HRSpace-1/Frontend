import { FC, MouseEvent, useState } from 'react'
import IconClose from '../../images/icons/close.svg'
import styles from './сhip.module.scss'

interface IChip {
  title: string
  name: string
  type?: 'primary' | 'secondary'
}

const Chip: FC<IChip> = ({ title, name }) => {
  function click() {
    console.log(name)
  }
const Chip: FC<IChip> = ({ title, type = 'primary' }) => {
  const [isActive, setActive] = useState(false)
  const isPrimary = type === 'primary'

  const handleClick = () => {
    isPrimary ? setActive(true) : setActive(!isActive)
  }

  const handleDelete = (event: MouseEvent<SVGSVGElement>) => {
    event.stopPropagation()
    setActive(false)
  }

  return (
    <button type='button' className={styles.chip} name={name} onClick={click}>
      {title}
    </button>
    <div
      className={`${styles.chip} ${isPrimary ? styles.primary : styles.secondary} ${isActive && styles[`${type}Active`]}`}
      onClick={handleClick}
    >
      <p className={styles.text}>{title}</p>
      {isActive && isPrimary && (
        <IconClose className={styles.close} onClick={handleDelete} />
      )}
    </div>
  )
}
export default Chip
