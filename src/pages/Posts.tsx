import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Card, Col, Pagination, Row, Typography } from 'antd'
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Container } from 'src/components'
import { StyleSheet } from 'src/utils'

const { Title } = Typography
const { Meta } = Card;

type Post = {
  authorName: string,
  code: string,
  createdAt: string,
  id: number,
  previewPicture: {
    id: number,
    name: string,
    url: string
  },
  tagNames: string[],
  title: string,
  updatedAt: string
}

export const Posts = () => {
  const posts: Post[] = [
    {
      id: 70,
      title: 'Юбилейный',
      code: 'ubilejnyj',
      authorName: 'Иванов Иван Иванович',
      previewPicture: {
        id: 94,
        name: '03.jpg',
        url: 'http://static-test.machineheads.ru/upload/post-preview/7a3/03.jpg'
      },
      tagNames: [
        'Проза'
      ],
      updatedAt: '2023-03-01T11:28:12+03:00',
      createdAt: '2023-02-28T19:26:45+03:00'
    },
    {
      id: 69,
      title: 'Весна',
      code: 'vesna',
      authorName: 'Сергеев Сергей Сергеевич',
      previewPicture: {
        id: 93,
        name: '01.jpg',
        url: 'http://static-test.machineheads.ru/upload/post-preview/d6d/01.jpg'
      },
      tagNames: [
        'Стихи'
      ],
      updatedAt: '2023-02-28T19:25:31+03:00',
      createdAt: '2023-02-28T17:33:39+03:00'
    },
    {
      id: 45,
      title: 'Сага без тегов',
      code: '909291',
      authorName: 'Сергеев Сергей Сергеевич',
      previewPicture: {
        id: 47,
        name: 'download.jpg',
        url: 'http://static-test.machineheads.ru/upload/post-preview/313/download.jpg'
      },
      tagNames: [],
      updatedAt: '2023-01-16T13:59:36+03:00',
      createdAt: '2022-08-03T06:20:04+03:00'
    },
    {
      id: 42,
      title: 'Праздник огурца в Суздали',
      code: '2022',
      authorName: 'Сергеев Сергей Сергеевич',
      previewPicture: {
        id: 44,
        name: 'D2MS.png',
        url: 'http://static-test.machineheads.ru/upload/post-preview/9d2/d2ms.png'
      },
      tagNames: [
        'Стихи',
        'Проза',
        'Песня',
        'Басня',
        'Смешные',
        'Страшные'
      ],
      updatedAt: '2022-08-03T05:06:18+03:00',
      createdAt: '2022-08-03T05:06:18+03:00'
    },
    {
      id: 41,
      title: '666',
      code: '666',
      authorName: 'Сергеев Сергей Сергеевич',
      previewPicture: {
        id: 43,
        name: '0_nmHC1101iCu3OtYU.jpg',
        url: 'http://static-test.machineheads.ru/upload/post-preview/a93/0nmhc1101icu3otyu.jpg'
      },
      tagNames: [
        'Басня'
      ],
      updatedAt: '2022-08-03T04:58:18+03:00',
      createdAt: '2022-08-03T04:58:18+03:00'
    },
    {
      id: 39,
      title: 'аыва',
      code: 'ld15pfy3qy',
      authorName: 'Иванов Иван Иванович',
      previewPicture: {
        id: 41,
        name: 'd9254997d1cd7b1f39167d2363e14c28-1024x935.jpg',
        url: 'http://static-test.machineheads.ru/upload/post-preview/db7/d9254997d1cd7b1f39167d2363e14c28-1024x935.jpg'
      },
      tagNames: [
        'Смешные',
        'Страшные'
      ],
      updatedAt: '2021-08-13T16:37:11+03:00',
      createdAt: '2021-08-13T16:37:11+03:00'
    },
    {
      id: 38,
      title: 'енекуецй',
      code: '8h5n99inpi',
      authorName: 'Иванов Иван Иванович',
      previewPicture: {
        id: 40,
        name: 's1200.jpeg',
        url: 'http://static-test.machineheads.ru/upload/post-preview/e49/s1200.jpeg'
      },
      tagNames: [
        'Стихи'
      ],
      updatedAt: '2021-08-13T16:37:00+03:00',
      createdAt: '2021-08-13T16:37:00+03:00'
    },
    {
      id: 36,
      title: 'рпарп',
      code: 'p8osw133qe',
      authorName: 'Сергеев Сергей Сергеевич',
      previewPicture: {
        id: 38,
        name: '9dbdf1269bf5a53.jpg',
        url: 'http://static-test.machineheads.ru/upload/post-preview/9c1/9dbdf1269bf5a53.jpg'
      },
      tagNames: [
        'Проза'
      ],
      updatedAt: '2023-03-01T15:41:58+03:00',
      createdAt: '2021-08-13T16:36:13+03:00'
    },
    {
      id: 34,
      title: 'павп',
      code: '4wzorazc7r',
      authorName: 'Иванов Иван Иванович',
      previewPicture: {
        id: 36,
        name: 'd9254997d1cd7b1f39167d2363e14c28-1024x935.jpg',
        url: 'http://static-test.machineheads.ru/upload/post-preview/9ab/d9254997d1cd7b1f39167d2363e14c28-1024x935.jpg'
      },
      tagNames: [
        'Басня'
      ],
      updatedAt: '2021-08-13T16:35:49+03:00',
      createdAt: '2021-08-13T16:35:49+03:00'
    }
  ]
  const location = useLocation()
  const navigate = useNavigate()

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
  return (
    <Container style={styles.wrapper}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 5,
          width: '100%',
          maxWidth: '880px'
        }}
      >
        <Title
          level={2}
          style={{
            marginBottom: 0
          }}
        >Posts</Title>
        <Link to={'add'}>
          <Button type='primary'>
            <PlusOutlined />
            Add Post
          </Button>
        </Link>
      </div>
      <Row
        gutter={[16, 16]}
        style={{
          maxWidth: '1000px'
        }}
      >
        {posts.map((post, index) => (
          <Col key={index}>
            <Link to={`${post.id}`} state={location}>
              <Card
                style={{
                  width: 300,
                  height: 350,
                  position: 'relative'
                }}
                cover={
                  <>
                    <img
                      alt="card cover"
                      src={post.previewPicture.url}
                      style={{
                        height: 200,
                        objectFit: 'cover'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '5px',
                      padding: 10
                    }}>
                      {post.tagNames.map((tag, tagIndex) => {
                        return (
                          <div
                            style={{
                              padding: '10px',
                              backgroundColor: '#eee',
                              width: 'fit-content',
                              border: '1px solid #ddd',
                              borderRadius: '5px',
                              opacity: 0.8
                            }}
                            key={tagIndex}
                          >{tag}</div>
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
      <Pagination defaultCurrent={1} total={50} />
    </Container >
  )
}

const styles: StyleSheet = {
  wrapper: {
    alignItems: 'center'
  }
}