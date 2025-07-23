import { configureStore } from '@reduxjs/toolkit'
import announcementsReducer from '../features/announcements/announcementsSlice'
import authReducer from '../features/auth/authSlice'
import quizzesReducer from '../features/quizzes/quizzesSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    announcements: announcementsReducer,
    quizzes: quizzesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
