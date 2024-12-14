import { LoadingOutlined } from '@ant-design/icons'

export const Loader = () => {
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
          padding: 0
        }}
      >Loading...</p>
    </div>
  )
}