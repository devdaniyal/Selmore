import React, { Component } from 'react';
import './billboardDetail.css';
import {
    Form, Input, Icon, Button,
} from 'antd';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import BillboardFields from './billboardFields';
//import Center from 'react-center';

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
            // <Center>
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
                            <BillboardFields />
                            {keys.length > 1 ? (
                                <Icon
                                    className="dynamic-delete-button btn btn-danger iconBtn fa fa-minus"
                                    onClick={() => this.remove(k)}
                                />
                            ) : null}
                        </Form.Item>
                    </ReactCSSTransitionGroup>
                </div>
            // </Center>

        ));
        return (
            //     {props => (
            // <Scrollbars style={{ width: 1200, height: 300 }} className='mainDive container text-center'>
            <div className='row'>
                <div className='mainDive container text-center'>
                    <Form onSubmit={this.handleSubmit}>
                        {formItems}
                        <Form.Item>
                            <Button type="dashed" onClick={this.add} className='btn btn-primary iconBtn'>
                                {/* <images src={plus} alt="plus"/> */}
                                <Icon className='fa fa-plus' />
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            // </Scrollbars>
        );
    }
}

const WrappedDynamicFieldSet = Form.create()(BillboradForm);
export default WrappedDynamicFieldSet;
