import { Descriptions, Typography } from 'antd'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Container, ErrorAlert, LoaderAlert } from 'src/components'
import { useAppSelector } from 'src/hooks/redux-hooks'
import { getPostDetailsRequest } from 'src/store/posts/postsActions'
import { dateFormatter, StyleSheet } from 'src/utils'

const { Title } = Typography


export const PostDetails = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);
  const idParam = Number(searchParams.get('id'));

  const { post, loading, error } = useAppSelector(state => state.posts)

  useEffect(() => {
    dispatch(getPostDetailsRequest(idParam))
  }, [dispatch, idParam])

  if (loading) { return <LoaderAlert /> }
  if (error) { return <ErrorAlert error={error} /> }

  return (
    <Container style={styles.wrapper}>
      <Descriptions title={<Title level={2} style={styles.title}>Post</Title>} bordered column={1} >
        <Descriptions.Item label="Preview picture">
          <img
            alt="card cover"
            src={post?.previewPicture.url}
            style={styles.image}
          />
        </Descriptions.Item>
        <Descriptions.Item label="Title">
          {post?.title}
        </Descriptions.Item>
        <Descriptions.Item label="Author Name">
          {post?.author?.fullName}
        </Descriptions.Item>
        <Descriptions.Item label="Code">
          {post?.code}
        </Descriptions.Item>
        <Descriptions.Item label="Tag names">
          {post?.tags?.map((item, index) => <Descriptions.Item key={index}>{item.name}<br /></Descriptions.Item>)}
        </Descriptions.Item>
        <Descriptions.Item label="Post created at">
          {dateFormatter(post?.createdAt)}
        </Descriptions.Item>
        <Descriptions.Item label="Post updated at">
          {dateFormatter(post?.updatedAt)}
        </Descriptions.Item>
      </Descriptions>
    </Container>
  )
}

const styles: StyleSheet = {
  wrapper: {
    maxWidth: '1000px'
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  image: {
    maxHeight: 200,
    height: '100%',
    width: '100%',
    maxWidth: 200,
    objectFit: 'cover'
  }
}