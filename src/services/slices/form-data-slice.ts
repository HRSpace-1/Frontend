import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFormData, IFormDataRequiredState } from '../../utils/types'

const initialState: IFormDataRequiredState = {
  title: '',
  company_specialization: '',
  address: null,
  experience: '',
  salary_from: null,
  salary_up_to: null,
  paperwork: '',
  responsibilities: null,
  requirements: null,
  conditions: null,
  payment: 0,
  terms_payment: '',
  recruiters_number: 0,
  resume_showing_date: '',
  desired_release_date: '',
  recruiter_responsibilities: null,
  resume_type: '',
  terms_recruiter: '',
  stop_list_employee: null,
  id: 0,
  condition_vacancy: null,
  skills: null,
  work_format: null,
  employment: null
}

export const FormDataSlice = createSlice({
  name: 'FormDataSlice',
  initialState,
  reducers: {
    addFormData(state, actoin: PayloadAction<IFormData>) {
      state = Object.assign(state, actoin.payload)
    }
  }
})

export default FormDataSlice.reducer
