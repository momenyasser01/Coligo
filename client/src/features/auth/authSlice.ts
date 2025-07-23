import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
  isAuthenticated: boolean
}

const initialState: AuthState = {
  isAuthenticated: localStorage.getItem('auth') === 'true',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true,
      localStorage.setItem('auth', 'true')
    },
    logout(state) {
      state.isAuthenticated = false,
      localStorage.setItem('auth', 'false')
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
