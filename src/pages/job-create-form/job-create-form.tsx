import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../services/hooks'
import { ProgressBarSlice } from '../../services/slices/progress-bar-slice'
import Form from '../../components/form/form'
import InputsSample from '../../components/inputs-sample/inputs-sample'
import NameVacancyInput from '../../components/name-vacancy-input/name-vacancy-input'
import ProfessionalSkillsInput from '../../components/professional-skills-input/professional-skills-input'
import CompanyIndustryInput from '../../components/company-industry-input/company-industry-input'
import Sidebar from '../../components/sidebar/sidebar'
import styles from './job-create-form.module.scss'
import WorkFormatInput from '../../components/work-format-input/work-format-input'
import ExperienceJobInput from '../../components/experience-job-input/experience-job-input'
import SaloryInput from '../../components/salory-input/salory-input'
import TypeEmploymentInput from '../../components/type-employment-input/type-employment-input'
import FormalizationContractInput from '../../components/formalization-contract-input/formalization-contract-input'
import ConditionsInput from '../../components/conditions-input/conditions-input'
import ResponsibilitiesInput from '../../components/responsibilities-input/responsibilities-input'
import { useForm } from '../../utils/hooks'
import { FormDataSlice } from '../../services/slices/form-data-slice'

function JobCreateForm() {
  const { step } = useAppSelector(state => state.progressBar)
  const dispatch = useAppDispatch()

  const { inputValues, handleChange, addValue } = useForm({
    title: '',
    skills: null,
    company_specialization: '',
    work_format: null,
    experience: '',
    employment: null,
    salary_from: null,
    salary_up_to: null,
    paperwork: '',
    condition_vacancy: null,
    conditions: null,
    responsibilities: null
  })

  useEffect(() => {
    dispatch(ProgressBarSlice.actions.changeProgressBarSlice(1))
    console.log(inputValues)
  }, [inputValues])

  function clickButtonForward() {
    dispatch(FormDataSlice.actions.addFormData(inputValues))
  }

  return (
    <div className={styles.page}>
      <Sidebar
        title='Ваш идеальный кандидат'
        text='Опишите нам идеального кандидата, который нужен вашей компании, и мы найдем его для вас с помощью наших опытных рекрутеров.'
        step={step}
      />
      <Form
        title={'Создание вакансии'}
        step={step}
        clickButtonForward={clickButtonForward}
      >
        <InputsSample />
        <NameVacancyInput handleChange={handleChange} />
        <ProfessionalSkillsInput addValue={addValue} />
        <CompanyIndustryInput addValue={addValue} />
        <WorkFormatInput addValue={addValue} />
        <ExperienceJobInput addValue={addValue} />
        <TypeEmploymentInput addValue={addValue} />
        <SaloryInput handleChange={handleChange} />
        <FormalizationContractInput addValue={addValue} />
        <ConditionsInput addValue={addValue} />
        <ResponsibilitiesInput handleChange={handleChange} />
      </Form>
    </div>
  )
}

export default JobCreateForm
