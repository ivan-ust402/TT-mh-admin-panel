import { Col, Row } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { Container, TitleContainerWithAddButton } from 'src/components'
import { CardTag } from 'src/components/CardTag'
import { StyleSheet } from 'src/utils'

export type Tag = {
  code: string,
  createdAt: string,
  id: number,
  name: string,
  sort: string | null,
  updatedAt: string
}

export const Tags = () => {
  const tags: Tag[] = [
    {
      id: 4,
      name: 'Басня',
      code: 'basna',
      sort: null,
      updatedAt: '2021-05-27T08:26:37+03:00',
      createdAt: '2021-05-27T08:26:37+03:00'
    },
    {
      id: 3,
      name: 'Песня',
      code: 'pesna',
      sort: null,
      updatedAt: '2021-05-27T08:26:33+03:00',
      createdAt: '2021-05-27T08:26:33+03:00'
    },
    {
      id: 2,
      name: 'Проза',
      code: 'proza',
      sort: null,
      updatedAt: '2021-05-27T08:26:25+03:00',
      createdAt: '2021-05-27T08:26:25+03:00'
    },
    {
      id: 5,
      name: 'Смешные',
      code: 'smesnye',
      sort: null,
      updatedAt: '2021-05-27T08:26:43+03:00',
      createdAt: '2021-05-27T08:26:43+03:00'
    },
    {
      id: 1,
      name: 'Стихи',
      code: 'stihi',
      sort: null,
      updatedAt: '2021-05-27T08:26:20+03:00',
      createdAt: '2021-05-27T08:26:20+03:00'
    },
    {
      id: 6,
      name: 'Страшные',
      code: 'strasnye',
      sort: null,
      updatedAt: '2021-05-27T08:26:57+03:00',
      createdAt: '2021-05-27T08:26:57+03:00'
    }
  ]
  const location = useLocation()
  // const navigate = useNavigate()

  const editTagHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, id: number) => {
    e.preventDefault()
    // navigate(`edit/${id}`, {
    //   state: location
    // })
    alert(`EDIT tag ID = ${id}!`)
  }
  const deleteTagHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, id: number) => {
    e.preventDefault()
    alert(`DELETE tag ID = ${id}!`)
  }

  return (
    <Container style={styles.wrapper}>
      <TitleContainerWithAddButton title='Tags' />
      <Row
        gutter={[16, 34]}
        style={styles.row}
      >
        {tags?.map((tag, index) => (
          <Col key={index}>
            <Link to={`detail?id=${tag.id}`} state={location}>
              <CardTag tag={tag} editTag={editTagHandler} deleteTag={deleteTagHandler} />
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