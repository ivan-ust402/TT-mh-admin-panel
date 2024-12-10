import { Typography } from 'antd'
import React from 'react'

const {Title, Text} = Typography

type Props = {}

export const HomePage = (props: Props) => {
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
      <Title level={2}>Home</Title>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore magnam vel facilis a debitis perferendis consequatur doloremque blanditiis, vitae, ut consectetur omnis. Nam ullam sint, odio accusantium rem velit dolor amet laborum.
      </Text>
    </div>
  )
}