import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

type Props = {
  children: JSX.Element
}

export const RequiredAuth = ({ children }: Props) => {
  const location = useLocation()
  const { isAuth } = useAuth()
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />
  }
  return children
}