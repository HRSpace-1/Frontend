import { combineReducers, configureStore } from '@reduxjs/toolkit'
import ProgressBarSlice from './slices/progress-bar-slice'
import FormDataSlice from './slices/form-data-slice'

const rootReducer = combineReducers({
  progressBar: ProgressBarSlice,
  formData: FormDataSlice
})

export const store = configureStore({
  reducer: rootReducer
})
