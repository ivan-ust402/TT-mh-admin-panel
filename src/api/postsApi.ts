import { AxiosResponse } from 'axios';
import { makeRequest } from '.';
import { PostEditFormValues } from 'src/components';

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

export interface PreviewPicture {
  id: number,
  name: string,
  url: string
}

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
  previewPicture: PreviewPicture,
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

export const getPosts = async (page: number): Promise<AxiosResponse<Post[]>> => {
  const response = await makeRequest(`/manage/posts?page=${page}`, 'GET')
  return response;
}

export const getPost = async (id: number): Promise<AxiosResponse<PostDetails>> => {
  const response = await makeRequest(`/manage/posts/detail?id=${id}`, 'GET')
  return response;
}

export const addPost = async (post: PostEditFormValues): Promise<AxiosResponse<number>> => {
  const form = new FormData()
  form.append('title', post.title)
  form.append('text', post.text)
  for (let i = 0; i < post.tagIds.length; i++) {
    form.append('tagIds[]', post.tagIds[i].toString());
  }
  form.append('code', post.code)
  form.append('authorId', post.authorId.toString())
  if (typeof post.previewPicture !== 'string' && post.previewPicture.file.originFileObj) {
    form.append('previewPicture', post.previewPicture.file.originFileObj)
  }

  const response = await makeRequest('/manage/posts/add', 'POST', form)
  return response;
}

export const editPost = async ({id, post }: {id: number, post: Partial<PostEditFormValues>}): Promise<AxiosResponse<number>> => {
  const form = new FormData()
  if(post.title){
    form.append('title', post.title)
  }
  if(post.text){
    form.append('text', post.text)
  }
  if((post.tagIds || []).length > 0){
    for (let i = 0; i < (post.tagIds || []).length; i++) {
      form.append('tagIds[]', (post.tagIds || [])[i].toString());
    }
  }
  if(post.code){
    form.append('code', post.code)
  }
  if(post.authorId){
    form.append('authorId', post.authorId.toString())
  }
  if (typeof post.previewPicture !== 'string' && post.previewPicture?.file.originFileObj) {
    form.append('previewPicture', post.previewPicture.file.originFileObj)
  }

  const response = await makeRequest(`/manage/posts/edit?id=${id}`, 'POST', form)
  return response;
}

export const deletePost = async (id: number): Promise<AxiosResponse<PostDetails>> => {
  const response = await makeRequest(`/manage/posts/remove?id=${id}`, 'DELETE')
  return response;
}