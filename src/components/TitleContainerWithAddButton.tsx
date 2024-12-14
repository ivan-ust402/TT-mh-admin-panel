import React from 'react'
import { AddButton } from './AddButton'
import { Typography } from 'antd'

const { Title } = Typography

interface Props {
  buttonTitle: string,
  routeTo: string,
  title: string
}

export const TitleContainerWithAddButton = ({ title, buttonTitle, routeTo }: Props) => {
  return (
    <div
      style={styles.titleContainer}
    >
      <Title
        level={2}
        style={{
          marginBottom: 0
        }}
      >{title}</Title>
      <AddButton title={buttonTitle} routeTo={routeTo} />
    </div>
  )
}

const styles = {
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
    width: '100%',
    maxWidth: '880px'
  }
}