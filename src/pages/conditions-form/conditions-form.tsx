import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../services/hooks'
import styles from './conditions-form.module.scss'
import { ProgressBarSlice } from '../../services/slices/progress-bar-slice'
import Sidebar from '../../components/sidebar/sidebar'
import Form from '../../components/form/form'
import InputsSample from '../../components/inputs-sample/inputs-sample'
import RecruiterNumber from '../../components/recruiter-number/recruiter-number'

function ConditionsForm() {
  const { pathname } = useLocation()
  const { step } = useAppSelector(state => state.progressBar)
  const dispatch = useAppDispatch()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    dispatch(ProgressBarSlice.actions.changeProgressBarSlice(3))
  }, [pathname])

  return (
    <div className={styles.page}>
      <Sidebar
        title='Сотрудничество с рекрутером '
        text='Опишите, как вы видите сотрудничество с нашим рекрутером в соответствии с вашими требованиями и пожеланиями.'
        step={step}
      />
      <Form title={'Условия сотрудничества'} step={step}>
        <InputsSample />
        <RecruiterNumber />
      </Form>
    </div>
  )
}

export default ConditionsForm
