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