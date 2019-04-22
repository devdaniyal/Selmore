import React, { Component } from 'react';
import './billboardDetail.css';
import {
    Form, Input, Icon, Button,
} from 'antd';
// import { Scrollbars } from 'react-custom-scrollbars';
import { Spring } from 'react-spring';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import BillboardFields from './billboardFields';

let id = 0;


class BillboradForm extends Component {
    constructor() {
        super()
    }

    remove = (k) => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }
        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    }

    add = () => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(id++);
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys: nextKeys,
        });
        // this.props.toggle()
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { keys, names } = values;
                console.log('Received values of form: ', values);
                console.log('Merged values:', keys.map(key => names[key]));
            }
        });
    }


    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;
        getFieldDecorator('keys', { initialValue: [] });
        const keys = getFieldValue('keys');
        const formItems = keys.map((k, index) => (
            <div className='formDiv'>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>


                    <Form.Item className='container text-center'
                        label={index === 0 ? 'BillBoard Detail' : ''}
                        required={false}
                        key={k}
                    >


                        {/* {getFieldDecorator(`names[${k}]`, {
                    validateTrigger: ['onChange', 'onBlur'],
                    rules: [{
                        required: true,
                        whitespace: true,
                        message: "Please enter billboard detail",
                    }],
                })( */}
                        <BillboardFields />
                        {/* )} */}
                        {keys.length > 1 ? (
                            <Icon
                                className="dynamic-delete-button"
                                type="minus-circle-o"
                                onClick={() => this.remove(k)}
                            />
                        ) : null}
                    </Form.Item>

                </ReactCSSTransitionGroup>
            </div>
        ));
        return (
            // <Spring
            //     from={{ opacity: 0 }}
            //     to={{ opacity: 1 }}
            //     config={{ delay: 1000, duration: 1000 }}
            // >
            //     {props => (
            // <Scrollbars style={{ width: 1200, height: 300 }} className='mainDive container text-center'>
            <div className='row'>
                <div className='mainDive container text-center'>
                    <Form onSubmit={this.handleSubmit}>
                        {formItems}
                        <Form.Item>
                            <Button type="dashed" onClick={this.add}>
                                <Icon type="plus-circle-o" />
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            // </Scrollbars>
            //     )}
            // </Spring>
        );

    }

}

const WrappedDynamicFieldSet = Form.create()(BillboradForm);
export default WrappedDynamicFieldSet;