import React, { Component } from 'react';
import '../billboardDetail.css';
import {
    Form, Input, Icon, Button,
} from 'antd';
import BillBoardLocandImg from '../googleMap/billBoardLocandImg';

let id = 0;


class Addbtn extends Component {
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
    render() {

        const { getFieldDecorator, getFieldValue } = this.props.form;
        getFieldDecorator('keys', { initialValue: [] });
        const keys = getFieldValue('keys');
        const formItems = keys.map((k, index) => (
            <div className='formDiv'>
                    <Form.Item
                    label={index === 0 ? 'Add billborad Loc & Img' : ''}
                    required={false}
                    key={k}
                >
                    <BillBoardLocandImg getLatAndLong = {this.props.getLatAndLong}
                    // handleSubmit={this.props.handleSubmit}
                    />
                    {keys.length > 1 ? (
                        <Icon
                            className="dynamic-delete-button btn btn-danger iconBtn fa fa-minus"
                            onClick={() => this.remove(k)}
                        />
                    ) : null}
                </Form.Item>
            </div>
            // </Center>

        ));

        return (
            <div className='row'>
                <div className='mainDive container text-center'>
                    <Form onSubmit={this.handleSubmit}>
                        {formItems}
                        <Form.Item>
                            <Button type="dashed" onClick={this.add} className='btn btn-primary iconBtn'>
                                <Icon className='fa fa-plus' />
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )

    }

}

const WrappedDynamicFieldSet = Form.create()(Addbtn);
export default WrappedDynamicFieldSet;