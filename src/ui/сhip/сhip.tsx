import { FC } from 'react'
import styles from './сhip.module.scss'

interface IChip {
  title: string
  name: string
}

const Chip: FC<IChip> = ({ title, name }) => {
  function click() {
    console.log(name)
  }
  return (
    <button type='button' className={styles.chip} name={name} onClick={click}>
      {title}
    </button>
  )
}
export default Chip
