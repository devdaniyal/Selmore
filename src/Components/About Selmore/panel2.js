import React, { Component } from 'react';
import Footer from '../footer';
import './about.css';

class Panel2 extends Component {
  render() {
    return (
        <div>

    		<div className="tissue3">
    			<div className="container">
    				<div className="row">
        				<div className="col-md-1 col-sm-1"></div>
        				  	<div className="col-md-7 col-sm-7 tissue6">
			        			<h4 className="ex3">ARE YOU INTERESTED IN LISTING YOUR ADS</h4>
									<p className="cel2"><span className="ex4">if you are ads/media owner and interested in listing your add on selmore.com ,
									Just Click on Get <br/> Started and start listing you add</span></p>
								<div className="row">
									<button type="button" className="btn tissue5btn"><span className="tissue4btn">GET STARTED</span></button>
								</div>
        				 	</div>
	        				<div className="col-md-4 col-sm-4">
	        					<img src="./images/about-panel2.png" style={{height:"160px"}}/>
	        				</div>
    				</div>
    			</div>
    		</div>
  		</div> 
    );
  }
}

export default Panel2;