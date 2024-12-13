import { axiosInstance, makeRequest } from ".";

interface ProfileRole  {
  role: string,
  name: string
}
interface ProfileStatus  {
  code: number,
  name: string
}
export interface ProfileResponse  {
  id: number,
  phone: string | null,
  email: string,
  name: string | null,
  lastName: string | null,
  secondName: string | null,
  roles: ProfileRole[],
  status: ProfileStatus,
  isActive: boolean,
  updatedAt: string,
  createdAt: string
}

export const getProfile = async (): Promise<ProfileResponse> => makeRequest('/profile', 'GET')
