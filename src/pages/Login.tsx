import { Alert, Button, Checkbox, Form, Input, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAuth } from 'src/hooks/useAuth'
import { loginRequest } from 'src/store/auth/authActions'

const { Title } = Typography

type LoginValues = {
  email: string,
  password: string,
}

export const Login = () => {
  const [message, setMessage] = useState('')
  const [typeMessage, setTypeMessage] = useState<"success" | "info" | "warning" | "error" | undefined>(undefined)
  const dispatch = useDispatch();
  const {isAuth} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if(isAuth){
      navigate('/')
    }
  }, [isAuth, navigate])

  const onFinish = (values: LoginValues) => {
    dispatch(loginRequest(values));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 128px)',

      }}
    >
      <Title level={2}>Log in</Title>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{
          position: 'relative'
        }}
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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        {
          message
            ? <Alert
              message={message}
              type={typeMessage}
              showIcon
              style={{
                position: 'absolute',
                right: 0,
                width: '100%',

              }}
            />
            : ''
        }
      </Form>

    </div>
  )
}