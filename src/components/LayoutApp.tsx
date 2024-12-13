import React, { useEffect, useState } from 'react'
import { Button, Layout, Menu, MenuProps } from 'antd'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { HomeOutlined, LaptopOutlined, UserOutlined } from '@ant-design/icons'
import Sider from 'antd/es/layout/Sider'
import { useAuth } from '../hooks/useAuth'
import { useDispatch } from 'react-redux'
import { logoutRequest } from 'src/store/auth/authActions'

const { Header, Footer, Content } = Layout

const items2: MenuProps['items'] = [
  {
    key: `profile`,
    icon: React.createElement(UserOutlined),
    label: <NavLink to="profile">Profile</NavLink>,
  },
  {
    key: `manage`,
    icon: React.createElement(LaptopOutlined),
    label: `Manage`,
    children: [
      {
        key: `posts`,
        label: <NavLink to="posts">Posts</NavLink>,
      },
      {
        key: `authors`,
        label: <NavLink to="authors">Authors</NavLink>,
      },
      {
        key: `tags`,
        label: <NavLink to="tags">Tags</NavLink>,
      },
    ]
  }]



export const LayoutApp = () => {
  const { isAuth } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const fromPage = location.state?.from?.pathname || '/'
  const initialMenuKey = location.pathname.split('').splice(1).join('') 
  const [selectedKey, setSelectedKey] = useState<string>(initialMenuKey)

  const handleLogOut = () => {
    dispatch(logoutRequest());
    navigate("/", { replace: true })
  }

  const handleHomeClick = () => {
    setSelectedKey('')
  }

  const handleMenuClick = (e: { key: string }) => {
    console.log(e.key)
    setSelectedKey(e.key);
  }

  useEffect(() => {
    if(!isAuth) {
      setSelectedKey('')
    }
  }, [isAuth])
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
          width: '100%',
          alignItems: 'center'
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
        {
          isAuth
            ? <Button
              type='default'
              onClick={handleLogOut}
            >
              Log Out
            </Button>
            : <Link
              to={'/login'}
              state={{ from: fromPage }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onClick={handleHomeClick}
            >
              <Button type='default' >
                Log In
              </Button>
            </Link>
        }
      </Header>
      <Layout>
        {
          isAuth ?
            <Sider
              breakpoint="lg"
              collapsedWidth="50px"
              theme='dark'
              className="rerere"
            >
              <Menu
                theme="dark"
                mode="inline"
                items={items2}
                selectedKeys={[selectedKey]}
                onClick={handleMenuClick}
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