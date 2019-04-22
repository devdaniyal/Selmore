import React, { Component } from 'react';
import {
    Form, Input, Button
} from 'antd';
import './billboardDetail.css';

import MapContainer from './googleMap/googleMapLocation';


class BillboardFields extends Component {
    constructor() {
        super()
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return (
            <div className='mainDive'>

                <Form onSubmit={this.handleSubmit}>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label for="company"></label>
                            <Form.Item>
                                {getFieldDecorator('companyName', {
                                    rules: [{
                                        required: true,
                                        message: 'Please enter your company name!',
                                        whitespace: true
                                    }],
                                })(
                                    <Input
                                        type="text"
                                        className={'form-control backcolor'}
                                        id={"company"}
                                        name="company"
                                        placeholder="Enter Advertising Company"
                                    />
                                )}
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label for="type"></label>
                            <Form.Item>
                                {getFieldDecorator('type', {
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

                    <div className="col-md-4">
                        <div className="form-group">
                            <label for="facing"></label>
                            <Form.Item>
                                {getFieldDecorator('facing', {
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
                    <div className="col-md-4">
                        <div className="form-group">
                            <label for="size"></label>
                            <Form.Item>
                                {getFieldDecorator('size', {
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
                        <div className="form-group">
                            <label for="location"></label>
                            <Form.Item>
                                {getFieldDecorator('location', {
                                    rules: [{
                                        required: true,
                                        message: 'Please enter a location',
                                        whitespace: true
                                    }],
                                })(
                                    // <Input
                                    //     type="text"
                                    //     className={'form-control backcolor'}
                                    //     id={"location"}
                                    //     name="location"
                                    //     placeholder="Enter billboard location"
                                    // />
                                    <MapContainer />
                                )}
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label for="traffic"></label>
                            <Form.Item>
                                {getFieldDecorator('traffic', {
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
                        <div className="col-md-2 col-4">
                            <Form.Item {...tailFormItemLayout}>
                                <Button className="btn btn-primary btnapple"
                                    type="primary" htmlType="submit"
                                >Submit</Button>
                            </Form.Item>
                        </div>
                    </div>
                </Form>
            </div>
        )
    }

}
const WrappedDynamicFieldSet = Form.create()(BillboardFields);
export default WrappedDynamicFieldSet;