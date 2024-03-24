import { FC, MouseEvent, useState } from 'react'
import IconClose from '../../images/icons/close.svg'
import styles from './сhip.module.scss'

interface IChip {
  title: string
  name: string
  type?: 'primary' | 'secondary'
}

const Chip: FC<IChip> = ({ title, type = 'primary', name }) => {
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
  )
}
export default Chip
