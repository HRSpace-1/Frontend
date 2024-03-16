import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IProgressBarState {
  step: number
}

const initialState: IProgressBarState = {
  step: 1
}

export const ProgressBarSlice = createSlice({
  name: 'ProgressBarSlice',
  initialState,
  reducers: {
    changeProgressBarSlice(state, actoin: PayloadAction<number>) {
      state.step = actoin.payload
    }
  }
})

export default ProgressBarSlice.reducer
