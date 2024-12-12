import { Badge, Descriptions, Typography } from 'antd'
import React from 'react'

const { Title } = Typography

type Props = {}
type ProfileRole = {
  role: string,
  name: string
}
type ProfileStatus = {
  code: number,
  name: string
}
type ProfileInfo = {
  id: number,
  phone: string | null,
  email: string,
  name: string | null,
  lastName: string | null,
  secondName: string | null,
  roles: ProfileRole[],
  status: ProfileStatus,
  isActive: boolean,
  updatedAt: string,
  createdAt: string
}

export const Profile = (props: Props) => {
  const profileInfo: ProfileInfo = {
    id: 1,
    phone: null,
    email: "test@test.ru",
    name: "Ivan",
    lastName: null,
    secondName: null,
    roles: [
      {
        role: "admin",
        name: "Админ"
      }
    ],
    status: {
      code: 10,
      name: "Активен"
    },
    isActive: true,
    updatedAt: "2021-05-27T08:24:07+03:00",
    createdAt: "2021-05-27T08:24:07+03:00"
  }

  const dateFormatter = (isoDate: string) => {
    const date = new Date(isoDate);

    const formattedDate = date.toLocaleString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })

    return formattedDate
  }
  
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 128px)',
        padding: '40px 20px',
        maxWidth: '1000px',
        width: '100%',
      }}
    >
      <Descriptions title={<Title level={2} style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>Profile&nbsp; {profileInfo.isActive ? <Badge status="processing" /> : ''}</Title>} bordered column={1} >

        <Descriptions.Item label="Name">
          {profileInfo.name}
        </Descriptions.Item>
        <Descriptions.Item label="Second Name">
          {profileInfo.secondName}
        </Descriptions.Item>
        <Descriptions.Item label="Last Name">
          {profileInfo.lastName}
        </Descriptions.Item>
        <Descriptions.Item label="Email">
          {profileInfo.email}
        </Descriptions.Item>
        <Descriptions.Item label="Phone">
          {profileInfo.phone}
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          {profileInfo.status.name}
        </Descriptions.Item>
        <Descriptions.Item label="Roles">
          {profileInfo.roles.map((item, index) => <Descriptions.Item key={index}><Badge status="success" text={item.name} /><br /></Descriptions.Item>
          )}
        </Descriptions.Item>
        <Descriptions.Item label="Profile created at">
          {dateFormatter(profileInfo.createdAt)}
        </Descriptions.Item>
        <Descriptions.Item label="Profile updated at">
          {dateFormatter(profileInfo.updatedAt)}
        </Descriptions.Item>
      </Descriptions>
    </div>
  )
}