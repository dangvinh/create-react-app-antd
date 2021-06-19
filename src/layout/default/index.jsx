import React from 'react'
import styled from 'styled-components'
import { Layout, Menu, Button, Avatar, Space, Tooltip } from 'antd'
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import BeaverLogo from 'asset/images/beaver.png'

const Wrapper = styled.div``

const { Sider, Content, Header } = Layout
const { SubMenu } = Menu

const DefaultLayout = React.memo(() => {
  return (
    <Wrapper>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <div className='logo'>
            <img alt='logo' src={BeaverLogo} style={{ width: '30%', height: 'auto', margin: '0 auto' }} />
          </div>
          <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
            <Menu.Item key='1' icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key='2' icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key='sub1' icon={<UserOutlined />} title='User'>
              <Menu.Item key='3'>Tom</Menu.Item>
              <Menu.Item key='4'>Bill</Menu.Item>
              <Menu.Item key='5'>Alex</Menu.Item>
            </SubMenu>
            <SubMenu key='sub2' icon={<TeamOutlined />} title='Team'>
              <Menu.Item key='6'>Team 1</Menu.Item>
              <Menu.Item key='8'>Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key='9' icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className='site-layout'>
          <Header className='site-layout-background' style={{ padding: '0 24px', textAlign: 'right' }}>
            <Space direction='horizontal' size='large'>
              <Tooltip title='Admin' placement='left'>
                <Avatar src={BeaverLogo} style={{ border: '1px solid #f0f0f0', backgroundColor: '#f0f0f0' }} />
              </Tooltip>
              <Button type='primary' ghost>
                Đăng xuất
              </Button>
            </Space>
          </Header>
          <Content style={{ padding: 0 }}>
            <div className='site-layout-background' style={{ padding: '0 24px', minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
        </Layout>
      </Layout>
    </Wrapper>
  )
})

export default DefaultLayout
