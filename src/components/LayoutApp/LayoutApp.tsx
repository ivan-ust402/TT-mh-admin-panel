import React from 'react'
import { Layout, Menu } from 'antd'
import { NavLink, Outlet } from 'react-router-dom'
import styles from './layout.module.scss'
import { SignatureOutlined } from '@ant-design/icons'

const { Header, Footer, Content } = Layout

type Props = {}

export const LayoutApp = (props: Props) => {
  return (
    <Layout 
      className={styles.layout}
    >
      <Header
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'space-between'
        }}
      >
        <NavLink to={'/'} >
        <SignatureOutlined 
          style={{
            color: '#fff',
            fontSize: '30px'
          }}
        />
        </NavLink>
      </Header>
      <Content style={{ padding: '0 50px', height: '100%', }}>
        <div className="content">
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ©2024 Created by Ustyantcev Ivan
      </Footer>
    </Layout>
  )
}