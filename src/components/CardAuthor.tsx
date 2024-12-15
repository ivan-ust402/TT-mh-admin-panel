import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Card } from 'antd'
import React from 'react'
import { dateFormatter, StyleSheet } from 'src/utils'

const { Meta } = Card;

export type Author = {
  avatar: {
    id: number,
    name: string,
    url: string
  },
  createdAt: string,
  id: number,
  lastName: string,
  name: string,
  secondName: string,
  updatedAt: string
}

interface Props {
  author: Author,
  deleteAuthor: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, id: number) => void,
  editAuthor: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, id: number) => void
}

export const CardAuthor = ({ author, deleteAuthor, editAuthor }: Props) => {
  return (
    <Card
      cover={
        <img
          alt="card cover"
          src={author.avatar.url}
          style={styles.cardImg}
        />
      }
      actions={[
        <EditOutlined key="edit" onClick={(e) => editAuthor(e, author.id)} />,
        <DeleteOutlined key="delete" onClick={(e) => deleteAuthor(e, author.id)} />
      ]}
      style={styles.card}
      hoverable
    >
      <Meta title={`${author.name} ${author.secondName} ${author.lastName} `} description={`Создан: ${dateFormatter(author.createdAt)} Обновлен: ${dateFormatter(author.updatedAt)}
      `}
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