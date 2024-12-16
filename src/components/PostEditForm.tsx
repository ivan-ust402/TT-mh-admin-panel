import { PlusOutlined } from '@ant-design/icons'
import { Button, Form, GetProp, Image, Input, Select, Upload, UploadFile, UploadProps } from 'antd'

import { StyleSheet } from 'src/utils'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'src/hooks/redux-hooks'
import { useEffect, useMemo, useState } from 'react'
import { getTagsRequest } from 'src/store/tags/tagsActions'
import { getAuthorsRequest } from 'src/store/authors/authorsActions'
import { UploadChangeParam } from 'antd/es/upload'

interface Props {
    initialValues?: PostEditFormValues,
    isEdit?: boolean,
    onFinish: (values: PostEditFormValues) => void
}

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

export interface PostEditFormValues {
    authorId: number,
    code: string,
    previewPicture: UploadChangeParam | string,
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

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

const CustomUpload = ({ preview, fileList, value, ...props }: { fileList: UploadFile[], preview: JSX.Element, value?: string } & UploadProps) => {
    return (
        <>
            {typeof value === 'string' && <img src={value} style={styles.preview}/>}
            
            <Upload
                {...props}
            >
                {fileList.length >= 1 ? null : (
                    <div>
                        <PlusOutlined />
                        <div style={styles.uploadLabel}>Upload</div>
                    </div>
                )}
            </Upload>
            {preview}
        </>
    )
}

export const PostEditForm = ({ onFinish, initialValues, isEdit }: Props) => {
    const dispatch = useDispatch()    

    const { authors } = useAppSelector(state => state.authors)
    const { tags } = useAppSelector(state => state.tags)
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    useEffect(() => {
        dispatch(getTagsRequest())
        dispatch(getAuthorsRequest())
    }, [dispatch])

    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const requestPlaceholder = ({ onSuccess }: any) => {
        setTimeout(() => {
            onSuccess('ok');
        }, 0);
    };

    const handleImageChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
        setFileList(newFileList);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as FileType);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
    };

    const preview = useMemo(() => {        
        if (previewImage) {
            return (
                <Image
                    wrapperStyle={{ display: 'none' }}
                    preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) => !visible && setPreviewImage('')
                    }}
                    src={previewImage}
                />
            )
        } else {
            return <></>
        }
    }, [previewImage, previewOpen])
    

    return (
        <Form 
            {...layout} 
            layout='vertical' 
            name="nest-messages" 
            onFinish={onFinish} 
            validateMessages={validateMessages} 
            initialValues={initialValues}
        >
            <Form.Item name={'title'} label="Title:" rules={[{ required: !isEdit }]}>
                <Input />
            </Form.Item>
            <Form.Item name={'code'} label="Code:" rules={[{ required: !isEdit }]}>
                <Input />
            </Form.Item>
            <Form.Item name={'authorId'} label="Author:" rules={[{ required: !isEdit }]}>
                <Select>
                    {authors?.map(author => (
                        <Select.Option value={author.id} key={author.id}>{author.name} {author.lastName}</Select.Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item name={'tagIds'} label="Tags:" rules={[{ required: !isEdit }]}>
                <Select
                    mode="multiple"
                    allowClear
                    style={styles.selectTags}
                    placeholder="Please select"
                    onChange={handleChange}
                    options={tags?.map(tag => {
                        return {
                            label: tag.name,
                            value: tag.id
                        }
                    })}
                />
            </Form.Item>
            <Form.Item name={'text'} label="Text:" rules={[{ required: !isEdit }]}>
                <Input.TextArea />
            </Form.Item>
            <Form.Item name={'previewPicture'} label="Picture:" rules={[{ required: !isEdit }]} >
                <CustomUpload
                    listType="picture-card"
                    maxCount={1}
                    customRequest={requestPlaceholder}
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleImageChange}
                    preview={preview}
                />
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
    },
    preview: {
        width: 100,
        height: 100,
        objectFit: 'cover',
        marginBottom: 16
    }
}