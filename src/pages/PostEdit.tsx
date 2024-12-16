import { Typography } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { PostDetails } from 'src/api/postsApi'
import { Container, ErrorAlert, LoaderAlert, PostEditForm, PostEditFormValues } from 'src/components'
import { useAppSelector } from 'src/hooks/redux-hooks'
import { editPostRequest, getPostDetailsRequest } from 'src/store/posts/postsActions'
import { StyleSheet } from 'src/utils'

const { Title } = Typography

const normalizePost = (post: PostDetails) => ({
    authorId: post.author.id,
    code: post.code,
    previewPicture: post.previewPicture.url,
    tagIds: post.tags.map(item => item.id),
    text: post.text,
    title: post.title
})

export const PostEdit = () => {
  const dispatch = useDispatch()
  const {post, loading, error} = useAppSelector(state => state.posts)
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);
  const idParam = Number(searchParams.get('id'));

  const onFinish = (values: PostEditFormValues) => {
    dispatch(editPostRequest({ id: idParam, post: values } ))
  };

  useEffect(() => {
    dispatch(getPostDetailsRequest(idParam))
  }, [dispatch, idParam])

  if (loading) { return <LoaderAlert /> }
  if (error) { return <ErrorAlert error={error} /> }

  return (
    <Container style={styles.wrapper}>
      <Title level={2}>Edit Post</Title>
      {post && <PostEditForm onFinish={onFinish} initialValues={normalizePost(post)} isEdit />}
    </Container>
  )
}

const styles: StyleSheet = {
  wrapper: {
    maxWidth: '880px'
  }
}