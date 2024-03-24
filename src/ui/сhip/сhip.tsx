import { FC, MouseEvent, useState } from 'react'
import IconClose from '../../images/icons/close.svg'
import styles from './сhip.module.scss'

interface IChip {
  title: string
  name: string
  type?: 'primary' | 'secondary'
  setActiveChips?: (value: any) => void
  activeChips?: any[]
  id?: number
  some?: boolean
  isWorkFormat?: boolean
}

const Chip: FC<IChip> = ({
  title,
  type = 'primary',
  name,
  setActiveChips,
  activeChips,
  id,
  some,
  isWorkFormat
}) => {
  const [isActive, setActive] = useState(false)
  const isPrimary = type === 'primary'

  const handleClick = () => {
    if (some && typeof activeChips === 'object') {
      isPrimary ? setActive(true) : setActive(!isActive)
      const checkedInArray = activeChips.some(item => {
        return item.id === id
      })

      if (checkedInArray === false) {
        if (isWorkFormat) {
          setActiveChips([...activeChips, { title: name, id: id }])
        } else {
          setActiveChips([...activeChips, { name: name, id: id }])
        }
      }
    }

    if (!some) {
      if (activeChips === null) {
        isPrimary ? setActive(true) : setActive(!isActive)
        setActiveChips(name)
      }
    }
  }

  const handleDelete = (event: MouseEvent<SVGSVGElement>) => {
    event.stopPropagation()
    setActive(false)
    if (some) {
      const newActiveChips = activeChips.filter(item => {
        return item.id !== id
      })
      setActiveChips(newActiveChips)
    }

    if (!some) {
      setActiveChips(null)
    }
  }

  return (
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
