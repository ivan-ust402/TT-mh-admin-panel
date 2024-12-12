import { Typography } from 'antd'
import React from 'react'
import { useAuth } from 'src/hooks/useAuth'
import { Link } from 'react-router-dom'

const { Title, Text } = Typography

type Props = {}

export const HomePage = (props: Props) => {
  const { isAuth, userName } = useAuth()
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
      {
        isAuth
          ? <Title level={2}>Welcome {userName ? userName : ''} in your account!</Title>
          : <>
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
          </>
      }

    </div>
  )
}