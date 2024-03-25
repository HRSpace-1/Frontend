import { FC } from 'react'
import Switch from '../../ui/switch/switch'
import styles from './switch-block.module.scss'

interface ISwitchBlock {
  title: string
  children?: React.ReactNode
  isChecked: boolean
  setIsChecked: React.Dispatch<boolean>
  extraClass?: string
}

const SwitchBlock: FC<ISwitchBlock> = ({
  title,
  children,
  isChecked,
  setIsChecked,
  extraClass = ''
}) => {
  return (
    <div className={`${styles.switchBlock} ${extraClass}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <Switch isChecked={isChecked} setIsChecked={setIsChecked} />
      </div>
      {children}
    </div>
  )
}

export default SwitchBlock
