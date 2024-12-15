import React from 'react'
import { AddButton } from './AddButton'
import { Typography } from 'antd'
import { StyleSheet } from 'src/utils'

const { Title } = Typography

interface Props {
  buttonTitle: string,
  routeTo: string,
  title: string
}

export const TitleContainerWithAddButton = ({ title, buttonTitle, routeTo }: Props) => {
  return (
    <div style={styles.titleContainer}>
      <Title level={2} style={styles.title}>{title}</Title>
      <AddButton title={buttonTitle} routeTo={routeTo} />
    </div>
  )
}

const styles: StyleSheet = {
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
    width: '100%',
    maxWidth: '880px'
  },
  title: {
    marginBottom: 0
  }
}