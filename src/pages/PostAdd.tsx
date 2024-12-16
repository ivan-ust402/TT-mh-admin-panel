import { Modal, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Container, PostEditForm, PostEditFormValues } from 'src/components'
import { useAppSelector } from 'src/hooks/redux-hooks'
import { addPostRequest } from 'src/store/posts/postsActions'
import { StyleSheet } from 'src/utils'

const { Title } = Typography

export const PostAdd = () => {
  const dispatch = useDispatch()
  const { error } = useAppSelector(state => state.posts)
  const [open, setOpen] = useState(false);


  useEffect(() => {
    if (error) {
      setOpen(true)
    }
  }, [error])

  const onFinish = (values: PostEditFormValues) => {
    dispatch(addPostRequest(values))
  };

  return (
    <Container style={styles.wrapper}>
      <Title level={2}>Create New Post</Title>
      <PostEditForm onFinish={onFinish} />
      {
        error &&
        <Modal
          title={<span style={{ color: 'red' }}>ERROR!</span>}
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={700}
          footer={null}
        >
          {error?.split('|').map((item, index) => {
            return (
              <div key={index} style={styles.errorContainer}>
                {item?.split(', ').map((i, indx) => <p key={indx}>{i}</p>)}
              </div>
            )
          })}
          <p>Please check your details and try submitting the form again.</p>
          <p>Пожалуйста проверьте ваши данные и попробуйте оотправить их заново.</p>
        </Modal>
      }
    </Container>
  )
}

const styles: StyleSheet = {
  wrapper: {
    maxWidth: '880px'
  }
}