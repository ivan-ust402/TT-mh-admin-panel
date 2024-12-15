import { LoadingOutlined } from '@ant-design/icons'
import { StyleSheet } from 'src/utils'

export const Loader = () => {
  return (
    <div style={styles.wrapper}>
      <LoadingOutlined />
      <p style={styles.text}>Loading...</p>
    </div>
  )
}

const styles: StyleSheet = {
  wrapper: {
    display: 'flex',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  text: {
    margin: 0,
    padding: 0
  }
}