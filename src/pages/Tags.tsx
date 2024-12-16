import { Col, Row } from 'antd'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { Container, ErrorAlert, LoaderAlert, TitleContainerWithAddButton } from 'src/components'
import { CardTag } from 'src/components/CardTag'
import { useAppSelector } from 'src/hooks/redux-hooks'
import { getTagsRequest } from 'src/store/tags/tagsActions'
import { StyleSheet } from 'src/utils'

export const Tags = () => {
  const dispatch = useDispatch()
  const {tags, loading, error} = useAppSelector(state => state.tags)
  const location = useLocation()

  const editTagHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, id: number) => {
    e.preventDefault()
    alert(`EDIT tag ID = ${id}!`)
  }
  const deleteTagHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, id: number) => {
    e.preventDefault()
    alert(`DELETE tag ID = ${id}!`)
  }

  useEffect(() => {
    dispatch(getTagsRequest())
  }, [dispatch])

  if (loading) { return <LoaderAlert /> }
  if (error) { return <ErrorAlert error={error} /> }

  return (
    <Container style={styles.wrapper}>
      <TitleContainerWithAddButton title='Tags' />
      <Row
        gutter={[16, 16]}
        style={styles.row}
      >
        {tags?.map((tag, index) => (
          <Col key={index}>
            <Link to={`detail?id=${tag.id}`} state={location}>
              <CardTag tag={tag} editTag={editTagHandler} deleteTag={deleteTagHandler} />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

const styles: StyleSheet = {
  wrapper: {
    alignItems: 'center'
  },
  row: {
    maxWidth: '1000px'
  }
}