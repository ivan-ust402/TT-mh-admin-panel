import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  routeTo: string;
  title: string;
}

export const ButtonAdd = ({title, routeTo}: Props) => {
  return (
    <Link to={`${routeTo}`}>
      <Button type='primary'>
        <PlusOutlined />
        {title}
      </Button>
    </Link>
  )
}