import { LoadingOutlined } from '@ant-design/icons'
import React from 'react'

type Props = {}

export const Loader = (props: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <LoadingOutlined />
      <p
        style={{
          margin: 0,
          padding: 0,          
        }}
      >Loading...</p>
    </div>
  )
}