import { AxiosResponse } from 'axios'
import { makeRequest } from '.'

export interface TagDetails {
  code: string,
  createdAt: string,
  id: number,
  name: string,
  sort: number | null,
  updatedAt: string
}

export const getTag = async (id: number): Promise<AxiosResponse<TagDetails>> => {
  const response = await makeRequest(`/manage/tags/detail?id=${id}`, 'GET')
  return response;
}