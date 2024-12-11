import { Badge, Descriptions, Typography } from 'antd'
import React from 'react'

const { Title, Text } = Typography

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
  phone: string,
  email: string,
  name: string,
  lastName: string,
  secondName: string,
  roles: ProfileRole[],
  status: ProfileStatus,
  isActive: boolean,
  updatedAt: string,
  createdAt: string
}

const profileInfo: ProfileInfo = {
  id: 0,
  phone: '444',
  email: '2@2.ru',
  // email: false,
  name: 'Ivan',
  lastName: 'Ivanov',
  secondName: 'Ivanovich',
  roles: [
    {
      role: 'admin',
      name: 'admin'
    },
    {
      role: 'editor',
      name: 'editor'
    }
  ],
  status: {
    code: 0,
    name: 'confirmed'
  },
  isActive: true,
  updatedAt: "2019-08-24T14:15:22Z",
  createdAt: "2019-08-24T14:15:22Z"
}

export const Profile = (props: Props) => {
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
      {/*  */}
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
          {profileInfo.roles.map((role, index) => <Descriptions.Item key={index}><Badge status="success" text={role.name} /><br /></Descriptions.Item>
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