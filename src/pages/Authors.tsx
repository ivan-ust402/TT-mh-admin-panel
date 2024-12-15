import { Col, Row } from 'antd'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Container, TitleContainerWithAddButton } from 'src/components'
import { CardAuthor } from 'src/components/CardAuthor'
import { StyleSheet } from 'src/utils'

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

export const Authors = () => {
  const authors: Author[] = [
    {
      id: 2,
      name: 'Иван',
      lastName: 'Иванов',
      secondName: 'Иванович',
      avatar: {
        id: 2,
        name: '4176_1191689844.gif',
        url: 'http://static-test.machineheads.ru/upload/author-avatars/a45/41761191689844.gif'
      },
      updatedAt: '2021-05-27T08:25:58+03:00',
      createdAt: '2021-05-27T08:25:58+03:00'
    },
    {
      id: 5,
      name: 'Пётр',
      lastName: 'Петров',
      secondName: 'Петрович',
      avatar: {
        id: 104,
        name: 'linux.jpg',
        url: 'http://static-test.machineheads.ru/upload/author-avatars/fab/linux.jpg'
      },
      updatedAt: '2023-03-07T07:52:50+03:00',
      createdAt: '2023-03-07T07:51:46+03:00'
    },
    {
      id: 1,
      name: 'Сергей',
      lastName: 'Сергеев',
      secondName: 'Сергеевич',
      avatar: {
        id: 1,
        name: '4176_1191689844.gif',
        url: 'http://static-test.machineheads.ru/upload/author-avatars/781/41761191689844.gif'
      },
      updatedAt: '2021-05-27T08:25:23+03:00',
      createdAt: '2021-05-27T08:25:23+03:00'
    }
  ]

  const location = useLocation()
  // const navigate = useNavigate()

  const editAuthorHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, id: number) => {
    e.preventDefault()
    // navigate(`edit/${id}`, {
    //   state: location
    // })
    alert(`EDIT author ID = ${id}!`)
  }
  const deleteAuthorHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, id: number) => {
    e.preventDefault()
    alert(`DELETE author ID = ${id}!`)
  }

  return (
    <Container style={styles.wrapper}>
      <TitleContainerWithAddButton title='Authors' />
      <Row
        gutter={[30, 50]}
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