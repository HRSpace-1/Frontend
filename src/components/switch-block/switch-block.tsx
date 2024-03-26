import { FC } from 'react'
import Switch from '../../ui/switch/switch'
import styles from './switch-block.module.scss'

interface ISwitchBlock {
  name?: string
  title?: string
  children?: React.ReactNode
  isChecked: boolean
  // setIsChecked: React.Dispatch<boolean>
  handleToggle: () => void
  extraClass?: string
}

const SwitchBlock: FC<ISwitchBlock> = ({
  name,
  title,
  children,
  isChecked,
  // setIsChecked,
  handleToggle,
  extraClass = ''
}) => {
  return (
    <div className={`${styles.switchBlock} ${extraClass}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <Switch name={name} isChecked={isChecked} handleToggle={handleToggle} />
        {/* <Switch isChecked={isChecked} setIsChecked={setIsChecked} /> */}
      </div>
      {children}
    </div>
  )
}

export default SwitchBlock
