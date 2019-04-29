import React, { Component } from 'react';
import {
    Form, Input, Icon, Button, Upload, Modal
} from 'antd';
import '../billboardDetail.css';
import superagent from "superagent";
import sha1 from "sha1";

const FormItem = Form.Item;

class BillBoardLocandImg extends Component {
    constructor() {
        super()
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [],
            imageList: [],
            noChooseFile: false,
        }
    }
    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    deleteImage(e) {
        let { imageList } = this.state;
        imageList = imageList.filter((elem) => elem !== e)
        this.setState({ imageList: imageList })
    }

    handleChange = ({ fileList }) => {
        this.setState({ fileList, noChooseFile: true })
    }
    validateNumber(rule, value, callback) {
        if (isNaN(value)) {
            callback('Please type Numbers');
        } else {
            callback()
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.funcForUpload(values)
            }
        });
    }
    async funcForUpload(values) {
        const { fileList } = this.state;
        console.log(fileList, 'file list');
        console.log(values, 'handle submit');
        Promise.all(fileList.map((val) => {
            return this.uploadFile(val).then((result) => {
                return result.body.url
            })
        })).then((results) => {
            this.postData(values, results)
        })
    }
    //--------------function for cloudnary url ---------------
    uploadFile = (files) => {
        const image = files.originFileObj
        const cloudName = 'krlcreative'
        const url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload'
        const timestamp = Date.now() / 1000
        const uploadPreset = 'ml_default'
        const paramsStr = 'timestamp=' + timestamp + '&upload_preset=' + uploadPreset + 'xsor_68i83r9eBbTeZ-IF0F4p8A'
        const signature = sha1(paramsStr)
        const params = {
            'api_key': '993541634543157',
            'timestamp': timestamp,
            'upload_preset': uploadPreset,
            'signature': signature
        }
        return new Promise((res, rej) => {
            let uploadRequest = superagent.post(url)
            uploadRequest.attach('file', image)
            Object.keys(params).forEach((key) => {
                uploadRequest.field(key, params[key])
            })

            uploadRequest.end((err, resp) => {
                err ? rej(err) : res(resp);
            })
        })
    }

    //-----------------cloudnary function end ------------------

    async postData(values, response) {
        let lat = values.latitude;
        let long = values.longitude

        console.log(values, "values");
        this.props.getLatAndLong(lat , long)
        console.log(response, "response");

    }

    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const { getFieldDecorator } = this.props.form;

        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );


        const uploadedImages = (
            <div style={{ display: 'flex' }}>
                {this.state.imageList.map((elem) => {
                    return (
                        <div className='insideDiv'>
                            <a>
                                <img alt='img1' src={elem} />
                                <span>
                                    <a><Icon title='Preview file' onClick={() =>
                                        this.handlePreview(elem)} type="eye" theme="outlined"
                                        style={{
                                            zIndex: 10, transition: 'all .3s', fontSize: '16px',
                                            width: '30px', color: 'rgba(255, 255, 255, 0.85)', margin: '0 4px'
                                        }} /></a>
                                    <Icon title='Remove file' type='delete'
                                        onClick={this.deleteImage.bind(this, elem)}
                                        style={{
                                            zIndex: 10, transition: 'all .3s', fontSize: '16px',
                                            width: '30px', color: 'rgba(255, 255, 255, 0.85)', margin: '0 4px'
                                        }} />
                                </span>
                            </a>
                        </div>
                    )
                })}
            </div>
        )
        const formItemLayout = {
            labelCol: {
                md: { span: 6 },
                xs: { span: 24 },
                sm: { span: 5 },
            },
            wrapperCol: {
                md: { span: 12 },
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <div className="col-md-4">
                        <div className="form-group location">
                            <label for="latitude"></label>
                            <Form.Item>
                            {getFieldDecorator('latitude', {
                                  rules: [{
                                    required: true,
                                    message: 'Please enter latitude',
                                    whitespace: true
                                  },
                                  { validator: this.validateNumber.bind(this) }]
                                })(
                                  <Input
                                  type="text"
                                        className={'form-control '}
                                        id={"latitude"}
                                        name="latitude"
                                        placeholder="Enter latitude"
                                  />
                                )}
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group location">
                            <label for="longitude"></label>
                            <Form.Item>
                            {getFieldDecorator('longitude', {
                                  rules: [{
                                    required: true,
                                    message: 'Please enter longitude',
                                    whitespace: true
                                  },
                                  { validator: this.validateNumber.bind(this) }]
                                })(
                                  <Input
                                  type="text"
                                        className={'form-control '}
                                        id={"longitude"}
                                        name="longitude"
                                        placeholder="Enter longitude"
                                  />
                                )}
                            </Form.Item>
                        </div>
                    </div>
                    <div className="vitalbox">
                        <div className="row" style={{ padding: "0px", marginTop: "20px" }}>
                            <div className="col-md-4">
                                <FormItem
                                    {...formItemLayout}
                                    label="Images"
                                >
                                    {getFieldDecorator('images', {
                                        rules: [{
                                            required: true,
                                            message: 'Please upload your Images!',
                                            whitespace: true
                                        }],
                                    })(
                                        <div className="clearfix">
                                            <Upload
                                                action="//jsonplaceholder.typicode.com/posts/"
                                                listType="picture-card"
                                                fileList={fileList}
                                                onPreview={this.handlePreview}
                                                onChange={this.handleChange}
                                            >
                                                {/* {this.state.imageList.length + fileList.length >= 3 ? null : uploadButton} */}
                                                {fileList.length >= 6 ? null : uploadButton}
                                            </Upload>
                                            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                            </Modal>
                                            {uploadedImages}
                                        </div>
                                    )}
                                </FormItem>
                            </div>
                            {this.state.noChooseFile ?
                                null
                                : <div className="col-md-6">
                                    <h6 style={{ marginTop: "10px", marginLeft: "4px" }}> No File Chosen</h6>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="col-md-2 col-4">
                        <Form.Item>
                            <Button className="btn btn-primary btnapple"
                                type="primary" htmlType="submit"
                            >Submit</Button>
                        </Form.Item>
                    </div>
                </Form>
            </div >
        )

    }

}

const WrappedDynamicFieldSet = Form.create()(BillBoardLocandImg);
export default WrappedDynamicFieldSet;