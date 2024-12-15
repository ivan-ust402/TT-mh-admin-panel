import { Typography } from 'antd'
import { Container, AuthorEditForm, PostEditFormValues } from 'src/components'
import { StyleSheet } from 'src/utils'

const { Title } = Typography

export const AuthorAdd = () => {
  const onFinish = (values: PostEditFormValues) => {
    // api addPost
    console.log(values);
  };

  return (
    <Container style={styles.wrapper}>
      <Title level={2}>Create New Author</Title>
      <AuthorEditForm onFinish={onFinish} />
    </Container>
  )
}

const styles: StyleSheet = {
  wrapper: {
    maxWidth: '880px'
  }
}