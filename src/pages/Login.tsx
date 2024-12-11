import { Alert, Button, Checkbox, Form, Input, Typography } from 'antd'
import React, { useState } from 'react'

const { Title } = Typography

type LoginValues = {
  "Log In Title": undefined | string,
  email: string,
  password: string,
  remember: boolean
}

export const Login = () => {
  const [message, setMessage] = useState('')
  const [typeMessage, setTypeMessage] = useState<"success" | "info" | "warning" | "error" | undefined>(undefined)

  const onFinish = (values: LoginValues) => {
    console.log('Success:', values);
    setMessage('success')
    setTypeMessage('success')
    setTimeout(() => {
      setMessage('')
      setTypeMessage(undefined)
      console.log(1)
    }, 3000)
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

        <Form.Item name="Log In title">
          <Title level={2}>Log In</Title>
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
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