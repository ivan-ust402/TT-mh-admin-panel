import { AxiosResponse } from 'axios'
import { makeRequest } from '.'

export interface AuthorDetails {
  avatar: {
    id: number,
    name: string,
    url: string
  },
  createdAt: string,
  description: string,
  id: number,
  lastName: string,
  name: string,
  secondName: string,
  shortDescription: string,
  updatedAt: string
}

export const getAuthor = async (id: number): Promise<AxiosResponse<AuthorDetails>> => {
  const response = await makeRequest(`/manage/authors/detail?id=${id}`, 'GET')
  return response;
}