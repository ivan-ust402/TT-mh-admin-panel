import React from 'react'
import { Layout, Menu } from 'antd'
import { Outlet } from 'react-router-dom'

const { Header, Footer, Content } = Layout

type Props = {}

export const LayoutApp = (props: Props) => {
  return (
    <Layout 
      className="layout"
      style={{
        height: '100vh'
      }}  
    >
      <Header
        
      >
        <div className='logo' />
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['1']}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            }
          })}
        />
      </Header>
      <Content style={{ padding: '0 50px', height: '100%', }}>
        <div className="content">
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>For Machineheads ©2024 Frontend created by Ustyantcev Ivan</Footer>
    </Layout>
  )
}