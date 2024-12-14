import { Alert, Badge, Descriptions, Typography } from 'antd'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Container, Loader } from 'src/components'

import { useAppSelector } from 'src/hooks/redux-hooks'
import { getProfileRequest } from 'src/store/profile/profileActions'
import { dateFormatter } from 'src/utils'

const { Title } = Typography

export const Profile = () => {
  const dispatch = useDispatch()
  const { profile: profileInfo, loading, error } = useAppSelector(state => state.profile)

  useEffect(() => {
    dispatch(getProfileRequest())
  }, [dispatch])

  if (loading) {
    return (
      // ????
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%'
        }}
      >
        <Alert
          message={<Loader />}
          type="success"
        />
      </div>
    )
  }

  if (error) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%'
        }}
      >
        <Alert
          message={error}
          type="error"
          showIcon
        />
      </div>
    )
  }
  return (
    <Container style={styles.wrapper}>
      <Descriptions title={<Title level={2} style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>Profile&nbsp; {profileInfo?.isActive ? <Badge status="processing" /> : ''}</Title>} bordered column={1} >
        <Descriptions.Item label="Name">
          {profileInfo?.name}
        </Descriptions.Item>
        <Descriptions.Item label="Second Name">
          {profileInfo?.secondName}
        </Descriptions.Item>
        <Descriptions.Item label="Last Name">
          {profileInfo?.lastName}
        </Descriptions.Item>
        <Descriptions.Item label="Email">
          {profileInfo?.email}
        </Descriptions.Item>
        <Descriptions.Item label="Phone">
          {profileInfo?.phone}
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          {profileInfo?.status.name}
        </Descriptions.Item>
        <Descriptions.Item label="Roles">
          {profileInfo?.roles.map((item, index) => <Descriptions.Item key={index}><Badge status="success" text={item.name} /><br /></Descriptions.Item>
          )}
        </Descriptions.Item>
        <Descriptions.Item label="Profile created at">
          {dateFormatter(profileInfo?.createdAt)}
        </Descriptions.Item>
        <Descriptions.Item label="Profile updated at">
          {dateFormatter(profileInfo?.updatedAt)}
        </Descriptions.Item>
      </Descriptions>
    </Container>
  )
}

const styles = {
  wrapper: {
    maxWidth: '1000px'
  }
}