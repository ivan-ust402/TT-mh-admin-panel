import React from 'react'
import { useLocation } from 'react-router-dom'

type Props = {}

export const PostEdit = (props: Props) => {
  const location = useLocation()
  console.log(location.state)
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
      <h2>PostEdit</h2>
    </div>
  )
}