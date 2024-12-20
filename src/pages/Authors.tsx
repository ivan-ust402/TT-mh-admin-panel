import { Col, Row } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { Container, ErrorAlert, LoaderAlert, TitleContainerWithAddButton } from 'src/components'
import { CardAuthor } from 'src/components/CardAuthor'
import { useAppSelector } from 'src/hooks/redux-hooks'
import { getAuthorsRequest } from 'src/store/authors/authorsActions'
import { StyleSheet } from 'src/utils'

export const Authors = () => {
  const dispatch = useDispatch()
  const { authors, loading, error } = useAppSelector(state => state.authors)
  const location = useLocation()

  const editAuthorHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, id: number) => {
    e.preventDefault()
    alert(`PLACEHOLDER! EDIT author ID = ${id}! 
This functionality is under development.`)
  }
  const deleteAuthorHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, id: number) => {
    e.preventDefault()
    alert(`PLACEHOLDER! DELETE author ID = ${id}! 
This functionality is under development.`)
  }

  useEffect(() => {
    dispatch(getAuthorsRequest())
  }, [dispatch])

  if (loading) { return <LoaderAlert /> }
  if (error) { return <ErrorAlert error={error} /> }

  return (
    <Container style={styles.wrapper}>
      <TitleContainerWithAddButton title='Authors' />
      <Row
        gutter={[30, 30]}
        style={styles.row}
      >
        {authors?.map((author, index) => (
          <Col key={index}>
            <Link to={`detail?id=${author.id}`} state={location}>
              <CardAuthor author={author} editAuthor={editAuthorHandler} deleteAuthor={deleteAuthorHandler} />
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