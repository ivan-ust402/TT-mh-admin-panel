import { Typography } from 'antd'
import { useDispatch } from 'react-redux'
import { Container, PostEditForm, PostEditFormValues } from 'src/components'
import { addPostRequest } from 'src/store/posts/postsActions'
import { StyleSheet } from 'src/utils'

const { Title } = Typography

export const PostAdd = () => {
  const dispatch = useDispatch()
  const onFinish = (values: PostEditFormValues) => {
    dispatch(addPostRequest(values))
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