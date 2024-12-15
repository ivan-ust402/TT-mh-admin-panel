import { Col, Pagination, Row } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CardPost, Container, ErrorAlert, LoaderAlert, TitleContainerWithAddButton } from 'src/components'
import { useAppSelector } from 'src/hooks/redux-hooks'
import { getPostsRequest } from 'src/store/posts/postsActions'
import { StyleSheet } from 'src/utils'



export const Posts = () => {
  const dispatch = useDispatch()
  const { error, loading, totalPostsCount, postsPerPage, posts } = useAppSelector(state => state.posts)

  const location = useLocation()
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search)
  const searchPage = Number(searchParams.get('page'))

  const editPostHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, id: number) => {
    e.preventDefault()
    navigate(`/posts/${id}/edit`, {
      state: location
    })
  }
  const deletePostHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault()
    alert('DELETE!')
  }

  const changePageHandler = (page: number
  ) => {
    navigate(`${location.pathname}?page=${page}`)
  }

  useEffect(() => {
    dispatch(getPostsRequest(searchPage))
  }, [dispatch, searchPage])

  if (loading) { return <LoaderAlert /> }
  if (error) { return <ErrorAlert error={error} /> }

  return (
    <Container style={styles.wrapper}>
      <TitleContainerWithAddButton title='Posts' buttonTitle='Add new post' routeTo='add' />
      <Row
        gutter={[16, 16]}
        style={styles.row}
      >
        {posts?.map((post, index) => (
          <Col key={index}>
            <Link to={`${post.id}`} state={location}>
              <CardPost
                post={post}
                editPost={editPostHandler}
                deletePost={deletePostHandler}
              />
            </Link>
          </Col>
        ))}
      </Row>
      <Pagination
        current={searchPage}
        total={totalPostsCount}
        pageSize={postsPerPage}
        onChange={changePageHandler} />
    </Container >
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