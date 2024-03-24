import { useEffect } from 'react'
import { useAppDispatch } from '../../services/hooks'
import { ProgressBarSlice } from '../../services/slices/progress-bar-slice'
import Form from '../../components/form/form'
import InputsSample from '../../components/inputs-sample/inputs-sample'
import NameVacancyInput from '../../components/name-vacancy-input/name-vacancy-input'
import ProfessionalSkillsInput from '../../components/professional-skills-input/professional-skills-input'
import CompanyIndustryInput from '../../components/company-industry-input/company-industry-input'

function JobCreateForm() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(ProgressBarSlice.actions.changeProgressBarSlice(1))
  }, [])

  return (
    <Form title={'Создание вакансии'}>
      <InputsSample />
      <NameVacancyInput />
      <ProfessionalSkillsInput />
      <CompanyIndustryInput />
    </Form>
  )
}

export default JobCreateForm
