import { Descriptions, Typography } from 'antd'
import React from 'react'
import { Container } from 'src/components'
import { dateFormatter, StyleSheet } from 'src/utils'

const { Title } = Typography


export const PostDetails = () => {

  const post = {
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
  }

  return (
    <Container style={styles.wrapper}>
      <Descriptions title={<Title level={2} style={styles.title}>Post</Title>} bordered column={1} >
        <Descriptions.Item label="Preview picture">
          <img
            alt="card cover"
            src={post.previewPicture.url}
            style={styles.image}
          />
        </Descriptions.Item>
        <Descriptions.Item label="Title">
          {post.title}
        </Descriptions.Item>
        <Descriptions.Item label="Author Name">
          {post.authorName}
        </Descriptions.Item>
        <Descriptions.Item label="Code">
          {post.code}
        </Descriptions.Item>
        <Descriptions.Item label="Tag names">
          {post.tagNames.map((item, index) => <Descriptions.Item key={index}>{item}<br /></Descriptions.Item>)}
        </Descriptions.Item>
        <Descriptions.Item label="Post created at">
          {dateFormatter(post.createdAt)}
        </Descriptions.Item>
        <Descriptions.Item label="Post updated at">
          {dateFormatter(post.updatedAt)}
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
    height: 200,
    objectFit: 'cover'
  }
}