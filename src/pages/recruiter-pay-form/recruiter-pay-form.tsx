import styles from './recuiter-pay-form.module.scss'
import { useEffect } from 'react'
import Form from '../../components/form/form'
import { useAppDispatch } from '../../services/hooks'
import { ProgressBarSlice } from '../../services/slices/progress-bar-slice'
import FinishPayInfo from '../../components/finish-pay-info/finish-pay-info'
import EmployeePayInput from '../../components/employee-pay-input/employee-pay-input'
import EmployeeNumber from '../../components/employee-number/employee-number'
import SchemeBlock from '../../components/scheme-block/scheme-block'
import ResultBlock from '../../components/result-block/result-block'
import { FormDataSlice } from '../../services/slices/form-data-slice'
import { IFormData } from '../../utils/types'
// import styles from './recuiter-pay-form.module.scss'

function RecruiterPayForm() {
  const dispatch = useAppDispatch()

  const obj: IFormData = {
    title: 'qwer',
    salary_from: 20,
    skills: [
      {
        name: 'qwerty',
        id: 3715
      }
    ]
  }

  useEffect(() => {
    dispatch(ProgressBarSlice.actions.changeProgressBarSlice(2))
    dispatch(FormDataSlice.actions.addFormData(obj))
  }, [])

  return (
    <Form title={'Вознаграждение рекрутера'}>
      <FinishPayInfo />
      <div className={styles.container}>
        <div className={styles.employeePayInput}>
          <EmployeePayInput />
        </div>
        <div className={styles.employeeNumber}>
          <EmployeeNumber />
        </div>
      </div>
      <SchemeBlock />
      <ResultBlock />
    </Form>
  )
}

export default RecruiterPayForm
