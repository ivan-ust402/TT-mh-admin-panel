import { AxiosResponse } from 'axios'
import { makeRequest } from '.'

export interface Author {
  avatar: {
    id: number,
    name: string,
    url: string
  },
  createdAt: string,
  id: number,
  lastName: string,
  name: string,
  secondName: string,
  updatedAt: string
}

export const getAuthors = async (): Promise<AxiosResponse<Author[]>> => makeRequest('/manage/authors', 'GET')