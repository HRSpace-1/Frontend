import styles from './recruiter-pay-form.module.scss'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../services/hooks'
import { ProgressBarSlice } from '../../services/slices/progress-bar-slice'
import Sidebar from '../../components/sidebar/sidebar'
import Form from '../../components/form/form'
import FinishPayInfo from '../../components/finish-pay-info/finish-pay-info'
import EmployeePayInput from '../../components/employee-pay-input/employee-pay-input'
import EmployeeNumber from '../../components/employee-number/employee-number'
import SchemeBlock from '../../components/scheme-block/scheme-block'
import ResultBlock from '../../components/result-block/result-block'
import { useForm } from '../../utils/hooks'
import { FormDataSlice } from '../../services/slices/form-data-slice'

function RecruiterPayForm() {
  const { pathname } = useLocation()
  const { step } = useAppSelector(state => state.progressBar)
  const dispatch = useAppDispatch()

  const { inputValues, addValue } = useForm({
    payment: 0,
    terms_payment: ''
  })

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    dispatch(ProgressBarSlice.actions.changeProgressBarSlice(2))
  }, [pathname])

  // функция должна сначала сохранять форму в редакс а потом отправлять запрос на сервер с данными из редакс
  function clickButtonForward() {
    dispatch(FormDataSlice.actions.addFormData(inputValues))
  }

  return (
    <div className={styles.page}>
      <Sidebar
        title='Схема выплат'
        text='Выберите удобный способ выплат за услуги рекрутера. Мы предлагаем три варианты оплаты для вашего удобства.'
        step={step}
      />
      <Form
        title={'Вознаграждение рекрутера'}
        step={step}
        clickButtonForward={clickButtonForward}
      >
        <FinishPayInfo />
        <div className={styles.container}>
          <div className={styles.employeePayInput}>
            <EmployeePayInput addValue={addValue} />
          </div>
          <div className={styles.employeeNumber}>
            <EmployeeNumber />
          </div>
        </div>
        <SchemeBlock addValue={addValue} />
        <ResultBlock />
      </Form>
    </div>
  )
}

export default RecruiterPayForm
