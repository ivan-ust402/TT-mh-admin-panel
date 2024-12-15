import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Card } from 'antd'
import React from 'react'
import { Post } from 'src/api/postsApi';
import { StyleSheet } from 'src/utils'

const { Meta } = Card;

interface Props {
  deletePost: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, id: number) => void,
  editPost: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, id: number) => void,
  post: Post
}

export const CardPost = ({ post, deletePost, editPost }: Props) => {
  return (
    <Card
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
                <div style={styles.tagNameContainer} key={tagIndex}>
                  {tag}
                </div>
              )
            })}
          </div>
        </>
      }
      actions={[
        <EditOutlined key="edit" onClick={(e) => editPost(e, post.id)} />,
        <DeleteOutlined key="delete" onClick={(e) => deletePost(e, post.id)} />
      ]}
      style={styles.card}
      hoverable
    >
      <Meta title={post.title} description={post.authorName}
      />
    </Card>
  )
}

const styles: StyleSheet = {
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