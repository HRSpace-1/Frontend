import { combineReducers, configureStore } from '@reduxjs/toolkit'
import ProgressBarSlice from './slices/progress-bar-slice'

const rootReducer = combineReducers({
  progressBar: ProgressBarSlice
})

export const store = configureStore({
  reducer: rootReducer
})
