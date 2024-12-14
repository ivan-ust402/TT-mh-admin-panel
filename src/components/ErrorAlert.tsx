import React from 'react'
import { Center } from './Center'
import { Alert } from 'antd'

interface Props {
  error: string
}

export const ErrorAlert = ({ error }: Props) => {
  return (
    <Center>
      <Alert
          message={error}
          type="error"
          showIcon
        />
    </Center>
  )
}