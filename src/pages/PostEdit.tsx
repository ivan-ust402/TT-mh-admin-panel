import { Typography } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Container, ErrorAlert, LoaderAlert, PostEditForm, PostEditFormValues } from 'src/components'
import { useAppSelector } from 'src/hooks/redux-hooks'
import { getPostDetailsRequest } from 'src/store/postDetails/postActions'
import { StyleSheet } from 'src/utils'

const { Title } = Typography

export const PostEdit = () => {
  const dispatch = useDispatch()
  const {post, loading, error} = useAppSelector(state => state.postDetails)
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);
  const idParam = Number(searchParams.get('id'));
  console.log(location)

  const onFinish = (values: PostEditFormValues) => {
    // api editPost
    console.log(values);
  };

  useEffect(() => {
    dispatch(getPostDetailsRequest(idParam))
  }, [dispatch, idParam])

  if (loading) { return <LoaderAlert /> }
  if (error) { return <ErrorAlert error={error} /> }

  return (
    <Container style={styles.wrapper}>
      <Title level={2}>Edit Post</Title>
      {post && <PostEditForm onFinish={onFinish} initialValues={post} />}
    </Container>
  )
}

const styles: StyleSheet = {
  wrapper: {
    maxWidth: '880px'
  }
}