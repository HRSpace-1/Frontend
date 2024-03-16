import styles from './main.module.scss'
import ProgressLine from '../../components/progress-line/progress-line'

function Main() {
  return (
    <div className={`${styles.main}`}>
      <ProgressLine />
    </div>
  )
}

export default Main
