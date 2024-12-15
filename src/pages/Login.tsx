import { Alert, Button, Form, Input, Typography } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Container } from 'src/components'
import { useAuth } from 'src/hooks/useAuth'
import { loginRequest } from 'src/store/auth/authActions'
import { StyleSheet } from 'src/utils'
import { handleResponseError } from 'src/utils/error'

const { Title } = Typography

type LoginValues = {
  email: string,
  password: string,
}

export const Login = () => {
  const dispatch = useDispatch();
  const { isAuth, loading, error } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) {
      navigate('/')
    }
  }, [isAuth, navigate])

  const onFinish = (values: LoginValues) => {
    dispatch(loginRequest(values));
  };

  const onFinishFailed = (errorInfo: unknown) => {
    const message = handleResponseError(errorInfo, 'something went wrong!')
    console.log('Failed:', message);
  };

  return (
    <Container style={styles.wrapper}>
      <Title level={2}>Log in</Title>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={styles.form}
      >
        <Form.Item
          label="Email"
          name="email"
          initialValue={'test@test.ru'}
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          initialValue={'khro2ij3n2730'}
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            Submit
          </Button>
        </Form.Item>
        {
          error
            ? <Alert
              message={error}
              type="error"
              showIcon
              style={styles.alertError}
            />
            : ''
        }
      </Form>
    </Container>
  )
}

const styles: StyleSheet = {
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    position: 'relative'
  },
  alertError: {
    position: 'absolute',
    right: 0,
    width: '100%'
  }
}