import { Typography } from 'antd'
import React from 'react'

const { Title, Text } = Typography

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
  authors.forEach(author => {
    return console.log(author)
  })

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 128px)'
      }}
    >
      <Title level={2} >Authors</Title>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore magnam vel facilis a debitis perferendis consequatur doloremque blanditiis, vitae, ut consectetur omnis. Nam ullam sint, odio accusantium rem velit dolor amet laborum.
      </Text>
    </div>
  )
}