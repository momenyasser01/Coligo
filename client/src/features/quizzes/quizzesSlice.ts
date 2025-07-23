import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Quiz {
  id: string
  title: string
  date: string
}

interface QuizzesState {
  items: Quiz[]
}

const initialState: QuizzesState = {
  items: [],
}

const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {
    setQuizzes(state, action: PayloadAction<Quiz[]>) {
      state.items = action.payload
    },
  },
})

export const { setQuizzes } = quizzesSlice.actions

export default quizzesSlice.reducer
