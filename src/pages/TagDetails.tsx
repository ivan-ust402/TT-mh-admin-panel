import { Descriptions, Typography } from 'antd'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Container, ErrorAlert, LoaderAlert } from 'src/components'
import { useAppSelector } from 'src/hooks/redux-hooks'
import { getTagDetailsRequest } from 'src/store/tagDetails/tagActions'
import { dateFormatter, StyleSheet } from 'src/utils'

const { Title } = Typography


export const TagDetails = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);
  const idParam = Number(searchParams.get('id'));

  const { tag, loading, error } = useAppSelector(state => state.tagDetails)

  useEffect(() => {
    dispatch(getTagDetailsRequest(idParam))
  }, [dispatch, idParam])

  if (loading) { return <LoaderAlert /> }
  if (error) { return <ErrorAlert error={error} /> }

  return (
    <Container style={styles.wrapper}>
      <Descriptions title={<Title level={2} style={styles.title}>Tag Details</Title>} bordered column={1} >
        <Descriptions.Item label="Name">
          {tag?.name}
        </Descriptions.Item>
        <Descriptions.Item label="Code">
          {tag?.code}
        </Descriptions.Item>
        <Descriptions.Item label="Sort">
          {tag?.sort}
        </Descriptions.Item>
        <Descriptions.Item label="Tag created at">
          {dateFormatter(tag?.createdAt)}
        </Descriptions.Item>
        <Descriptions.Item label="Tag updated at">
          {dateFormatter(tag?.updatedAt)}
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