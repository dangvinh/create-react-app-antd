import React from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  return (
    <Form
      name='normal_login'
      className='login-form'
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name='username'
        rules={[
          {
            required: true,
            message: 'Bắt buộc!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Tên đăng nhập' />
      </Form.Item>
      <Form.Item
        name='password'
        rules={[
          {
            required: true,
            message: 'Bắt buộc!',
          },
        ]}
      >
        <Input prefix={<LockOutlined className='site-form-item-icon' />} type='password' placeholder='Mật khẩu' />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit' className='login-form-button'>
          ĐĂNG NHẬP
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
