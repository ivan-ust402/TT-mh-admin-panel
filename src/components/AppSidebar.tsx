import { LaptopOutlined, UserOutlined } from '@ant-design/icons'
import { Menu, MenuProps } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React from 'react'
import { NavLink } from 'react-router-dom'


const items2: MenuProps['items'] = [
  {
    key: 'profile',
    icon: React.createElement(UserOutlined),
    label: <NavLink to="profile">Profile</NavLink>
  },
  {
    key: 'manage',
    icon: React.createElement(LaptopOutlined
    ),
    label: 'Manage',
    children: [
      {
        key: 'posts',
        label: <NavLink to="posts">Posts</NavLink>
      },
      {
        key: 'authors',
        label: <NavLink to="authors">Authors</NavLink>
      },
      {
        key: 'tags',
        label: <NavLink to="tags">Tags</NavLink>
      }
    ]
  }
]

interface Props {
  handleMenuClick: (e: { key: string }) => void,
  selectedKey: string
}

export const AppSidebar = ({ selectedKey, handleMenuClick }: Props) => {
  return (
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
  )
}