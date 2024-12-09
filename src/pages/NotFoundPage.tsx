import { Typography } from 'antd'
import React from 'react'

const {Title, Text} = Typography
type Props = {}

export const NotFoundPage = (props: Props) => {
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
    <Title level={2} type='danger'>Ooops... Something went wrong!</Title>
    <Text>Such page not found</Text>
  </div>
  )
}