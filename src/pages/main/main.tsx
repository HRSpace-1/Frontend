import styles from './main.module.scss'
import { Outlet } from 'react-router-dom'
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
      <Outlet />
    </div>
  )
}

export default Main
