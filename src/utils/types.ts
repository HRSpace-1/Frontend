export interface ISkillObj {
  name: string
  id: number
}

export interface IEmploymentObj {
  name: 'full_time' | 'part_time' | 'project_activities'
  id: number
}

export interface IWorkFormatObj {
  title: 'office' | 'hybrid' | 'remotely_rf' | 'remotely_world' | ''
  id: number
}

export interface IFormData {
  title?: string
  company_specialization?: string
  address?: string | null
  experience?:
    | 'without_exp'
    | 'up_to_one_year'
    | 'from_one_year'
    | 'from_2_years'
    | 'from_3_years'
    | ''
  salary_from?: number | null
  salary_up_to?: number | null
  paperwork?: 'gph' | 'fixed_term' | 'full_registration' | ''
  responsibilities?: string | null
  requirements?: string | null
  conditions?: string | null
  payment?: number
  terms_payment?: 'all_now' | 'fifty_fifty' | 'all_after' | ''
  recruiters_number?: number
  resume_showing_date?: string
  desired_release_date?: string
  recruiter_responsibilities?: string | null
  resume_type?: 'no_interview' | 'with_interview' | ''
  terms_recruiter?: 'gph' | 'agreement_with_legal_entity' | ''
  stop_list_employee?: string | null
  condition_vacancy?: any[] | null
  id?: number
  skills?: Array<ISkillObj> | null
  work_format?: Array<IWorkFormatObj>
  employment?: Array<IEmploymentObj>
}

export interface IFormDataRequiredState {
  title: string
  company_specialization?: string
  address?: string | null
  experience:
    | 'without_exp'
    | 'up_to_one_year'
    | 'from_one_year'
    | 'from_2_years'
    | 'from_3_years'
    | ''
  salary_from?: number | null
  salary_up_to?: number | null
  paperwork: 'gph' | 'fixed_term' | 'full_registration' | ''
  responsibilities?: string | null
  requirements?: string | null
  conditions?: string | null
  payment: number
  terms_payment: 'all_now' | 'fifty_fifty' | 'all_after' | ''
  recruiters_number: number | null
  resume_showing_date: string
  desired_release_date: string
  recruiter_responsibilities?: string
  resume_type: 'no_interview' | 'with_interview' | ''
  terms_recruiter: 'gph' | 'agreement_with_legal_entity' | ''
  stop_list_employee?: string | null
  id: number
  skills: Array<ISkillObj> | null
  condition_vacancy?: any[] | null
  work_format: Array<IWorkFormatObj>
  employment: Array<IEmploymentObj>
}

export interface IPropsInputs {
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

export interface IPropsButtons {
  addValue: (
    name: string,
    value:
      | string
      | number
      | Array<IEmploymentObj>
      | Array<IWorkFormatObj>
      | Array<ISkillObj>
      | null
  ) => void
}
