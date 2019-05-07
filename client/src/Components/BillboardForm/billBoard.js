import React, { Component } from 'react';
import './billboardDetail.css';
import {
    Form, Input, Icon, Button, message, Upload, Modal,
} from 'antd';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Select from 'react-select';
import './billboardDetail.css';
import { HttpUtils } from '../../Services/HttpUtils';
import superagent from "superagent";
import sha1 from "sha1";

let id = 0;
const FormItem = Form.Item;

class BillBoard extends Component {
    constructor() {
        super()
        this.state = {
            companyName: [],
            fileList: [],
            previewImage: '',
            previewVisible: false,
            keyFor: []
        }
    }

    componentDidMount() {
        this.companyNames();
    }

    companyNames = async () => {
        let { companyName } = this.state;
        let response = await HttpUtils.get('getcompanyname');
        this.setState({
            companyName: response.content
        })
        companyName = this.state.companyName.map((elem, i) => {
            return { label: elem, value: elem };
        })
        this.setState({ companyName });
    }

    validateNumber = (rule, value, callback) => {
        if (isNaN(value)) {
            callback('Please type Numbers');
        } else {
            callback()
        }
    }


    handleCancel = () => this.setState({ previewVisible: false })


    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChanges(index, { fileList }) {
        let khuchB = `fileList${index}`
        console.log(khuchB, 'handle change fileList')
        this.setState({ [khuchB]: fileList })
    }

    removeForm = (k) => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }
        // can use data-binding to set
        this.setState({ keyFor: keys.filter(key => key !== k) })
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    }

    addForm = () => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(id++);
        // can use data-binding to set
        // important! notify form to detect changes
        // console.log(nextKeys, 'llllllllllllllllllllllllll')
        this.setState({ keyFor: nextKeys })
        form.setFieldsValue({
            keys: nextKeys,
        });
    }


    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        const { fileList } = this.state;
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.funcForUpload(values)
            }
        });
    }

    async funcForUpload(values) {
        const { fileList, keyFor } = this.state;
        let arr = [];
        for (var i = 0; i <= keyFor.length; i++) {
            let khuchB = `fileList${i}`;
            // console.log(khuchB)
            arr.push(this.state[khuchB])
            // console.log(arr, '00000000000000000')
            // var data = [42, 21, undefined, 50, 40, undefined, 9];

            arr = arr.filter(function (element) {
                return element !== undefined;
            });
            console.log(arr);
            // Promise.all(arr[i].map((val, i) => {
            //     return this.uploadFile(val).then((result) => {
            //         return result.body.url
            //     })
            // })).then((results) => {
            //     this.postData(values, results)
            // })
        }
    }
    //--------------function for cloudnary url ---------------
    uploadFile = (files, i) => {
        const image = files.originFileObj
        // const image = files
        console.log(image)
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

    //-----------------cloudnary function end ------------------//

    async postData(values, response) {
        console.log(values, "values");
        console.log(response, "response");
    }

    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const { fileList } = this.state;
        // console.log(this.state.keyFor.length, 'ttttttttttttttttttt')

        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        { getFieldDecorator('keys', { initialValue: [keys] }) };
        const keys = getFieldValue('keys');
        const formItems = keys.map((k, index) => {
            let khuchB = `fileList${index}`
            return (
                <div className='formDiv'>
                    {/* animation of page */}
                    <ReactCSSTransitionGroup transitionName="fade"
                        transitionAppear={true} transitionAppearTimeout={500}
                        transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                        <Form.Item
                            label={index === 0 ? 'BillBoard Detail' : ''}
                            required={false}
                            key={k}
                        >
                            <div className='mainDive'>
                                <div >
                                    <div className="col-md-8">
                                        <div className="form-group">
                                            <label for="type"></label>
                                            <Form.Item>
                                                {getFieldDecorator(`type${index}`, {
                                                    rules: [{
                                                        required: true,
                                                        message: 'Please enter a type',
                                                        whitespace: true
                                                    }],
                                                })(
                                                    <Input
                                                        type="text"
                                                        className={'form-control backcolor'}
                                                        id={"type"}
                                                        name="type"
                                                        placeholder="Enter Billboard Type"
                                                    />
                                                )}
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="form-group">
                                            <label for="facing"></label>
                                            <Form.Item>
                                                {getFieldDecorator(`facing${index}`, {
                                                    rules: [{
                                                        required: true,
                                                        message: 'Please enter a facing',
                                                        whitespace: true
                                                    }],
                                                })(
                                                    <Input
                                                        type="text"
                                                        className={'form-control backcolor'}
                                                        id={"facing"}
                                                        name="facing"
                                                        placeholder="Enter billboard facing"
                                                    />
                                                )}
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="form-group">
                                            <label for="size"></label>
                                            <Form.Item>
                                                {getFieldDecorator(`size${index}`, {
                                                    rules: [{
                                                        required: true,
                                                        message: 'Please enter a size',
                                                        whitespace: true
                                                    }],
                                                })(
                                                    <Input
                                                        type="text"
                                                        className={'form-control backcolor'}
                                                        id={"size"}
                                                        name="size"
                                                        placeholder="Enter billboard size"
                                                    />
                                                )}
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group location">
                                            <label for="latitude"></label>
                                            <Form.Item>
                                                <br />
                                                {getFieldDecorator(`latitude${index}`, {
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
                                                        id="latitude"
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
                                                {getFieldDecorator(`longitude${index}`, {
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
                                                        id="longitude"
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
                                                    label="Images"
                                                >
                                                    {getFieldDecorator(`images${index}`, {
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
                                                                fileList={this.state[khuchB]}
                                                                onPreview={this.handlePreview}
                                                                onChange={this.handleChanges.bind(this, index)}
                                                            >
                                                                {fileList.length >= 3 ? null : uploadButton}
                                                            </Upload>
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
                                    <div className="col-md-8">
                                        <div className="form-group">
                                            <label for="traffic"></label>
                                            <Form.Item>
                                                {getFieldDecorator(`traffic${index}`, {
                                                    rules: [{
                                                        required: true,
                                                        message: 'Please enter a type',
                                                        whitespace: true
                                                    }],
                                                })(
                                                    <Input
                                                        type="text"
                                                        className={'form-control backcolor'}
                                                        id={"traffic"}
                                                        name="traffic"
                                                        placeholder="Enter traffic count"
                                                    />
                                                )}
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {keys.length > 1 ? (
                                <Icon
                                    className="dynamic-delete-button btn btn-danger iconBtn fa fa-minus"
                                    onClick={() => this.removeForm(k)}
                                />
                            ) : null}
                        </Form.Item>
                    </ReactCSSTransitionGroup>
                </div>
            )
        });

        return (
            <div className='row'>
                <div className='mainDive container text-center'>
                    <Form onSubmit={this.handleSubmit}>
                        <div className="col-md-8">
                            <div className="form-group">
                                <label for="company"></label>
                                <Form.Item>
                                    {getFieldDecorator('company', {
                                        rules: [{
                                            required: true,
                                            message: 'Please enter your company name!',
                                        }],
                                    })(
                                        <Select options={this.state.companyName} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        {formItems}
                        <Form.Item>
                            <Button type="dashed" onClick={this.addForm} className='btn btn-primary iconBtn'>
                                <Icon className='fa fa-plus' />
                            </Button>
                        </Form.Item>
                        <div className="col-md-2 col-4">
                            <Form.Item>
                                <Button className="btn btn-primary btnapple"
                                    type="primary" htmlType="submit"
                                >Submit</Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

const WrappedDynamicFieldSet = Form.create()(BillBoard);
export default WrappedDynamicFieldSet;