import { AxiosResponse } from 'axios';
import { makeRequest } from '.';

export interface Post {
  authorName: string,
  code: string,
  createdAt: string,
  id: number,
  previewPicture: {
    id: number,
    name: string,
    url: string
  },
  tagNames: string[],
  title: string,
  updatedAt: string
}

export type GetPostsResponse = Post[]

export const getPosts = async (page: number): Promise<AxiosResponse<GetPostsResponse>> => makeRequest(`/manage/posts?page=${page}`, 'GET')
