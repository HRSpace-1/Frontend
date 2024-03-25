import styles from './tooltip.module.scss'
import { FC, useState, useEffect } from 'react'

interface ITooltip {
  isActive: boolean
  text: string
  position: 'right' | 'bottom' | 'top' | 'left'
}

const Tooltip: FC<ITooltip> = ({ isActive = false, text, position }) => {
  const [positionClassName, setPositionClassName] = useState(null)

  useEffect(() => {
    if (position === 'top') {
      setPositionClassName(styles.top)
    }
    if (position === 'right') {
      setPositionClassName(styles.right)
    }
    if (position === 'bottom') {
      setPositionClassName(styles.bottom)
    }
    if (position === 'left') {
      setPositionClassName(styles.left)
    }
  }, [])
  return (
    <>
      {isActive && (
        <div className={`${styles.tooltip} ${positionClassName}`}>
          <p className={styles.text}>{text}</p>
          <div className={styles.triangle}></div>
        </div>
      )}
    </>
  )
}

export default Tooltip
