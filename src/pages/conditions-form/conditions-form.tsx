import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../services/hooks'
import styles from './conditions-form.module.scss'
import { ProgressBarSlice } from '../../services/slices/progress-bar-slice'
import Sidebar from '../../components/sidebar/sidebar'
import Form from '../../components/form/form'
import InputsSample from '../../components/inputs-sample/inputs-sample'

function ConditionsForm() {
  const { step } = useAppSelector(state => state.progressBar)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(ProgressBarSlice.actions.changeProgressBarSlice(3))
  }, [])

  return (
    <div className={styles.page}>
      <Sidebar
        title='Сотрудничество с рекрутером '
        text='Опишите, как вы видите сотрудничество с нашим рекрутером в соответствии с вашими требованиями и пожеланиями.'
        step={step}
      />
      <Form title={'Вознаграждение рекрутера'} step={step}>
        <InputsSample />
      </Form>
    </div>
  )
}

export default ConditionsForm
