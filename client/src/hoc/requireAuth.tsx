// src/hoc/requireAuth.tsx
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../store/index'

const requireAuth = (WrappedComponent: React.ComponentType) => {
  const ComponentWithAuth = () => {
    const isAuthenticated = useSelector(
      (state: RootState) => state.auth.isAuthenticated
    )

    if (!isAuthenticated) {
      return <Navigate to="/login" replace />
    }

    return <WrappedComponent />
  }

  return ComponentWithAuth
}

export default requireAuth
