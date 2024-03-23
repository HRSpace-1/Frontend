import { useEffect } from 'react'
import styles from './job-create-form.module.scss'
import { useAppDispatch } from '../../services/hooks'
import { ProgressBarSlice } from '../../services/slices/progress-bar-slice'

function JobCreateForm() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(ProgressBarSlice.actions.changeProgressBarSlice(1))
  }, [])

  return (
    <div className={styles.container}>
      <div>Первая форма</div>
    </div>
  )
}

export default JobCreateForm
