import React, { Component } from 'react';
import './home.css';

class Panel1 extends Component {
  render() {
    return (
      <div>

        <div className="container" style={{"backgroundImage":"url('../images/dropdown1.png')"}}>
          <div className="row">
      			<div className="container">
      				<div className="row">
      					<div className="col-md-4"></div>
      					<div className="col-md-4 head3"><h1><span className="head2">SEARCH BY CATEGORY</span></h1></div>
      					<div className="col-md-4"></div>
      				</div>
      				<div className="row">
      					<div className="col-md-4"></div>
      					<div className="col-md-4 hrline"></div>
      					<div className="col-md-4"></div>
      				</div>
      				<div className="row">
      					<div className="col-md-4"></div>
      					<div className="col-md-4 head3"><p>Here You Can Search by Category</p></div>
      					<div className="col-md-4"></div>
      				</div>
      			</div>
      		</div>
          <div className="row">
            <div className="container space">
                  <div className="col-md-4 divborder">
                    <img src="../images/bilbord.png" style={{ height : '91px'}}/>
                    <h5>Bus Ads</h5>
                  </div>
                  <div className="col-md-4 divborder">
                    <img src="../images/bilbord.png" style={{ height : '91px'}}/>
                    <h5>Taxi Ads</h5>
                  </div>
                  <div className="col-md-4 divborder">
                    <img src="../images/bilbord.png" style={{ height : '91px'}}/>
                    <h5>Billboards (125)</h5>
                  </div>
            </div>
          </div>
          <div className="row">
            <div className="container space">      
                  <div className="col-md-4 divborder">
                    <img src="../images/bilbord.png" style={{ height : '91px'}}/>
                    <h5>Shopping Mall (0)</h5>
                  </div>
                  <div className="col-md-4 divborder">
                    <img src="../images/bilbord.png" style={{ height : '91px'}}/>
                    <h5>Airport Ads (0)</h5>
                  </div>
                  <div className="col-md-4 divborder">
                    <img src="../images/bilbord.png" style={{ height : '91px'}}/>
                    <h5>Bus Shelter Ads (0)</h5>
                  </div>
            </div>
          </div>
          <div className="row">
            <div className="container space">   
                  <div className="col-md-4 divborder">
                    <img src="../images/bilbord.png" style={{ height : '91px'}}/>
                    <h5>Other (0)</h5>
                  </div>
                  <div className="col-md-4 divborder">
                    <img src="../images/bilbord.png" style={{ height : '91px'}}/>
                    <h5>Radio Ads (0)</h5>
                  </div>
                  <div className="col-md-4 divborder">
                    <img src="../images/bilbord.png" style={{ height : '91px'}}/>
                    <h5>Total Cinima Ads (0)</h5>
                  </div>  
            </div>
          </div>
        </div><br/>

      </div>
    );
  }
}

export default Panel1;