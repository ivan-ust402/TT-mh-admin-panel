import { Modal, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { PostDetails } from 'src/api/postsApi'
import { Container, LoaderAlert, PostEditForm, PostEditFormValues } from 'src/components'
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
  const { post, loading, error } = useAppSelector(state => state.posts)
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);
  const idParam = Number(searchParams.get('id'));
  const [open, setOpen] = useState(false);

  const onFinish = (values: PostEditFormValues) => {
    dispatch(editPostRequest({ id: idParam, post: values }))
  };

  useEffect(() => {
    dispatch(getPostDetailsRequest(idParam))
  }, [dispatch, idParam])

  useEffect(() => {
    if (error) {
      setOpen(true)
    }
  }, [error])

  if (loading) { return <LoaderAlert /> }

  return (
    <Container style={styles.wrapper}>
      <Title level={2}>Edit Post</Title>
      {post && <PostEditForm onFinish={onFinish} initialValues={normalizePost(post)} isEdit />}
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
    maxWidth: '880px',
    position: 'relative'
  },
  error: {
    position: 'absolute',
    top: 85,
    left: 18
  },
  errorContainer: {
    border: '1px splid #ccc'
  }
}