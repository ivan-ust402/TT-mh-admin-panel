import { Typography } from 'antd'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { Container, EditPostForm, EditPostFormValues } from 'src/components'
import { StyleSheet } from 'src/utils'

const { Title } = Typography

// type Props = {}

export const PostEdit = () => {
  const location = useLocation()
  console.log(location.state)
  // const params = useParams()

  const post = {
    code: 'code',
    title: 'title',
    authorId: 1,
    tagIds: [1, 2],
    text: 'text',
    previewPicture: 'previewPicture'
  }

  const onFinish = (values: EditPostFormValues) => {
    // api editPost
    console.log(values);
  };

  return (
    <Container style={styles.wrapper}>
      <Title level={2}>Edit Post</Title>
      <EditPostForm onFinish={onFinish} initialValues={post} />
    </Container>
  )
}

const styles: StyleSheet = {
  wrapper: {
    maxWidth: '880px'
  }
}