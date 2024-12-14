import { Typography } from 'antd'
import React from 'react'
import { Container, EditPostForm, EditPostFormValues } from 'src/components'
import { StyleSheet } from 'src/utils'

const { Title } = Typography

export const PostAdd = () => {
  const onFinish = (values: EditPostFormValues) => {
    // api addPost
    console.log(values);
  };

  return (
    <Container style={styles.wrapper}>
      <Title level={2}>Create New Post</Title>
      <EditPostForm onFinish={onFinish} />
    </Container>
  )
}

const styles: StyleSheet = {
  wrapper: {
    maxWidth: '880px'
  }
}