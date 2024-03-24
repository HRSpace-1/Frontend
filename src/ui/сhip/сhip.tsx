import { FC } from 'react'
import styles from './сhip.module.scss'

interface IChip {
  title: string
}

const Chip: FC<IChip> = ({ title }) => {
  return (
    <button type='button' className={styles.chip}>
      {title}
    </button>
  )
}
export default Chip
