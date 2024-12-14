import { Alert, Badge, Descriptions, Typography } from 'antd'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Loader } from 'src/components/Loader'
import { useAppSelector } from 'src/hooks/redux-hooks'
import { getProfileRequest } from 'src/store/profile/profileActions'

const { Title } = Typography

export const Profile = () => {
  const dispatch = useDispatch()
  const { profile: profileInfo, loading, error } = useAppSelector(state => state.profile)

  useEffect(() => {
    dispatch(getProfileRequest())
  }, [dispatch])

  const dateFormatter = (isoDate: string) => {
    const date = new Date(isoDate);

    const formattedDate = date.toLocaleString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })

    return formattedDate
  }

  return (
    <>
      {
        loading &&
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
      }
      {
        error &&
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
      }
      {profileInfo &&
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: 'calc(100vh - 128px)',
            padding: '40px 20px',
            maxWidth: '1000px',
            width: '100%'
          }}
        >
          <Descriptions title={<Title level={2} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>Profile&nbsp; {profileInfo.isActive ? <Badge status="processing" /> : ''}</Title>} bordered column={1} >

            <Descriptions.Item label="Name">
              {profileInfo.name}
            </Descriptions.Item>
            <Descriptions.Item label="Second Name">
              {profileInfo.secondName}
            </Descriptions.Item>
            <Descriptions.Item label="Last Name">
              {profileInfo.lastName}
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              {profileInfo.email}
            </Descriptions.Item>
            <Descriptions.Item label="Phone">
              {profileInfo.phone}
            </Descriptions.Item>
            <Descriptions.Item label="Status">
              {profileInfo.status.name}
            </Descriptions.Item>
            <Descriptions.Item label="Roles">
              {profileInfo.roles.map((item, index) => <Descriptions.Item key={index}><Badge status="success" text={item.name} /><br /></Descriptions.Item>
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Profile created at">
              {dateFormatter(profileInfo.createdAt)}
            </Descriptions.Item>
            <Descriptions.Item label="Profile updated at">
              {dateFormatter(profileInfo.updatedAt)}
            </Descriptions.Item>
          </Descriptions>
        </div>
      }
    </>

  )
}