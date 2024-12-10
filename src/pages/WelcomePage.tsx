import { Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const { Title, Text } = Typography

type Props = {}

export const WelcomePage = (props: Props) => {
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
      
      <Title level={2}>
        Welcome in our App!
      </Title>
      <Text>
        To use the functionality,&nbsp;
        <Link to="/login"
          style={{
            textDecoration: 'underline',
            color: 'inherit'
          }}
        >
          log in
        </Link>
      </Text>
    </div>
  )
}