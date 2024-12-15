import { Typography } from 'antd'
import React from 'react'
import { Container } from 'src/components'
import { StyleSheet } from 'src/utils'

const { Title, Text } = Typography

export const NotFoundPage = () => {
  return (
    <Container style={styles.wrapper}>
      <Title level={2} type='danger'>Ooops... Something went wrong!</Title>
      <Text>Such page not found</Text>
    </Container>
  )
}

const styles: StyleSheet = {
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  }
}