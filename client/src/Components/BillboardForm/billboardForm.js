// import React, { Component } from 'react';
// import './billboardDetail.css';
// import {
//     Form, Input, Icon, Button, message, Upload, Modal,
// } from 'antd';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import BillboardFields from './billboardFields';
// import Select from 'react-select';
// import './billboardDetail.css';
// import { HttpUtils } from '../../Services/HttpUtils';

// function handleChange(value) {
//     console.log(`selected ${value}`);
// }

// function handleBlur() {
//     console.log('blur');
// }

// function handleFocus() {
//     console.log('focus');
// }

// let id = 0;
// var imgId = 0;
// const FormItem = Form.Item;


// class BillboradForm extends Component {
//     constructor() {
//         super()
//         this.state = {
//             readOnly: '',
//             toDoNotes: [],
//             latitude: '',
//             longitude: '',
//             companyName: [],
//             imgLoc: [{ showUpload: true, fileList: [] }],
//             fileList: [],
//             previewImage: '',
//             previewVisible: false,
//         }
//     }

//     componentDidMount() {
//         this.companyNames();
//     }


//     companyNames = async () => {
//         let { companyName } = this.state;
//         let response = await HttpUtils.get('getcompanyname');
//         let companies = response.content;
//         // console.log(response)
//         // console.log(response.content);
//         this.setState({
//             companyName: response.content
//         })
//         // console.log(companyName, 'companyName')

//         companyName = this.state.companyName.map((elem, i) => {
//             return { label: elem, value: elem };
//             //  console.log(elem , i)
//         })
//         // console.log(companyName)
//         this.setState({ companyName });
//     }

//     validateNumber(rule, value, callback) {
//         if (isNaN(value)) {
//             callback('Please type Numbers');
//         } else {
//             callback()
//         }
//     }

//     remove(k) {
//         const { imgLoc } = this.state;
//         if (imgLoc.length === 1) {
//             message.error("Must have atleast one animal");
//             return;
//         }
//         this.setState(prevState => ({
//             ...prevState,
//             imgLoc: imgLoc.filter(animal => animal !== k)
//         }));
//     }

//     add = () => {
//         const { imgLoc } = this.state;
//         const newAnimalImage = imgLoc.concat({ showUpload: true, fileList: [] });

//         this.setState(prevState => ({
//             ...prevState,
//             imgLoc: newAnimalImage
//         }));
//     }



//     beforeUploadAnimalImage(index) {
//         const { imgLoc } = this.state;

//         let newState = [...imgLoc];

//         newState[index] = { showUpload: false };

//         this.setState(prevState => ({
//             ...prevState,
//             imgLoc: [...newState]
//         }));
//     }


//     handleCancel = () => this.setState({ previewVisible: false })


//     handlePreview = (file) => {
//         this.setState({
//             previewImage: file.url || file.thumbUrl,
//             previewVisible: true,
//         });
//     }


//     handleChanges = ({ fileList }) => {
//         this.setState({ fileList, noChooseFile: true })
//     }


//     handleSubmit = (e) => {
//         e.preventDefault();
//         this.props.form.validateFieldsAndScroll((err, values) => {
//             if (!err) {
//                 console.log('Received values of form: ', values);
//                 // this.funcForUpload(values)

//             }
//         });
//     }

//     async funcForUpload(values) {
//         const { fileList } = this.state;
//         console.log(fileList, 'file list');
//         console.log(values, 'handle submit');
//         Promise.all(fileList.map((val) => {
//             return this.uploadFile(val).then((result) => {
//                 return result.body.url
//             })
//         })).then((results) => {
//             this.postData(values, results)
//         })
//     }
//     //--------------function for cloudnary url ---------------
//     // uploadFile = (files) => {
//     //     const image = files.originFileObj
//     //     const cloudName = 'krlcreative'
//     //     const url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload'
//     //     const timestamp = Date.now() / 1000
//     //     const uploadPreset = 'ml_default'
//     //     const paramsStr = 'timestamp=' + timestamp + '&upload_preset=' + uploadPreset + 'xsor_68i83r9eBbTeZ-IF0F4p8A'
//     //     const signature = sha1(paramsStr)
//     //     const params = {
//     //         'api_key': '993541634543157',
//     //         'timestamp': timestamp,
//     //         'upload_preset': uploadPreset,
//     //         'signature': signature
//     //     }
//     //     return new Promise((res, rej) => {
//     //         let uploadRequest = superagent.post(url)
//     //         uploadRequest.attach('file', image)
//     //         Object.keys(params).forEach((key) => {
//     //             uploadRequest.field(key, params[key])
//     //         })

//     //         uploadRequest.end((err, resp) => {
//     //             err ? rej(err) : res(resp);
//     //         })
//     //     })
//     // }

//     //-----------------cloudnary function end ------------------//

//     async postData(values, response) {
//         console.log(values, "values");
//         console.log(response, "response");
//     }

//     removeForm = (k) => {
//         const { form } = this.props;
//         // can use data-binding to get
//         const keys = form.getFieldValue('keys');
//         // We need at least one passenger
//         if (keys.length === 1) {
//             return;
//         }
//         // can use data-binding to set
//         form.setFieldsValue({
//             keys: keys.filter(key => key !== k),
//         });
//     }

//     addForm = () => {
//         const { form } = this.props;
//         // can use data-binding to get
//         const keys = form.getFieldValue('keys');
//         const nextKeys = keys.concat(id++);
//         // can use data-binding to set
//         // important! notify form to detect changes
//         form.setFieldsValue({
//             keys: nextKeys,
//         });
//         imgId++;
//     }
//     // handleSubmit = (e) => {
//     //     e.preventDefault();
//     //     this.props.form.validateFields((err, values) => {
//     //         if (!err) {
//     //             const { keys, names } = values;
//     //             console.log('Received values of form: ', values);
//     //             console.log('Merged values:', keys.map(key => names[key]));
//     //         }
//     //     });
//     // }

//     render() {
//         const { getFieldDecorator, getFieldValue } = this.props.form;
//         const { previewVisible, previewImage, fileList } = this.state;

//         const uploadButton = (
//             <div>
//                 <Icon type="plus" />
//                 <div className="ant-upload-text">Upload</div>
//             </div>
//         );


//         const locationField = this.state.imgLoc.map((k, index) => {
//             return (
//                 <div key={index}>
//                     <div className="col-md-4">
//                         <div className="form-group location">
//                             <label for="latitude"></label>
//                             <Form.Item>
//                                 {
//                                     <Icon
//                                         className="dynamic-delete-button"
//                                         type="minus-circle-o"
//                                         disabled={false}
//                                         onClick={() => this.remove(k)}
//                                     />
//                                 }
//                                 <br />
//                                 {getFieldDecorator(`'latitude'${index}`, {
//                                     rules: [{
//                                         required: true,
//                                         message: 'Please enter latitude',
//                                         whitespace: true
//                                     },
//                                     { validator: this.validateNumber.bind(this) }]
//                                 })(
//                                     <Input
//                                         type="text"
//                                         className={'form-control '}
//                                         id="latitude"
//                                         name="latitude"
//                                         placeholder="Enter latitude"
//                                     />
//                                 )}

//                             </Form.Item>
//                         </div>
//                     </div>
//                     <div className="col-md-4">
//                         <div className="form-group location">
//                             <label for="longitude"></label>
//                             <Form.Item>
//                                 {getFieldDecorator(`'longitude'${index}`, {
//                                     rules: [{
//                                         required: true,
//                                         message: 'Please enter longitude',
//                                         whitespace: true
//                                     },
//                                     { validator: this.validateNumber.bind(this) }]
//                                 })(
//                                     <Input
//                                         type="text"
//                                         className={'form-control '}
//                                         id="longitude"
//                                         name="longitude"
//                                         placeholder="Enter longitude"
//                                     />
//                                 )}
//                             </Form.Item>
//                         </div>
//                     </div>
//                     <div className="vitalbox">
//                         <div className="row" style={{ padding: "0px", marginTop: "20px" }}>
//                             <div className="col-md-4">
//                                 <FormItem
//                                     label="Images"
//                                 >
//                                     {getFieldDecorator(`'images'${index}`, {
//                                         rules: [{
//                                             required: true,
//                                             message: 'Please upload your Images!',
//                                             whitespace: true
//                                         }],
//                                     })(
//                                         <div className="clearfix">
//                                             <Upload
//                                                 action="//jsonplaceholder.typicode.com/posts/"
//                                                 listType="picture-card"
//                                                 fileList={this.state.fileList}
//                                                 onPreview={this.handlePreview}
//                                                 onChange={this.handleChanges}
//                                             >
//                                                 {/* {this.state.imageList.length + fileList.length >= 3 ? null : uploadButton} */}
//                                                 {this.state.fileList.length >= 3 ? null : uploadButton}
//                                             </Upload>
//                                             {/* <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
//                                                 <img alt="example" style={{ width: '50%' }} src={previewImage} />
//                                             </Modal> */}
//                                             {/* {uploadedImages} */}
//                                         </div>
//                                     )}
//                                 </FormItem>
//                             </div>
//                             {this.state.noChooseFile ?
//                                 null
//                                 : <div className="col-md-6">
//                                     <h6 style={{ marginTop: "10px", marginLeft: "4px" }}> No File Chosen</h6>
//                                 </div>
//                             }
//                         </div>
//                     </div>
//                 </div>
//             );
//         });







//         { getFieldDecorator('keys', { initialValue: [] }) };
//         const keys = getFieldValue('keys');
//         const formItems = keys.map((k, index) => (
//             // <Center>
//             <div className='formDiv'>
//                 {/* animation of page */}
//                 <ReactCSSTransitionGroup transitionName="fade"
//                     transitionAppear={true} transitionAppearTimeout={500}
//                     transitionEnterTimeout={500} transitionLeaveTimeout={300}>
//                     <Form.Item
//                         label={index === 0 ? 'BillBoard Detail' : ''}
//                         required={false}
//                         key={k}
//                     >
//                         {/* <BillboardFields /> */}
//                         <div className='mainDive'>
//                             <div >
//                                 <div className="col-md-8">
//                                     <div className="form-group">
//                                         <label for="company"></label>
//                                         <Form.Item>
//                                             {getFieldDecorator(`'company'${index}`, {
//                                                 rules: [{
//                                                     required: true,
//                                                     message: 'Please enter your company name!',
//                                                 }],
//                                             })(
//                                                 <Select options={this.state.companyName} />
//                                             )}
//                                         </Form.Item>
//                                     </div>
//                                 </div>

//                                 <div className="col-md-8">
//                                     <div className="form-group">
//                                         <label for="type"></label>
//                                         <Form.Item>
//                                             {getFieldDecorator(`'type'${index}`, {
//                                                 rules: [{
//                                                     required: true,
//                                                     message: 'Please enter a type',
//                                                     whitespace: true
//                                                 }],
//                                             })(
//                                                 <Input
//                                                     type="text"
//                                                     className={'form-control backcolor'}
//                                                     id={"type"}
//                                                     name="type"
//                                                     placeholder="Enter Billboard Type"
//                                                 />
//                                             )}
//                                         </Form.Item>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-8">
//                                     <div className="form-group">
//                                         <label for="facing"></label>
//                                         <Form.Item>
//                                             {getFieldDecorator(`'facing'${index}`, {
//                                                 rules: [{
//                                                     required: true,
//                                                     message: 'Please enter a facing',
//                                                     whitespace: true
//                                                 }],
//                                             })(
//                                                 <Input
//                                                     type="text"
//                                                     className={'form-control backcolor'}
//                                                     id={"facing"}
//                                                     name="facing"
//                                                     placeholder="Enter billboard facing"
//                                                 />
//                                             )}
//                                         </Form.Item>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-8">
//                                     <div className="form-group">
//                                         <label for="size"></label>
//                                         <Form.Item>
//                                             {getFieldDecorator(`'size'${index}`, {
//                                                 rules: [{
//                                                     required: true,
//                                                     message: 'Please enter a size',
//                                                     whitespace: true
//                                                 }],
//                                             })(
//                                                 <Input
//                                                     type="text"
//                                                     className={'form-control backcolor'}
//                                                     id={"size"}
//                                                     name="size"
//                                                     placeholder="Enter billboard size"
//                                                 />
//                                             )}
//                                         </Form.Item>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <p>
//                                         Add Billboard Location & Images
//                            </p>
//                                     {locationField}
//                                     <FormItem>
//                                         <Button type="dashed" onClick={this.add}>
//                                             <Icon type="plus" /> Add More
//                                 </Button>
//                                     </FormItem>
//                                 </div>
//                                 <div className="col-md-8">
//                                     <div className="form-group">
//                                         <label for="traffic"></label>
//                                         <Form.Item>
//                                             {getFieldDecorator(`'traffic'${index}`, {
//                                                 rules: [{
//                                                     required: true,
//                                                     message: 'Please enter a type',
//                                                     whitespace: true
//                                                 }],
//                                             })(
//                                                 <Input
//                                                     type="text"
//                                                     className={'form-control backcolor'}
//                                                     id={"traffic"}
//                                                     name="traffic"
//                                                     placeholder="Enter traffic count"
//                                                 />
//                                             )}
//                                         </Form.Item>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>




//                         {keys.length > 1 ? (
//                             <Icon
//                                 className="dynamic-delete-button btn btn-danger iconBtn fa fa-minus"
//                                 onClick={() => this.removeForm(k)}
//                             />
//                         ) : null}
//                     </Form.Item>
//                 </ReactCSSTransitionGroup>
//             </div>
//         ));
//         return (
//             <div className='row'>
//                 <div className='mainDive container text-center'>
//                     <Form onSubmit={this.handleSubmit}>
//                         {formItems}
//                         <Form.Item>
//                             <Button type="dashed" onClick={this.addForm} className='btn btn-primary iconBtn'>
//                                 {/* <images src={plus} alt="plus"/> */}
//                                 <Icon className='fa fa-plus' />
//                             </Button>
//                         </Form.Item>
//                         <div className="col-md-2 col-4">
//                             <Form.Item>
//                                 <Button className="btn btn-primary btnapple"
//                                     type="primary" htmlType="submit"
//                                 >Submit</Button>
//                             </Form.Item>
//                         </div>
//                     </Form>
//                 </div>
//             </div>
//         );
//     }
// }

// const WrappedDynamicFieldSet = Form.create()(BillboradForm);
// export default WrappedDynamicFieldSet;
