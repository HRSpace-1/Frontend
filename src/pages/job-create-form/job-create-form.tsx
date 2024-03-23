import { useEffect } from 'react'
import styles from './job-create-form.module.scss'
import { useAppDispatch } from '../../services/hooks'
import { ProgressBarSlice } from '../../services/slices/progress-bar-slice'
import Form from '../../components/form/form'

function JobCreateForm() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(ProgressBarSlice.actions.changeProgressBarSlice(1))
  }, [])

  return (
    <Form title={'Создание вакансии'}>
      <div className={styles.inputs}>
        <input type='button' className={styles.input}>
          Загрузить уже созданное
        </input>
        <input type='button' className={styles.input}>
          Создать из шаблона
        </input>
      </div>
    </Form>
  )
}

export default JobCreateForm
