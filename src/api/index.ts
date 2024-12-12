import axios, { AxiosResponse } from "axios";
import { LoginResponse } from "src/api/authApi";
import { logoutRequest } from "src/store/auth/authActions";
import { store } from "src/store/store";
import { getAccessToken, getAccessTokenExpiredAt, getRefreshToken, getRefreshTokenExpiredAt, isTokenExpired } from "src/utils/cookies";

export const axiosInstance = axios.create({
  baseURL: "https://rest-test.machineheads.ru",
  timeout: 10000,
  headers: {},
});

axiosInstance.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
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
      if(isTokenExpired(refreshTokenExpiredAt)){
        throw new Error('Refresh token expired')
      }
      const form = new FormData();
      form.append("refresh_token", getRefreshToken());
      const response: AxiosResponse<LoginResponse> = await axiosInstance.post(`/auth/token-refresh`, form);

      document.cookie = `access_token = ${response.data.access_token}`
      document.cookie = `access_expired_at = ${response.data.access_expired_at}`
      document.cookie = `refresh_token = ${response.data.refresh_token}`
      document.cookie = `refresh_expired_at = ${response.data.refresh_expired_at}`
    }
  } catch (error) {
    console.error('Token error', error);
    store.dispatch(logoutRequest())
  }

}

export const makeRequest = async (url: string, method: "GET" | "POST" | "PUT" | "DELETE", data?: any) => {
  try {
    await checkIfTokenExpired()
    const response = await axiosInstance({
      url,
      method,
      data,
    });
    console.log(response.data);
    
    return response.data;

  } catch (err) {
    console.log(err);
  }

}