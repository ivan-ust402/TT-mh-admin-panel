import { Descriptions, Typography } from 'antd'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Container, ErrorAlert, LoaderAlert } from 'src/components'
import { useAppSelector } from 'src/hooks/redux-hooks'
import { getAuthorDetailsRequest } from 'src/store/authorDetails/authorActions'
import { dateFormatter, StyleSheet } from 'src/utils'

const { Title } = Typography

export const AuthorDetails = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);
  const idParam = Number(searchParams.get('id'));

  const { author, loading, error } = useAppSelector(state => state.author)
  console.log(author)

  useEffect(() => {
    dispatch(getAuthorDetailsRequest(idParam))
  }, [dispatch, idParam])

  if (loading) { return <LoaderAlert /> }
  if (error) { return <ErrorAlert error={error} /> }

  return (
    <Container style={styles.wrapper}>
      <Descriptions title={<Title level={2} style={styles.title}>Author</Title>} bordered column={1} >
        <Descriptions.Item label="Avatar">
          <img
            alt="author's avatar"
            src={author?.avatar.url}
            style={styles.image}
          />
        </Descriptions.Item>
        <Descriptions.Item label="Name">
          {author?.name}
        </Descriptions.Item>
        <Descriptions.Item label="Second name">
          {author?.secondName}
        </Descriptions.Item>
        <Descriptions.Item label="Last name">
          {author?.lastName}
        </Descriptions.Item>
        <Descriptions.Item label="Short description">
          {author?.shortDescription}
        </Descriptions.Item>
        <Descriptions.Item label="Description">
          {author?.description}
        </Descriptions.Item>
        <Descriptions.Item label="Author created at">
          {dateFormatter(author?.createdAt)}
        </Descriptions.Item>
        <Descriptions.Item label="Author updated at">
          {dateFormatter(author?.updatedAt)}
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