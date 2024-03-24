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

function JobCreateForm() {
  const { step } = useAppSelector(state => state.progressBar)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(ProgressBarSlice.actions.changeProgressBarSlice(1))
  }, [])

  return (
    <div className={styles.page}>
      <Sidebar
        title='Схема выплат'
        text='Выберите удобный способ выплат за услуги рекрутера. Мы предлагаем три варианты оплаты для вашего удобства.'
        step={step}
      />
      <Form title={'Создание вакансии'} step={step}>
        <InputsSample />
        <NameVacancyInput />
        <ProfessionalSkillsInput />
        <CompanyIndustryInput />
      </Form>
    </div>
  )
}

export default JobCreateForm
