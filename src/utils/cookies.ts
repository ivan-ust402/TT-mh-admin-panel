import { LoginResponse } from "src/api/authApi"

export const getAccessToken = () => {
  return document.cookie.split('; ').find(row => row.startsWith('access_token='))?.split('=')[1]
}

export const getRefreshToken = () => {
  return document.cookie.split('; ').find(row => row.startsWith('refresh_token='))?.split('=')[1] || ''
}

export const getAccessTokenExpiredAt = () => {
  return Number(document.cookie.split('; ').find(row => row.startsWith('access_expired_at='))?.split('=')[1])
}

export const getRefreshTokenExpiredAt = () => {
  return Number(document.cookie.split('; ').find(row => row.startsWith('refresh_expired_at='))?.split('=')[1])
}

export const isTokenExpired = (expiredAt: number) => {
  return Date.now() / 1000 > expiredAt
}

export const setAuthCookies = (loginResponse?: LoginResponse) => {
  document.cookie = `access_token = ${loginResponse?.access_token || ''}`
  document.cookie = `access_expired_at = ${loginResponse?.access_expired_at || ''}`
  document.cookie = `refresh_token = ${loginResponse?.refresh_token || ''}`
  document.cookie = `refresh_expired_at = ${loginResponse?.refresh_expired_at || ''}`
}