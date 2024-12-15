import React from 'react'
import { ButtonAdd } from './ButtonAdd'
import { Typography } from 'antd'
import { StyleSheet } from 'src/utils'

const { Title } = Typography

interface ButtonSettings {
  buttonTitle: string,
  routeTo: string
}
interface Props {
  buttonSettings?: ButtonSettings
  title: string
}

export const TitleContainerWithAddButton = ({ title, buttonSettings }: Props) => {
  return (
    <div style={styles.titleContainer}>
      <Title level={2} style={styles.title}>{title}</Title>
      {
        buttonSettings && <ButtonAdd title={buttonSettings.buttonTitle} routeTo={buttonSettings.routeTo} />
      }
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