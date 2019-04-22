import React, { Component } from 'react';

import {
    Form, Input, Icon, Button,
} from 'antd';
import BillboardFields from './billboardFields';
// import GoogleMap from 'react-google-maps'
import MapContainer from './googleMap/googleMapLocation'

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
            <Form.Item
                label={index === 0 ? 'BillBoard Detail' : ''}
                required={false}
                key={k}
            >
                {getFieldDecorator(`names[${k}]`, {
                    validateTrigger: ['onChange', 'onBlur'],
                    rules: [{
                        required: true,
                        whitespace: true,
                        message: "Please enter billboard detail",
                    }],
                })(
                    <BillboardFields />
                )}
                {keys.length > 1 ? (
                    <Icon
                        className="dynamic-delete-button"
                        type="minus-circle-o"
                        onClick={() => this.remove(k)}
                    />
                ) : null}
            </Form.Item>
        ));
        return (
            <div className='mainDive'>
                <Form onSubmit={this.handleSubmit}>
                    {formItems}
                    <Form.Item>
                        <Button type="dashed" onClick={this.add}>
                            <Icon type="plus" />
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        );

    }

}

const WrappedDynamicFieldSet = Form.create()(BillboradForm);
export default WrappedDynamicFieldSet;


// import MapContainer from './googleMapLocation'

// class BillboradForm extends Component {
//     render() {
//         return (
//                 <MapContainer />
//             )
//         }
// }
// export default BillboradForm;