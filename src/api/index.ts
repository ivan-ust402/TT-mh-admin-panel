import axios, { AxiosResponse } from 'axios';
import { LoginResponse } from 'src/api/authApi';
import { logoutRequest } from 'src/store/auth/authActions';
import { store } from 'src/store/store';
import { getAccessToken, getAccessTokenExpiredAt, getRefreshToken, getRefreshTokenExpiredAt, isTokenExpired, setAuthCookies } from 'src/utils/cookies';

export const axiosInstance = axios.create({
  baseURL: 'https://rest-test.machineheads.ru',
  timeout: 10000
});

axiosInstance.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use((response) => response, error => {
  return Promise.reject(error?.response?.data || error)
});

const checkIfTokenExpired = async () => {
  try {
    const accessTokenExpiredAt = getAccessTokenExpiredAt()
    const refreshTokenExpiredAt = getRefreshTokenExpiredAt()

    if (!accessTokenExpiredAt || !refreshTokenExpiredAt) {
      throw new Error('Token does not exist')
    }
    // если accessToken (выдается на 10 минут) просрочен, то обновляем его через /auth/token-refresh
    if (isTokenExpired(accessTokenExpiredAt)) {
      // refreshToken (выдается на месяц) просрочен, то логаут
      if (isTokenExpired(refreshTokenExpiredAt)) {
        throw new Error('Refresh token expired')
      }
      const form = new FormData();
      form.append('refresh_token', getRefreshToken());
      const response: AxiosResponse<LoginResponse> = await axiosInstance.post('/auth/token-refresh', form);

      setAuthCookies(response.data)
    }
  } catch (error) {
    console.error('Token error', error);
    store.dispatch(logoutRequest())
  }

}


export const makeRequest = async (url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', data?: FormData) => {
  await checkIfTokenExpired()
  const response = await axiosInstance({
    url,
    method,
    data
  });
  return response;
}


export const makeDelay = (ms: number) =>
  new Promise((res) => {
    setTimeout(res, ms)
  })