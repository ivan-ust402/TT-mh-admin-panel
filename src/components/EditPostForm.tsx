import { PlusOutlined } from '@ant-design/icons'
import { Button, Form, Input, Select, Upload } from 'antd'
import { Author, Tag } from 'src/pages'
import { StyleSheet } from 'src/utils'

interface Props {
    initialValues?: EditPostFormValues,
    onFinish: (values: EditPostFormValues) => void
}

export interface EditPostFormValues {
    authorId: number,
    code: string,
    previewPicture: string,
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

const authors: Author[] = [
    {
        id: 2,
        name: 'Иван',
        lastName: 'Иванов',
        secondName: 'Иванович',
        avatar: {
            id: 2,
            name: '4176_1191689844.gif',
            url: 'http://static-test.machineheads.ru/upload/author-avatars/a45/41761191689844.gif'
        },
        updatedAt: '2021-05-27T08:25:58+03:00',
        createdAt: '2021-05-27T08:25:58+03:00'
    },
    {
        id: 5,
        name: 'Пётр',
        lastName: 'Петров',
        secondName: 'Петрович',
        avatar: {
            id: 104,
            name: 'linux.jpg',
            url: 'http://static-test.machineheads.ru/upload/author-avatars/fab/linux.jpg'
        },
        updatedAt: '2023-03-07T07:52:50+03:00',
        createdAt: '2023-03-07T07:51:46+03:00'
    },
    {
        id: 1,
        name: 'Сергей',
        lastName: 'Сергеев',
        secondName: 'Сергеевич',
        avatar: {
            id: 1,
            name: '4176_1191689844.gif',
            url: 'http://static-test.machineheads.ru/upload/author-avatars/781/41761191689844.gif'
        },
        updatedAt: '2021-05-27T08:25:23+03:00',
        createdAt: '2021-05-27T08:25:23+03:00'
    }
]

const tags: Tag[] = [
    {
        id: 4,
        name: 'Басня',
        code: 'basna',
        sort: null,
        updatedAt: '2021-05-27T08:26:37+03:00',
        createdAt: '2021-05-27T08:26:37+03:00'
    },
    {
        id: 3,
        name: 'Песня',
        code: 'pesna',
        sort: null,
        updatedAt: '2021-05-27T08:26:33+03:00',
        createdAt: '2021-05-27T08:26:33+03:00'
    },
    {
        id: 2,
        name: 'Проза',
        code: 'proza',
        sort: null,
        updatedAt: '2021-05-27T08:26:25+03:00',
        createdAt: '2021-05-27T08:26:25+03:00'
    },
    {
        id: 5,
        name: 'Смешные',
        code: 'smesnye',
        sort: null,
        updatedAt: '2021-05-27T08:26:43+03:00',
        createdAt: '2021-05-27T08:26:43+03:00'
    },
    {
        id: 1,
        name: 'Стихи',
        code: 'stihi',
        sort: null,
        updatedAt: '2021-05-27T08:26:20+03:00',
        createdAt: '2021-05-27T08:26:20+03:00'
    },
    {
        id: 6,
        name: 'Страшные',
        code: 'strasnye',
        sort: null,
        updatedAt: '2021-05-27T08:26:57+03:00',
        createdAt: '2021-05-27T08:26:57+03:00'
}]


export const EditPostForm = ({ onFinish, initialValues }: Props) => {
    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
    };

    return (
        <Form {...layout} layout='vertical' name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} initialValues={initialValues}>
            <Form.Item name={'code'} label="Code:" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name={'title'} label="Title:" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name={'authorId'} label="Author:" rules={[{ required: true }]}>
                <Select>
                    {authors.map(author => (
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
                    // defaultValue={[]}
                    onChange={handleChange}
                    options={tags.map(tag => {
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