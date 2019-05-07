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

// const FormItem = Form.Item;


// class LocAndImgs extends Component {
//     constructor() {
//         super()
//         this.state = {
//             companyName: [],
//             imgLoc: [{ showUpload: true, fileLists: [] }],
//             fileList: [],
//             previewImage: '',
//             previewVisible: false,
//         }
//         this.onRemoveAnimalImage = this.onRemoveAnimalImage.bind(this);
//         this.beforeUploadAnimalImage = this.beforeUploadAnimalImage.bind(this);
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
//         const newAnimalImage = imgLoc.concat({ showUpload: true, fileLists: [] });

//         this.setState(prevState => ({
//             ...prevState,
//             imgLoc: newAnimalImage
//         }));
//     }
//     onRemoveAnimalImage(index) {
//         const { ownerAnimal } = this.state;

//         let newState = [...ownerAnimal];

//         newState[index] = { showUpload: true, fileLists: [] };

//         this.setState(prevState => ({
//             ...prevState,
//             ownerAnimal: [...newState]
//         }));
//     }

//     beforeUploadAnimalImage(index) {
//         const { imgLoc } = this.state;

//         let newState = [...imgLoc];

//         newState[index] = { showUpload: false , fileLists: []};

//         this.setState(prevState => ({
//             ...prevState,
//             imgLoc: [...newState]
//         }));
//         console.log(newState,'newState')
//     }

//     handleCancel = () => this.setState({ previewVisible: false })


//     handlePreview = (file) => {
//         this.setState({
//             previewImage: file.url || file.thumbUrl,
//             previewVisible: true,
//         });
//     }


//     handleChanges = ({ fileList }) => {
//         this.setState({ fileList })
//         console.log(fileList , 'handle change fileList')
//         this.props.locationAndImg(fileList)
//     }

//     validateNumber(rule, value, callback) {
//         if (isNaN(value)) {
//             callback('Please type Numbers');
//         } else {
//             callback()
//         }
//     }

//     // componentWillReceiveProps() {
//     //     this.props.handleSubmit();
//     // }

//     render() {
//         const { getFieldDecorator, getFieldValue } = this.props.form;
//         const { previewVisible, previewImage, fileList, imgLoc } = this.state;

//         const uploadButton = (
//             <div>
//                 <Icon type="plus" />
//                 <div className="ant-upload-text">Upload</div>
//             </div>
//         );

//         const locationField = imgLoc.map((k, index) => {
//             return (
//                 <div key={index}>
//                     {/* <Form onSubmit={this.props.handleSubmit}> */}
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
//                                                 // fileList={fileList}
//                                                 // onPreview={this.handlePreview}
//                                                 onChange={this.handleChanges}
//                                                 onRemove={file => this.onRemoveAnimalImage(index)}
//                                                 beforeUpload={file => this.beforeUploadAnimalImage(index)}
//                                                 capture
//                                             >
//                                                 {fileList.length >= 3 ? null : uploadButton}
//                                             </Upload>
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
//                     {/* </Form> */}
//                 </div>
//             );
//             // console.log(index);
//         });
//         return (
//             <div>
//                 {/* <Form onSubmit={this.props.handleSubmit}> */}
//                 <p>
//                     Add Billboard Location & Images
//                 </p>
//                 {locationField}
//                 <FormItem>
//                     <Button type="dashed" onClick={this.add}>
//                         <Icon type="plus" /> Add More
//                     </Button>
//                 </FormItem>
//                 {/* </Form> */}
//             </div>
//         )

//     }
// }


// const WrappedDynamicFieldSet = Form.create()(LocAndImgs);
// export default WrappedDynamicFieldSet;