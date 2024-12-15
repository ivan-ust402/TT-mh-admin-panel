import { AxiosResponse } from 'axios';
import { makeRequest } from '.';

export interface Tag {
  code: string,
  createdAt: string,
  id: number,
  name: string,
  sort: number | null,
  updatedAt: string
}

export const getTags = async (): Promise<AxiosResponse<Tag[]>> => {
  const response = await makeRequest('/manage/tags', 'GET')
  return response;
}