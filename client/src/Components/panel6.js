import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';

import './home.css';

class Panel6 extends Component {
  render() {
    return (
        <div>
		      	<div className="container drn9">
		      			<div className="row drn9">
		      				<div className="col-md-12 line2"><h3 className="pakol">HOW IT WORKS</h3></div>
		      			</div>
		      			<div className="row drn9">
	      					<div className="col-md-5 col-4"></div>
	      					<div className="col-md-2 col-4 hrline3"></div>
	      					<div className="col-md-5 col-4"></div>
		  				</div>
		  				<div className="row drn9">
		  					<div className="col-md-12 line2"><p className="cell2"><span className="cell7">How Selmore.com Works?</span></p></div>
		  				</div>
		  				<div className="row" style={{marginTop:'-3%'}}>
		  					<div className="col-md-6 sim1">
		  						<img src="./images/buy.png" className="buyimag"/>
		  						<div className="divcenterbuy">
		  							<h4 className="mouse5"><span className="mouse4">ARE YOU A <span className="mouse7">SELLER?</span></span></h4>
	  								<p className="mouse6"><span className="mouse3">Earn Money From Your Potential Space</span></p>
	  								<button type="button" className="btn mouse1"><Link  rel="noopener noreferrer" to={`/seller`}><span className="mouse2">READ MORE</span></Link></button>
	  							</div>
		  					</div>
		  					<div className="col-md-6 sim2">
		  						<img src="./images/sell.png" style={{height:'120px'}}/>
		  						<div className="divcentersell">
		  							<h4 className="mouse5"><span className="mouse4">ARE YOU A <span className="mouse7">BUYER?</span></span></h4>
	  								<p className="mouse6"><span className="mouse3">Advertise Your Brand Quickly And Easily</span></p>
	  								<button type="button" className="btn mouse1"><Link  rel="noopener noreferrer" to={`/buyer`}><span className="mouse2">READ MORE</span></Link></button>
	  							</div>
		  					</div>
		  				</div>
			    </div>

        </div>
    );
  }
}

export default Panel6;
