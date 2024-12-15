import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Card, Col, Pagination, Row } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Container, ErrorAlert, LoaderAlert, TitleContainerWithAddButton } from 'src/components'
import { useAppSelector } from 'src/hooks/redux-hooks'
import { getPostsRequest } from 'src/store/posts/postsActions'
import { StyleSheet } from 'src/utils'

const { Meta } = Card;

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

  useEffect(()=>{
    dispatch(getPostsRequest(searchPage))
  },[dispatch, searchPage])


  if (loading) {
    return (
      <LoaderAlert />
    )
  }

  if (error) {
    return (
      <ErrorAlert error={error} />
    )
  }

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
              <Card
                style={styles.card}
                cover={
                  <>
                    <img
                      alt="card cover"
                      src={post.previewPicture.url}
                      style={styles.cardImg}
                    />
                    <div style={styles.tagNamesContainer}>
                      {post.tagNames.map((tag, tagIndex) => {
                        return (
                          <div
                            style={styles.tagNameContainer}
                            key={tagIndex}
                          >
                            {tag}
                          </div>
                        )
                      })}
                    </div>
                  </>
                }
                actions={[
                  <EditOutlined
                    key="edit"
                    onClick={(e) => editPostHandler(e, post.id)}
                  />,
                  <DeleteOutlined key="delete"
                    onClick={deletePostHandler}
                  />
                ]}
                hoverable
              >
                <Meta
                  title={post.title}
                  description={post.authorName}
                />
              </Card>
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
  },
  card: {
    width: 300,
    height: 350,
    position: 'relative'
  },
  cardImg: {
    height: 200,
    objectFit: 'cover'
  },
  tagNamesContainer: {
    position: 'absolute',
    top: '0',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '5px',
    padding: 10
  },
  tagNameContainer: {
    padding: '10px',
    backgroundColor: '#eee',
    width: 'fit-content',
    border: '1px solid #ddd',
    borderRadius: '5px',
    opacity: 0.8
  }
}