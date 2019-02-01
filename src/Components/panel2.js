import React, { Component } from 'react';
import './home.css';

class Panel2 extends Component {
  render() {
    return (
      <div>

      		<div className="container">
          			<div className="row clock">
          				<div className="col-md-4"></div>
          				<div className="col-md-4 line2"><h3>Our Clients</h3></div>
          				<div className="col-md-4"></div>
        			   </div>
      			      <div className="row clock">
          					<div className="col-md-4"></div>
          					<div className="col-md-4 hrline"></div>
          					<div className="col-md-4"></div>
    				      </div>
    				  <div className="row clock">
      					<div className="col-md-3">
      						<img src="../images/peekfreans.png" style={{ marginTop : '13px'}} className="drn3"/>
      					</div>
      					<div className="col-md-3">
      						<img src="../images/jazz.png" className="drn4"/>
      					</div>
      					<div className="col-md-3">
      						<img src="../images/candy.png" className="drnn"/>
      					</div>
      					<div className="col-md-3">
      						<img src="../images/hbl.png" className="drn5"/>
      					</div>
    				  </div>
    		  </div><br/>


      </div>
    );
  }
}

export default Panel2;