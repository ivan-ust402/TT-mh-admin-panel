import { AxiosResponse } from 'axios'
import { makeRequest } from '.'

export interface PostDetails {
  author: {
    avatar: {
      id: number,
      name: string,
      url: string
    },
    fullName: string,
    id: number
  },
  code: string,
  createdAt: string,
  id: number,
  previewPicture: {
    id: number,
    name: string,
    url: string
  },
  tags: [
    {
      code: string,
      id: number,
      name: string
    }
  ],
  text: string,
  title: string,
  updatedAt: string
}

export const getPost = async (id: number): Promise<AxiosResponse<PostDetails>> => {
  const response = await makeRequest(`/manage/posts/detail?id=${id}`, 'GET')
  return response;
}