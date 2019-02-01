import React, { Component } from 'react';
import './home.css';


class Banner extends Component {
  render() {
    return (
      <div>

      			<div className="container">
      				<div className="row rowcolor">
      				
	      				<div className="col-md-8 bannercol8">
	      					<h1  className="weight"><strong><span className="textwhite1">Pakistan<br/> Outdoor Advertising  Portal</span></strong></h1><br/>
	      					<p className="right">Search for Unique Advertising opportising from 128 ad Listing in Pakistan</p><br/>
	      					<button type="button" className="btn btn-lg btncolor1">Contact Us</button>
	      				</div>
	      				<div className="col-md-4" style={{"backgroundImage":"url('../images/bodr-on.png')"}}> 						
	      				</div>
	      				<div className="d-block d-sm-none" >
	      					<img src="../images/bodr-on.png" style={{width : "100%"}}/>
	      				</div>
	      			</div>	
      			</div>


      </div>
    );
  }
}

export default Banner;
