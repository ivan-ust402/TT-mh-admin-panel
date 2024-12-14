import { makeRequest } from '.';

interface ProfileRole {
  name: string,
  role: string
}
interface ProfileStatus {
  code: number,
  name: string
}
export interface GetProfileResponse {
  createdAt: string,
  email: string,
  id: number,
  isActive: boolean,
  lastName: string | null,
  name: string | null,
  phone: string | null,
  roles: ProfileRole[],
  secondName: string | null,
  status: ProfileStatus,
  updatedAt: string
}

export const getProfile = async (): Promise<GetProfileResponse> => makeRequest('/profile', 'GET')
