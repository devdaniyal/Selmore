import React, { Component } from 'react';
import './billboardDetail.css';
import {
    Form, Input, Icon, Button, message, Upload, Modal, notification
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
            keyFor: [],
            noChooseFile: false,
            index: '',
            imgArr: [],
            checkConnection: false
        }
    }

    componentDidMount() {
        this.companyNames();
    }

    companyNames = async () => {
        let { companyName } = this.state;
        let response = await HttpUtils.get('getcompanyname');
        // console.log(response , 'response')
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
        let fileListRef = `fileList${index}`
        // console.log(fileListRef, 'handle change fileList')
        this.setState({ [fileListRef]: fileList, noChooseFile: true, index: index })
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
        this.setState({ keyFor: keys })
        form.setFieldsValue({
            keys: nextKeys,
        });
    }

    openNotification = () => {
        notification.open({
            message: 'Form Submit',
            description:
                'Your Form has been submit If you want more than refresh the page'
        });
    };

    handleSubmit(e) {
        const { index } = this.state;
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
                // this.openNotification();
                this.funcForUpload(values)
                this.props.form.resetFields()
                this.setState({
                    checkConnection: true
                })
            }
        });
    }

    async funcForUpload(values) {
        const { fileList, keyFor, index } = this.state;

        //merge multiple value of the field in one array
        let facing = [];
        let traffic = [];
        let longitude = [];
        let latitude = [];
        let size = [];
        let type = [];
        for (var i = 0; i <= index; i++) {
            for (var property in values) {
                if (property.indexOf(`facing${i}`) !== -1) {
                    facing.push(values[property])
                }
                if (property.indexOf(`traffic${i}`) !== -1) {
                    traffic.push(values[property])
                }
                if (property.indexOf(`longitude${i}`) !== -1) {
                    longitude.push(values[property])
                }
                if (property.indexOf(`latitude${i}`) !== -1) {
                    latitude.push(values[property])
                }
                if (property.indexOf(`size${i}`) !== -1) {
                    size.push(values[property])
                }
                if (property.indexOf(`type${i}`) !== -1) {
                    type.push(values[property])
                }
            }
        }

        //store properties in object
        let obj = {};
        obj.facing = facing;
        obj.type = type;
        obj.size = size;
        obj.latitude = latitude;
        obj.longitude = longitude;
        obj.traffic = traffic;

        let arr = [];
        for (var i = 0; i <= keyFor.length; i++) {
            let fileListRef = `fileList${i}`;
            // console.log(fileListRef)
            arr.push(this.state[fileListRef])
            // console.log(arr)
            arr = arr.filter(function (element) {
                return element !== undefined;
            });
            // console.log(arr);
            Promise.all(arr[i].map((val) => {
                return this.uploadFile(val).then((result) => {
                    return result.body.url
                })
            })).then((results) => {
                this.postData(values, results, obj)
            })
        }
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

    //-----------------cloudnary function end ------------------//

    async postData(values, response, obj) {

        //store imgs in array 
        const { imgArr } = this.state
        this.setState({
            imgArr: [...imgArr, response]
        })

        //add img array in the obj
        obj.billBoardImgs = this.state.imgArr;
        console.log(obj, 'obj')
    }

    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const { fileList, imgArr, checkConnection } = this.state;

        // console.log(this.state)
        const uploadButton = (
            <div className='text-center'>
                <Icon type="plus" />
                <div className="ant-upload-text ">Upload</div>
            </div>
        );
        const divStyle = {
            margin: '10px',
            // border: '2px solid black',
            fontSize: '16px'
        };

        { getFieldDecorator('keys', { initialValue: [keys] }) };
        const keys = getFieldValue('keys');
        const formItems = keys.map((k, index) => {
            let fileListRef = `fileList${index}`
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
                                            <div className="col-md-4 text-center">
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
                                                                fileList={this.state[fileListRef]}
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
                <div className='mainDive container'>
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="col-md-8">
                            <div className="form-group">
                                <label for="company"></label>
                                <Form.Item>
                                    <p>Company Name:</p>
                                    {getFieldDecorator('company', {
                                        rules: [{
                                            // defaultValue: option.initialValue,
                                            // initialValue: "company",
                                            required: true,
                                            message: 'Please enter your company name!',
                                        }],
                                    })(
                                        <Select
                                            options={this.state.companyName} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        {formItems}

                        <FormItem >
                            <Button type="dashed" onClick={this.addForm} className='btn btn-primary iconBtn'>
                                <Icon className='fa fa-plus' />
                            </Button>
                        </FormItem>
                        <div className="col-md-2 col-4">
                            <Form.Item>
                                <Button className="btn btn-primary btnapple"
                                    type="primary" htmlType="submit"
                                >Submit</Button>
                            </Form.Item>
                            {checkConnection ? <div style={divStyle}>
                                You have Submit the BillBoard Form
                            </div> : null}
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

const WrappedDynamicFieldSet = Form.create()(BillBoard);
export default WrappedDynamicFieldSet;