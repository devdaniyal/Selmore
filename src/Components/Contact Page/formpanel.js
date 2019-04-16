import React, { Component } from 'react';
import './contact.css';

class Formpanel extends Component {
  render() {
    return (
    	<div>
    			<div className="container proroute2">		
	    			<div className="row ball5">
    					<div className="col-md-8">
    						<form>
							    <div className="form-group">
							      <label for="usr"></label>
							      <input type="text" className="form-control backcolor" id="usr" name="username" placeholder="Full Name:*" />
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
							      <input type="text" className="form-control backcolor" id="usr" name="username" placeholder="First Name:*" />
							    </div>
							</form> 
	    				</div>
	    				<div className="col-md-4 col-6">
	    					<form>
							    <div className="form-group">
							      <label for="usr"></label>
							      <input type="text" className="form-control backcolor" id="usr" name="username" placeholder="Last Name:*"/>
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
							      <input type="text" className="form-control backcolor" id="usr" name="username" placeholder="Email:*" />
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
							      <input type="text" className="form-control backcolor" id="usr" name="username" placeholder="Mobile No:*" />
							    </div>
							</form> 
	    				</div>
	    				<div className="col-md-4 col-6">
	    					<form>
							    <div className="form-group">
							      <label for="usr"></label>
							      <input type="text" className="form-control backcolor" id="usr" name="username" placeholder="Landline No.:*"/>
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
						        <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1"/>Advertiser
						      </label>
						    </div>
						    <div className="form-check-inline checkmargin">
						      <label className="form-check-label" for="radio2">
						        <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2"/>Agent
						      </label>
						    </div>
						    <div className="form-check-inline checkmargin">
						      <label className="form-check-label">
						        <input type="radio" className="form-check-input" id="radio3" name="optradio" value="option3"/>Buyer
						      </label>
						    </div>
						    <div className="form-check-inline checkmargin">
						      <label className="form-check-label">
						        <input type="radio" className="form-check-input" id="radio3" name="optradio" value="option3"/>Seller
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
							      <input type="text" className="form-control backcolor" id="usr" name="username" placeholder="Contact:*" />
							    </div>
							</form>    
    					</div>
    					<div className="col-md-2 col-4">
    						<button type="button" className="btn btn-primary btnapple">Request</button>
    					</div>
    					<div className="col-md-4"></div>		
	    			</div>
	    			<div className="row" style={{margin:'0px'}}>
	    				<div className="col-md-8 ball1" style={{marginLeft:'1%'}}></div>
	    				<div className="col-md-4"></div>
	    			</div><br/>
	    		</div>	

		</div> 
    );
  }
}
export default Formpanel;