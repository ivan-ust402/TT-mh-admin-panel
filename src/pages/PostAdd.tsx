import { Typography } from 'antd'
import { Container, PostEditForm, PostEditFormValues } from 'src/components'
import { StyleSheet } from 'src/utils'

const { Title } = Typography

export const PostAdd = () => {
  const onFinish = (values: PostEditFormValues) => {
    // api addPost
    console.log(values);
  };

  return (
    <Container style={styles.wrapper}>
      <Title level={2}>Create New Post</Title>
      <PostEditForm onFinish={onFinish} />
    </Container>
  )
}

const styles: StyleSheet = {
  wrapper: {
    maxWidth: '880px'
  }
}