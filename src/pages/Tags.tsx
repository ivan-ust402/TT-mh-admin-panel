import { Typography } from 'antd'
import { Container } from 'src/components'

const { Title, Text } = Typography
export type Tag = {
  code: string,
  createdAt: string,
  id: number,
  name: string,
  sort: number | null,
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
  return (
    <Container>
      <Title level={2} >Tags</Title>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore magnam vel facilis a debitis perferendis consequatur doloremque blanditiis, vitae, ut consectetur omnis. Nam ullam sint, odio accusantium rem velit dolor amet laborum.
      </Text>
    </Container>
  )
}