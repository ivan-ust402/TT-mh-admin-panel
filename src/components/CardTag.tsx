import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Card } from 'antd'
import React from 'react'
import { dateFormatter, StyleSheet } from 'src/utils'

const { Meta } = Card;

export type Tag = {
  code: string,
  createdAt: string,
  id: number,
  name: string,
  sort: number | null,
  updatedAt: string
}

interface Props {
  deleteTag: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, id: number) => void,
  editTag: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, id: number) => void,
  tag: Tag
}

export const CardTag = ({ tag, deleteTag, editTag }: Props) => {
  return (
    <Card
      actions={[
        <EditOutlined key="edit" onClick={(e) => editTag(e, tag.id)} />,
        <DeleteOutlined key="delete" onClick={(e) => deleteTag(e, tag.id)} />
      ]}
      style={styles.card}
      hoverable
    >
      <Meta 
        title={`Имя тэга: ${tag.name}`} 
        description={
        <>
          <p>Код: {tag.code},</p>
          <p>Сортировка: {tag.sort ? tag.sort : 'отсутствует'},</p>
          <p>Создан: {dateFormatter(tag.createdAt)},</p>
          <p>Обновлен: {dateFormatter(tag.updatedAt)}</p>
        </>
        }
      />
    </Card>
  )
}

const styles: StyleSheet = {
  card: {
    width: 300,
    height: 270,
    position: 'relative'
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