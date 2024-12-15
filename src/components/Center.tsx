import { StyleSheet } from 'src/utils'

interface Props {
  children: JSX.Element
}

export const Center = ({ children }: Props) => {
  return (
    <div
      style={styles.wrapper}
    >
      {children}
    </div>
  )
}

const styles: StyleSheet = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
}