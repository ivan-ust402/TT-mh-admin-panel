import { Typography } from 'antd'
import { useAuth } from 'src/hooks/useAuth'
import { Link } from 'react-router-dom'
import { Container } from 'src/components'
import { StyleSheet } from 'src/utils'
import { useAppSelector } from 'src/hooks/redux-hooks'

const { Title, Text } = Typography

export const HomePage = () => {
  const { isAuth } = useAuth()
  const { profile } = useAppSelector(state => state.profile)
  return (
    <Container style={styles.wrapper}>
      {
        isAuth
          ? <Title level={2}>Welcome {profile?.name ? profile.name : ''} in your account!</Title>
          : <>
            <Title level={2}>Welcome in our App!</Title>
            <Text>
              To use the functionality,&nbsp;
              <Link to="/login" style={styles.loginLink}>log in</Link>
            </Text>
          </>
      }
    </Container>
  )
}

const styles: StyleSheet = {
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginLink: {
    textDecoration: 'underline',
    color: 'inherit'
  }
}