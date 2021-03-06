import React, { Component } from 'react';
import './contact.css';
import {
	Form, Input, Select, Radio, AutoComplete,
} from 'antd';
import { HttpUtils } from '../../Services/HttpUtils';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const RadioGroup = Radio.Group;

class Formpanel extends Component {
	constructor() {
		super()

		//Initilize states
		this.state = {
			selectedOption: '',
			confirmDirty: false,
			autoCompleteResult: [],
			value: 1,
			isLoader: false,
			isAlert: false,
			radioVal: false,
			emailsArr: [],
			registerBtn: false
		}

		//bind funtions
		this.handleOptionChange = this.handleOptionChange.bind(this);
	}

	componentDidMount() {
		this.checkEmails();
		// setTimeout(
		// 	function() {
		// 		isAlert;
		// 	}
		// 	.bind(this),
		// 	3000
		// );
	}

	checkEmails = async () => {

		let response = await HttpUtils.get('getemails');
		let getEmail = response.content;
		console.log(response)
		console.log(response.content);
		this.setState({
			emailsArr: response.content
		})
	}

	onChangeEmail(rule, value, callback) {
		console.log(rule)
		if (this.state.emailsArr.includes(value)) {
			callback('Email is already exists');
			this.setState({
				registerBtn: true
			})
		} else {
			callback()
		}


	}

	//radio button state function
	handleOptionChange(changeEvent) {
		this.setState({
			selectedOption: changeEvent.target.value,
			radioVal: true
		});
		// console.log(this.state.radioVal)
	}

	//form validation funcs
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				this.setState({ isLoader: true })
				this.fectSignUpApiFunc(values)
				// setTimeout(this.state.isAlert, 3000);
				setTimeout(() => {
					this.setState({
						isAlert:false,
					});
				}, 3000);
			}
		});
	}

	fectSignUpApiFunc = async (values) => {
		//concat Frist Name & Mobile No for Password
		let password = values.firstName.concat(values.mobileNo)
		values.password = password;
		console.log(values);

		let response = await HttpUtils.post('signup', values);
		console.log(response);
		//fetch signUp api
		if (response.code === 200) {
			this.setState({ data: response.content, isData: true, isLoader: false, isAlert: true });

		} else {
			this.setState({ isData: false })
		}
	}

	handleConfirmBlur = (e) => {
		const value = e.target.value;
		this.setState({ confirmDirty: this.state.confirmDirty || !!value });
	}

	validateNumber(rule, value, callback) {
		if (isNaN(value)) {
			callback('Please type Numbers');
		} else {
			callback()
		}
	}
	hasErrors = (fieldsError) => {
		return Object.keys(fieldsError).some(field => fieldsError[field]);
	}


	render() {
		const { getFieldDecorator } = this.props.form;

		const formItemLayout = {
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 10 }
			}
		};

		return (
			<div>
				<Form onSubmit={this.handleSubmit}>
					<div className="container proroute2">
						<div className="row ball5">
							<div className="col-md-8">
								<div className="form-group">
									<label for="usr"></label>
									<Form.Item>
										{getFieldDecorator('fullName', {
											rules: [{
												required: true,
												message: 'Please input your Full Name!',
												whitespace: true
											}],
										})(
											<Input
												type="text"
												className={'form-control backcolor'}
												id={"usr"}
												name="username"
												placeholder="Full Name:*"
											/>
										)}
									</Form.Item>
								</div>
							</div>
							<div className="col-md-4"></div>
						</div>
						<div className="row ball4">
							<div className="col-md-4 col-6">
								<div className="form-group">
									<label for="usr"></label>
									<Form.Item>
										{getFieldDecorator('firstName', {
											rules: [{
												required: true,
												message: 'Please input your First Name!',
												whitespace: true
											}],
										})(
											<Input
												type="text"
												className={'form-control backcolor'}
												id={"usr"}
												name="firstName"
												placeholder="First Name:*"
											/>
										)}
									</Form.Item>
								</div>
							</div>
							<div className="col-md-4 col-6">
								<div className="form-group">
									<label for="usr"></label>
									<Form.Item>
										{getFieldDecorator('lastName', {
											rules: [{
												required: true,
												message: 'Please input your Last Name!',
												whitespace: true
											}],
										})(
											<Input
												type="text"
												className={'form-control backcolor'}
												id={"usr"}
												name="username"
												placeholder="Last Name:*"
											/>
										)}
									</Form.Item>
								</div>
							</div>
							<div className="col-md-4"></div>
						</div>
						<div className="row ball4">
							<div className="col-md-8 col-12">
								<div className="form-group">
									<label for="usr"></label>
									<Form.Item  {...formItemLayout}>
										{getFieldDecorator('email', {
											rules: [{
												type: 'email',
												message: 'The input is not valid E-mail!',
											}, {
												required: true,
												message: 'Please input your E-mail!',
											},
											{ validator: this.onChangeEmail.bind(this) }],
										})(
											<Input
												type="text"
												className={"form-control backcolor"}
												id={"usr"}
												name="username"
												placeholder="Email:*"
											// onChange={this.onChangeEmail.bind(this)}
											/>
										)}
									</Form.Item>
								</div>
							</div>
							<div className="col-md-4"></div>
						</div>
						<div className="row ball4">
							<div className="col-md-4 col-6">
								<div className="form-group">
									<label for="usr"></label>
									<Form.Item>
										{getFieldDecorator('mobileNo', {
											initialValue: this.state.dataBnumber,
											rules: [{
												required: true,
												message: 'Please input your mobile Number!',
												whitespace: true
											},
											{ validator: this.validateNumber.bind(this) }]
										})(
											<Input
												className={"form-control backcolor"}
												id={"usr"}
												name="username"
												placeholder="Mobile No:*"
											/>
										)}
									</Form.Item>
								</div>
							</div>
							<div className="col-md-4 col-6">
								<div className="form-group">
									<label for="usr"></label>
									<Form.Item>
										{getFieldDecorator('landlineNo', {
											initialValue: this.state.dataBnumber,
											rules: [{
												required: true,
												message: 'Please input your landline Number!',
												whitespace: true
											},
											{ validator: this.validateNumber.bind(this) }]
										})(
											<Input
												className={"form-control backcolor"}
												id={"usr"}
												name="username"
												placeholder="Landline No.:*"
											/>
										)}
									</Form.Item>
								</div>
							</div>
							<div className="col-md-4"></div>
						</div>
						<div className="row ball67">
							<div className="col-12 col-md-8 col-lg-8 col-xl-8">
								<form action="/action_page.php">
									<RadioGroup name="radiogroup" defaultValue={1}>
										<div className="form-check-inline">
											<label className="form-check-label" for="radio1">
												<Radio value={1}
													className={"form-check-input"}
													id={"radio1"}
													name="Advertiser"
													value={"Advertiser"}
													checked={this.state.selectedOption === 'Advertiser'}
													onChange={this.handleOptionChange}
												>Advertiser
													</Radio>
											</label>
										</div>
										<div className="form-check-inline checkmargin">
											<label className="form-check-label" for="radio2">
												<Radio value={2}
													className={"form-check-input"}
													id={"radio2"}
													name="Agent"
													value="Agent"
													checked={this.state.selectedOption === 'Agent'}
													onChange={this.handleOptionChange}
												>Agent
													</Radio>
											</label>
										</div>
										<div className="form-check-inline checkmargin">
											<label className="form-check-label">
												<Radio value={3}
													className={"form-check-input"}
													id={"radio2"}
													name="Buyer"
													value="Buyer"
													checked={this.state.selectedOption === 'Buyer'}
													onChange={this.handleOptionChange}
												>Buyer
													</Radio>
											</label>
										</div>
										<div className="form-check-inline checkmargin">
											<label className="form-check-label">
												<Radio value={3}
													className={"form-check-input"}
													id={"radio2"}
													name="Seller"
													value="Seller"
													checked={this.state.selectedOption === 'Seller'}
													onChange={this.handleOptionChange}
												>Seller
													</Radio>
											</label>
										</div>
									</RadioGroup>
								</form>
							</div>
							{this.state.radioVal ?
								<div className="col-md-8">
									<div className="form-group">
										<label for="company"></label>
										<Form.Item>
											{getFieldDecorator('CompanyName', {
												rules: [{
													required: true,
													message: 'Please enter your company name',
													whitespace: true
												}],
											})(
												<Input
													type="text"
													className={'form-control backcolor'}
													id={"company"}
													name="company name"
													placeholder="Company name"
												/>
											)}
										</Form.Item>
									</div>
								</div>
								:
								null
							}
							<div className="col-0 col-md-4 col-lg-4 col-xl-4"></div>
						</div>
						<div className="row ball4">
							<div className="col-md-6 col-8">
								<div className="form-group">
									<label for="usr"></label>
									<Form.Item>
										{getFieldDecorator('contact', {
											initialValue: this.state.dataBnumber,
											rules: [{
												required: true,
												message: 'Please enter your contact Number!',
												whitespace: true
											},
											{ validator: this.validateNumber.bind(this) }]
										})(
											<Input
												className={"form-control backcolor"}
												id={"usr"}
												name="username"
												placeholder="Contact:*"
											/>
										)}
									</Form.Item>
								</div>
							</div>
							<div className="col-md-2 col-4">
								<button className="btn btn-primary btnapple" disabled={this.state.registerBtn}
								>Request</button>
							</div>
							{this.state.isLoader ? <div class="loading"> 	</div>
								:
								null
							}
							
							{this.state.isAlert ? 
							<div class="alert alert-success" role="alert">
							{/* {setTimeout(() =>  */}
								<strong>Request Submiting </strong>
							
								Your request has been submited and
								one of our support member will call & email you shortly.
								{/* // , 3000)} */}
								</div>
								:
								null
							}
							<div className="col-md-4"></div>
						</div>
						<div className="row" style={{ margin: '0px' }}>
							<div className="col-md-8 ball1" style={{ marginLeft: '1%' }}></div>
							<div className="col-md-4"></div>
						</div><br />
					</div>
				</Form>
			</div>
		);
	}
}

const WrappedRegistrationForm = Form.create()(Formpanel);
export default WrappedRegistrationForm;
