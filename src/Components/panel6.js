import React, { Component } from 'react';
import './home.css';

class Panel6 extends Component {
  render() {
    return (
        <div>
		      	<div className="container drn9">
		      			<div className="row drn9">
		      				<div className="col-md-12 line2"><h3>HOW IT WORKS</h3></div>
		      			</div>
		      			<div className="row drn9">
		      					<div className="col-md-4"></div>
		      					<div className="col-md-4 hrline3"></div>
		      					<div className="col-md-4"></div>
		  				</div>
		  				<div className="row drn9">
		  					<div className="col-md-12 line2"><p className="cell2"><span className="cell7">How Selmore.com Works?</span></p></div>
		  				</div>
		  				<div className="row">
		  					<div className="col-md-6 sim1">
		  						<img src="./images/buy.png"/>
		  					</div>
		  					<div className="col-md-6 sim2">
		  						<img src="./images/sell.png"/>
		  					</div>
		  				</div>
		  				<div className="row">
		  					<div className="col-md-6 sim3">
		  						<div className="row">
		  							<div className="col-md-3"></div>
			  							<div className="col-md-6 divcenter">
				  							<h4 className="mouse5"><span className="mouse4">ARE YOU A <span className="mouse7">SELLER?</span></span></h4>
			  								<p className="mouse6"><span className="mouse3">Earn Money From Your Potential Space</span></p>
			  								<button type="button" className="btn mouse1"><span className="mouse2">READ MORE</span></button>
			  							</div>
			  						<div className="col-md-3"></div>
			  					</div>		
		  					</div>
		  					<div className="col-md-6 sim4">
		  						<div className="row">
		  							<div className="col-md-3"></div>
			  							<div className="col-md-6 divcenter">
				  							<h4 className="mouse5"><span className="mouse4">ARE YOU A <span className="mouse7">BUYER?</span></span></h4>
			  								<p className="mouse6"><span className="mouse3">Advertise Your Brand Quickly And Easily</span></p>
			  								<button type="button" className="btn mouse1"><span className="mouse2">READ MORE</span></button>
			  							</div>
			  						<div className="col-md-3"></div>
			  					</div>
		  					</div>

	  					</div>

			    </div>	

        </div> 
    );
  }
}

export default Panel6;