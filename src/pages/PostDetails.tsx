import { useLocation } from 'react-router-dom'

export const PostDetails = () => {
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
      <h2>PostDetails</h2>
    </div>
  )
}