import React, { useEffect, useState } from 'react'
import { Button, Layout } from 'antd'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { HomeOutlined } from '@ant-design/icons'
import { useAuth } from '../hooks/useAuth'
import { useDispatch } from 'react-redux'
import { logoutRequest } from 'src/store/auth/authActions'
import { StyleSheet } from 'src/utils'
import { AppSidebar } from './AppSidebar'
import { checkMenuKey } from 'src/utils/menu'

const { Header, Footer, Content } = Layout

export const AppLayout = () => {
  const { isAuth } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const fromPage = location.state?.from?.pathname || '/'
  const initialMenuKey = location.pathname.split('').splice(1).join('')
  const [selectedKey, setSelectedKey] = useState<string>(checkMenuKey(initialMenuKey) ? initialMenuKey : '')

  const handleLogOut = () => {
    dispatch(logoutRequest());
    navigate('/', { replace: true })
  }

  const handleHomeClick = () => {
    setSelectedKey('')
  }

  const handleMenuClick = (e: { key: string }) => {
    setSelectedKey(e.key);
  }

  useEffect(() => {
    if (!isAuth || !checkMenuKey(initialMenuKey)) {
      setSelectedKey('')
    }
  }, [initialMenuKey, isAuth])
  return (
    <Layout style={styles.layout}>
      <Header style={styles.header}>
        <NavLink to={'/'} style={styles.logoLink} onClick={handleHomeClick}>
          <HomeOutlined style={styles.logoIcon} />
        </NavLink>
        {
          isAuth
            ? <Button type='default' onClick={handleLogOut}>Log Out</Button>
            : <Link
              to={'/login'}
              state={{ from: fromPage }}
              style={styles.loginLink}
              onClick={handleHomeClick}
            >
              <Button type='default' >Log In</Button>
            </Link>
        }
      </Header>
      <Layout>
        {
          isAuth
            ? <AppSidebar handleMenuClick={handleMenuClick} selectedKey={selectedKey} />
            : ''
        }
        <Layout>
          <Content style={styles.content}>
            <Outlet />
          </Content>
          <Footer style={styles.footer}>
            ©2024 Created by Ustyantcev Ivan
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}

const styles: StyleSheet = {
  layout: {
    minHeight: '100vh'
  },
  header: {
    display: 'flex',
    columnGap: '10px',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center'
  },
  logoLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoIcon: {
    color: '#fff',
    fontSize: '30px'
  },
  loginLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    padding: '0 50px',
    height: '100%'
  },
  footer: {
    textAlign: 'center'
  }
}