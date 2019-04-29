import React, { Component } from 'react';
import {
    Form, Input, Button,
} from 'antd';
import Select from 'react-select';
import Addbtn from './googleMap/addbtn'
import './billboardDetail.css';

import MapContainer from './googleMap/googleMapLocation';

const techCompanies = [
    { label: "Apple", value: 1 },
    { label: "Facebook", value: 2 },
    { label: "Netflix", value: 3 },
    { label: "Tesla", value: 4 },
    { label: "Amazon", value: 5 },
    { label: "Alphabet", value: 6 },
];

// const Option = Select.Option;


function handleChange(value) {
    console.log(`selected ${value}`);
}

function handleBlur() {
    console.log('blur');
}

function handleFocus() {
    console.log('focus');
}


class BillboardFields extends Component {
    constructor() {
        super()
        this.state = {
            readOnly: '',
            toDoNotes: [],
            latitude: '',
            longitude: ''
        }
    }

    // uses for set the lat & long
    // componentDidMount() {
    //     //render a funtion for position
    //     this.setPosition();
    // }

    // setPosition() {
    //     //get latitude & longitude
    //     let lat = this.props.latitude
    //     let long = this.props.longitude
    //     navigator.geolocation.getCurrentPosition(position => {
    //         this.setState({
    //             // coords:
    //             // {
    //                 latitude: position.coords.latitude,
    //                 longitude: position.coords.longitude
    //                 // latitude: lat,
    //                 // longitude: long
    //             // }
    //         });
    //         //   this.props.getCoords(this.state.coords)
    //         // console.log('initialset', this.state.coords);
    //     })
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                // values.coords

                //     console.log(coords
                //     )
                //     values.push(coords);
                //     console.log(values, 'updated object')
                // this.addNote(values)
            }
        });
    }
    // addNote = (values) => {
    //     let coords = JSON.parse(localStorage.getItem('coords'));
    //     this.setState({ toDoNotes: [...values, coords] })
    //     console.log(this.state.toDoNotes);
    // }


    getLatAndLong = (lat, lang) => {
        console.log("props fun run")
        console.log(lat, 'lat')
        console.log(lang, 'lat')
        this.setState({
            latitude: lat,
            longitude: lang
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='mainDive'>
                <Form onSubmit={this.handleSubmit} >
                    <div >
                        <div className="col-md-8">
                            <div className="form-group">
                                <label for="company"></label>
                                <Form.Item>
                                    {getFieldDecorator('select', {
                                        rules: [{
                                            required: true,
                                            message: 'Please enter your company name!',
                                            // whitespace: true
                                        }],
                                    })(
                                        // <Input
                                        //     type="text"
                                        //     className={'form-control backcolor'}
                                        //     id={"company"}
                                        //     name="company"
                                        //     placeholder="Enter Advertising Company"
                                        // />
                                        // <Select
                                        // showSearch
                                        //     style={{ width: 200 }}
                                        //     placeholder="Select a person"
                                        //     optionFilterProp="children"
                                        //     onChange={handleChange}
                                        //     onFocus={handleFocus}
                                        //     onBlur={handleBlur}
                                        //     // filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                        //     >
                                        //     <Option value="jack">Jack</Option>
                                        //     <Option value="lucy">Lucy</Option>
                                        //     <Option value="tom">Tom</Option>
                                        // </Select>,
                                        <Select options={techCompanies} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        {/* <div className="col-md-8">
                        </div> */}
                        <div className="col-md-8">
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
                        <div className="col-md-8">
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
                        <div className="col-md-8">
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
                        <div className="col-md-8">
                            <div className="form-group">
                                <label for="location"></label>
                                <Form.Item>
                                    {/* render google map */}
                                    {getFieldDecorator('location', {
                                        rules: [{
                                            required: true,
                                            message: 'Please enter a location',
                                            whitespace: true
                                        }],
                                    })(
                                        <Input
                                            type="text"
                                            className={'form-control backcolor'}
                                            id={"location"}
                                            name="location"
                                            placeholder="Enter billboard location"
                                        />
                                        // <MapContainer 
                                        // renderInput ={props => <Input disabled={this.state.readOnly} {...props}/>}
                                        // />
                                    )}
                                    <Addbtn getLatAndLong={this.getLatAndLong} />
                                    {/* <MapContainer latitude= {this.state.latitude} longitude={this.state.longitude}/> */}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="col-md-8">
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
                                <Form.Item>
                                    <Button className="btn btn-primary btnapple"
                                        type="primary" htmlType="submit"
                                    >Submit</Button>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        )
    }

}
const WrappedDynamicFieldSet = Form.create()(BillboardFields);
export default WrappedDynamicFieldSet;