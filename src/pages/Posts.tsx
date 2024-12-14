import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Card, Col, Pagination, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Container, ErrorAlert, LoaderAlert, TitleContainerWithAddButton } from 'src/components'
import { useAppSelector } from 'src/hooks/redux-hooks'
import { getPostsRequest } from 'src/store/posts/postsActions'
import { StyleSheet } from 'src/utils'


const { Meta } = Card;


export const Posts = () => {
  const dispatch = useDispatch()
  const { error, loading, params, posts } = useAppSelector(state => state.posts)
  const location = useLocation()
  console.log(location)
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search)
  const searchPage = Number(searchParams.get('_page'))

  const [currentPage, setCurrentPage] = useState(params?.currentPage || searchPage || 0)
  const [pageCount, setPageCount] = useState(params?.pageCount || 0)
  const [totalPosts, setTotalPosts] = useState(params?.totalPostsCount || 0)


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
    if (page > pageCount) {
      setCurrentPage(pageCount);
      searchParams.set('_page', pageCount.toString())
      navigate(`${location.pathname}?${searchParams.toString()}`)
    } else if (page < 0 && pageCount > 0) {
      setCurrentPage(pageCount);
      searchParams.set('_page', '1')
      navigate(`${location.pathname}?${searchParams.toString()}`)
    } else if (page < 0 && pageCount === 0) {
      navigate('/404')
    } else {
      setCurrentPage(page);
      searchParams.set('_page', page.toString())
      navigate(`${location.pathname}?${searchParams.toString()}`)
    }

  }

  useEffect(() => {
    if (currentPage > pageCount) {
      dispatch(getPostsRequest(pageCount))
      searchParams.set('_page', pageCount.toString())
      navigate(`${location.pathname}?${searchParams.toString()}`)
    } else if (currentPage < 0 && pageCount > 0) {
      dispatch(getPostsRequest(1))
      searchParams.set('_page', '1')
      navigate(`${location.pathname}?${searchParams.toString()}`)
    } else if (currentPage < 0 && pageCount === 0) {
      navigate('/notfound')
    } else {
      dispatch(getPostsRequest(currentPage))
    }
  }, [dispatch, currentPage, pageCount])

  useEffect(() => {
    if (params && params.totalPostsCount) {
      setTotalPosts(params.totalPostsCount)
    }
    if (params && params.pageCount) {
      setPageCount(params.pageCount)
    }
  }, [params])



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
        current={currentPage}
        total={totalPosts}
        pageSize={params?.postsPerPage || 9}
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