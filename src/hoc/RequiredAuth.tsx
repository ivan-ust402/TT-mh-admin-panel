import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

type Props = {
  children: JSX.Element
}

export const RequiredAuth = ({ children }: Props) => {
  const location = useLocation()
  const { isAuth } = {isAuth: true}
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />
  }
  return children
}