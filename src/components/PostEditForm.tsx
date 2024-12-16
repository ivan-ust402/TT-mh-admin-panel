import { PlusOutlined } from '@ant-design/icons'
import { Button, Form, Input, Select, Upload } from 'antd'

import { StyleSheet } from 'src/utils'
import { PostDetails } from 'src/api/postApi'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'src/hooks/redux-hooks'
import { useEffect } from 'react'
import { getTagsRequest } from 'src/store/tags/tagsActions'
import { getAuthorsRequest } from 'src/store/authors/authorsActions'

interface Props {
    initialValues?: PostDetails,
    onFinish: (values: PostEditFormValues) => void
}

export interface PostEditFormValues {
    authorId: number,
    code: string,
    id: number,
    previewPicture: File,
    tagIds: number[]
    text: string
    title: string
}
const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 }
}

const validateMessages = {
    required: '${label} is required!'
}


export const PostEditForm = ({ onFinish, initialValues }: Props) => {
    const dispatch = useDispatch()

    const { authors } = useAppSelector(state => state.authors)
    const { tags } = useAppSelector(state => state.tags)

    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
    };

    useEffect(() => {
        dispatch(getTagsRequest())
        dispatch(getAuthorsRequest())
    }, [dispatch])
    console.log(initialValues)

    return (
        <Form {...layout} layout='vertical' name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} initialValues={initialValues}>
            {/* 
            export interface PostDetails {
  author: {
    avatar: {
      id: number,
      name: string,
      url: string
    },
    fullName: string,
    id: number
  },
  code: string,
  createdAt: string,
  id: number,
  previewPicture: {
    id: number,
    name: string,
    url: string
  },
  tags: [
    {
      code: string,
      id: number,
      name: string
    }
  ],
  text: string,
  title: string,
  updatedAt: string
}
            */}
            <Form.Item name={'title'} label="Title:" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name={'code'} label="Code:" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name={'authorId'} label="Author:" rules={[{ required: true }]}>
                <Select defaultValue={initialValues?.author.fullName}>
                    {authors?.map(author => (
                        <Select.Option value={author.id} key={author.id}>{author.name} {author.lastName}</Select.Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item name={'tagIds'} label="Tags:" rules={[{ required: true }]}>
                <Select
                    mode="multiple"
                    allowClear
                    style={styles.selectTags}
                    placeholder="Please select"
                    defaultValue={initialValues?.tags.map(tag => tag.name)}
                    onChange={handleChange}
                    options={tags?.map(tag => {
                        return {
                            label: tag.name,
                            value: tag.id
                        }
                    })}
                />
            </Form.Item>
            <Form.Item name={'text'} label="Text:" rules={[{ required: true }]}>
                <Input.TextArea />
            </Form.Item>
            <Form.Item name={'previewPicture'} label="Picture:" rules={[{ required: true }]}>
                <Upload
                    action="/upload.do"
                    listType="picture-card"
                    maxCount={1}
                    fileList={[]}
                >   
                    <div>
                        <PlusOutlined />
                        <div style={styles.uploadLabel}>Upload</div>
                    </div>
                </Upload>
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

const styles: StyleSheet = {
    uploadLabel: {
        marginTop: 8
    },
    selectTags: {
        width: '100%'
    }
}