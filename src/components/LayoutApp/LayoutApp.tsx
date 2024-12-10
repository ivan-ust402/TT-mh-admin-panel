import React from 'react'
import { Layout, Menu, MenuProps } from 'antd'
import { NavLink, Outlet } from 'react-router-dom'
import { HomeOutlined, LaptopOutlined, UserOutlined } from '@ant-design/icons'
import Sider from 'antd/es/layout/Sider'
import { useAuth } from '../../hooks/useAuth'

const { Header, Footer, Content } = Layout

const items2: MenuProps['items'] = [
  {
    key: `sub1`,
    icon: React.createElement(UserOutlined),
    label: <NavLink to="profile">Profile</NavLink>,
  },
  {
    key: `sub2`,
    icon: React.createElement(LaptopOutlined),
    label: `Manage`,
    children: [
      {
        key: `subKey1`,
        label: <NavLink to="posts">Posts</NavLink>,
      },
      {
        key: `subKey2`,
        label: <NavLink to="authors">Authors</NavLink>,
      },
      {
        key: `subKey3`,
        label: <NavLink to="tags">Tags</NavLink>,
      },
    ]
  }]

  const handleHomeClick = () => {

  }


export const LayoutApp = () => {
  const {isAuth} = useAuth()
  return (
    <Layout
      style={{
        minHeight: '100vh'
      }}
    >
      <Header
        style={{
          display: 'flex',
          columnGap: '10px',
          justifyContent: 'space-between',
          width: '100%'
        }}
      >
        <NavLink to={'/'}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onClick={handleHomeClick}
        >
          <HomeOutlined
            style={{
              color: '#fff',
              fontSize: '30px',
            }}
          />
        </NavLink>
      </Header>
      <Layout>
        {
        isAuth ? 
        <Sider
          breakpoint="lg"
          collapsedWidth="50px"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          theme='dark'
          className="rerere"
        >
          <Menu
            theme="dark"
            mode="inline"
            items={items2}
            onClick={(e) => {console.log(e)}}
          />
          
        </Sider>
        : ''
        }
        <Layout>
          <Content
            style={{
              padding: '0 50px',
              height: '100%',
            }}>
            <Outlet />
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ©2024 Created by Ustyantcev Ivan
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}