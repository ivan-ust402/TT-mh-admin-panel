import { Alert } from 'antd'
import { Center } from './Center'
import { Loader } from './Loader'

export const LoaderAlert = () => {
  return (
    <Center>
      <Alert
        message={<Loader />}
        type="success"
      />
    </Center>
  )
}