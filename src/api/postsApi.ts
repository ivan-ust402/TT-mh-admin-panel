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
export interface GetPostsParams {
  currentPage: number;
  pageCount: number;
  postsPerPage: number;
  totalPostsCount: number;
}

export type GetPostsResponse = {
  data: Post[];
  headers: GetPostsParams;
}

export const getPosts = async (page: number): Promise<GetPostsResponse> => {
  const response = await makeRequest(`/manage/posts?page=${page}`, 'GET')
  return {
    data: response.data,
    headers: {
      currentPage: response.headers['x-pagination-current-page'],
      pageCount: response.headers['x-pagination-page-count'], postsPerPage: response.headers['x-pagination-per-page'], totalPostsCount: response.headers['x-pagination-total-count']
    }
  }
}
