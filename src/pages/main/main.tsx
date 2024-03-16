import styles from './main.module.scss'
import ProgressLine from '../../components/progress-line/progress-line'
import { useAppSelector } from '../../services/hooks'
import { useEffect } from 'react'

function Main() {
  const { step } = useAppSelector(state => state.progressBar)

  useEffect(() => {
    console.log(step)
  })

  return (
    <div className={`${styles.main}`}>
      <ProgressLine />
    </div>
  )
}

export default Main
