import React, { Component } from 'react';
import './contact.css';

class Formpanel extends Component {

	constructor() {
		super()

		//Initilize states
		this.state = {
			fullName: '',
			fName: '',
			lName: '',
			email: '',
			password: '',
			mobNo: '',
			landNo: '',
			contact: '',
			selectedOption: '',
		}

		//bind funtions
		this.handleOptionChange = this.handleOptionChange.bind(this);
	}

	//calling funtions
	request(e) {
		const { fullName, fName, lName, email, password, mobNo, landNo, contact, selectedOption } = this.state;
		e.preventDefault();

		//Store states in array
		let infoArr = [fullName, fName, lName,
			email, password, mobNo,
			landNo, selectedOption, contact];
		console.log(infoArr)

		this.setState({ fullName: '', fName: '', lName: '', email: '', mobNo: '', landNo: '', contact:''});
	}

	//radio button state function
	handleOptionChange(changeEvent) {
		this.setState({
			selectedOption: changeEvent.target.value
		});
	}

	render() {
		const { fName, mobNo, password } = this.state;
		return (
			<div>
				<div className="container proroute2">
					<div className="row ball5">
						<div className="col-md-8">
							<form onSubmit={this.request.bind(this)}>
								<div className="form-group">
									<label for="usr"></label>
									<input type="text" className="form-control backcolor"
										id="usr" name="username" placeholder="Full Name:*"
										onChange={(e) => this.setState({ fullName: e.target.value })}
										value={this.state.fullName}
									/>
								</div>
							</form>
						</div>
						<div className="col-md-4"></div>
					</div>
					<div className="row ball4">
						<div className="col-md-4 col-6">
							<form onSubmit={this.request.bind(this)}>
								<div className="form-group">
									<label for="usr"></label>
									<input type="text" className="form-control backcolor" id="usr"
										name="username" placeholder="First Name:*"
										onChange={(e) => this.setState({
											fName: e.target.value,
											password: mobNo.concat(e.target.value)
										})}
										value={this.state.fName}
									/>
								</div>
							</form>
						</div>
						<div className="col-md-4 col-6">
							<form>
								<div className="form-group">
									<label for="usr"></label>
									<input type="text" className="form-control backcolor"
										id="usr" name="username" placeholder="Last Name:*"
										onChange={(e) => this.setState({ lName: e.target.value })}
										value={this.state.lName}
									/>
								</div>
							</form>
						</div>
						<div className="col-md-4"></div>
					</div>
					<div className="row ball4">
						<div className="col-md-8 col-12">
							<form>
								<div className="form-group">
									<label for="usr"></label>
									<input type="text" className="form-control backcolor"
										id="usr" name="username" placeholder="Email:*"
										onChange={(e) => this.setState({ email: e.target.value })}
										value={this.state.email}
									/>
								</div>
							</form>
						</div>
						<div className="col-md-4"></div>
					</div>
					<div className="row ball4">
						<div className="col-md-4 col-6">
							<form>
								<div className="form-group">
									<label for="usr"></label>
									<input type="text" className="form-control backcolor"
										id="usr" name="username" placeholder="Mobile No:*"
										onChange={(e) => this.setState({
											mobNo: e.target.value,
											password: fName.concat(e.target.value)
										})}
										value={this.state.mobNo}
									/>
								</div>
							</form>
						</div>
						<div className="col-md-4 col-6">
							<form>
								<div className="form-group">
									<label for="usr"></label>
									<input type="text" className="form-control backcolor"
										id="usr" name="username" placeholder="Landline No.:*"
										onChange={(e) => this.setState({ landNo: e.target.value })}
										value={this.state.landNo}
									/>
								</div>
							</form>
						</div>
						<div className="col-md-4"></div>
					</div>
					<div className="row ball67">
						<div className="col-12 col-md-8 col-lg-8 col-xl-8">
							<form action="/action_page.php">
								<div className="form-check-inline">
									<label className="form-check-label" for="radio1">
										<input type="radio" className="form-check-input"
											id="radio1" name="Advertiser" value="Advertiser"
											checked={this.state.selectedOption === 'Advertiser'}
											onChange={this.handleOptionChange}
										/>Advertiser
						      </label>
								</div>
								<div className="form-check-inline checkmargin">
									<label className="form-check-label" for="radio2">
										<input type="radio" className="form-check-input"
											id="radio2" name="Agent" value="Agent"
											checked={this.state.selectedOption === 'Agent'}
											onChange={this.handleOptionChange}
										/>Agent
						      </label>
								</div>
								<div className="form-check-inline checkmargin">
									<label className="form-check-label">
										<input type="radio" className="form-check-input"
											id="radio3" name="Buyer" value="Buyer"
											checked={this.state.selectedOption === 'Buyer'}
											onChange={this.handleOptionChange}
										/>Buyer
						      </label>
								</div>
								<div className="form-check-inline checkmargin">
									<label className="form-check-label">
										<input type="radio" className="form-check-input"
											id="radio3" name="Seller" value="Seller"
											checked={this.state.selectedOption === 'Seller'}
											onChange={this.handleOptionChange}
										/>Seller
						      </label>
								</div>
							</form>
						</div>
						<div className="col-0 col-md-4 col-lg-4 col-xl-4"></div>
					</div>
					<div className="row ball4">
						<div className="col-md-6 col-8">
							<form>
								<div className="form-group">
									<label for="usr"></label>
									<input type="text" className="form-control backcolor"
										id="usr" name="username" placeholder="Contact:*"
										onChange={(e) => this.setState({ contact: e.target.value })}
										value={this.state.contact}
									/>
								</div>
							</form>
						</div>
						<div className="col-md-2 col-4">
							<button type="button" className="btn btn-primary btnapple"
								onClick={this.request.bind(this)}
							>Request</button>
						</div>
						<div className="col-md-4"></div>
					</div>
					<div className="row" style={{ margin: '0px' }}>
						<div className="col-md-8 ball1" style={{ marginLeft: '1%' }}></div>
						<div className="col-md-4"></div>
					</div><br />
				</div>

			</div>
		);
	}
}
export default Formpanel;