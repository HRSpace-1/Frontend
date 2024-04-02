import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../services/hooks'
import styles from './conditions-form.module.scss'
import { ProgressBarSlice } from '../../services/slices/progress-bar-slice'
import Sidebar from '../../components/sidebar/sidebar'
import Form from '../../components/form/form'
import InputsSample from '../../components/inputs-sample/inputs-sample'
import RecruiterNumber from '../../components/recruiter-number/recruiter-number'
import ResumeShowingDate from '../../components/resume-showing-date/resume-showing-date'
import ResumeReleaseDate from '../../components/resume-release-date/resume-release-date'
import JobDuties from '../../components/job-duties/job-duties'
import PreliminaryInterviewSwitch from '../../components/preliminary-interview-switch/preliminary-interview-switch'
import AdditionalCommentsSwitch from '../../components/additional-comments-switch/additional-comments-switch'
import StopListSwitch from '../../components/stop-list-switch/stop-list-switch'
import { useForm } from '../../utils/hooks'
import { FormDataSlice } from '../../services/slices/form-data-slice'

function ConditionsForm() {
  const { pathname } = useLocation()
  const { step } = useAppSelector(state => state.progressBar)
  const dispatch = useAppDispatch()

  const { inputValues, addValue, handleChange } = useForm({
    recruiters_number: 0,
    resume_showing_date: null,
    desired_release_date: null,
    recruiter_responsibilities: null,
    stop_list_employee: ''
  })

  useEffect(() => {
    console.log(inputValues)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    dispatch(ProgressBarSlice.actions.changeProgressBarSlice(3))
  }, [pathname, inputValues])

  function clickButtonForward() {
    dispatch(FormDataSlice.actions.addFormData(inputValues))
  }

  return (
    <div className={styles.page}>
      <Sidebar
        title='Сотрудничество с рекрутером '
        text='Опишите, как вы видите сотрудничество с нашим рекрутером в соответствии с вашими требованиями и пожеланиями.'
        step={step}
      />
      <Form
        title={'Условия сотрудничества'}
        step={step}
        clickButtonForward={clickButtonForward}
      >
        <InputsSample />
        <RecruiterNumber addValue={addValue} />
        <ResumeShowingDate addValue={addValue} />
        <ResumeReleaseDate addValue={addValue} />
        <JobDuties addValue={addValue} />
        <PreliminaryInterviewSwitch />
        <AdditionalCommentsSwitch />
        <StopListSwitch handleChange={handleChange} />
      </Form>
    </div>
  )
}

export default ConditionsForm
