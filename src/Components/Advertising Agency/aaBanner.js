import React, { Component } from 'react';
import './advertising.css';

class AaBanner extends Component {
  render() {
    return (
      <div>
    			<div className="row" style={{margin:'0px'}}> 	
    				<img src="./images/about-banner.png" className="happy1"/>
    			</div> 
    			<div>
  					<div className="container happy2">
  						<h4><span className="happy3">ADVERTISING AGENCIES</span></h4>						
  					</div>
				  </div>
	    </div>
    );
  }
}
export default AaBanner;