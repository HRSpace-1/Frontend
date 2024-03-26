import { FC, MouseEvent, useState } from 'react'
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
}

const Chip: FC<IChip> = ({
  title,
  type = 'primary',
  name,
  setActiveChips,
  activeChips,
  some,
  isWorkFormat
}) => {
  const [isActive, setActive] = useState(false)
  const isPrimary = type === 'primary'

  const handleClick = (
    event: MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    event.preventDefault()
    isPrimary ? setActive(true) : setActive(!isActive)
    if (some && typeof activeChips === 'object') {
      const checkedInArray = activeChips.some(item => {
        return item.name === name
      })

      if (checkedInArray === false) {
        if (isWorkFormat) {
          setActiveChips([...activeChips, { title: name }])
        } else {
          setActiveChips([...activeChips, { name: name }])
        }
      }

      if (checkedInArray === true) {
        setActive(false)
        const newActiveChips = activeChips.filter(item => {
          return item.name !== name
        })
        setActiveChips(newActiveChips)
      }
    }

    if (!some) {
      if (activeChips === null) {
        setActiveChips(name)
        setActive(true)
      }

      if (activeChips === name) {
        setActiveChips(null)
        setActive(false)
      }

      if (activeChips !== name && activeChips !== null) {
        console.log('!')
        setActive(false)
        // setActive(true)
      }
    }
  }

  const handleDelete = (event: MouseEvent<SVGSVGElement>) => {
    event.stopPropagation()
    setActive(false)
    if (some && typeof activeChips === 'object') {
      const newActiveChips = activeChips.filter(item => {
        return item.name !== name
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
