import { useEffect } from 'react'
import { useAppDispatch } from '../../services/hooks'
import styles from './conditions-form.module.scss'
import { ProgressBarSlice } from '../../services/slices/progress-bar-slice'

function ConditionsForm() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(ProgressBarSlice.actions.changeProgressBarSlice(3))
  }, [])

  return (
    <div className={styles.container}>
      <div>Форма 3</div>
    </div>
  )
}

export default ConditionsForm
