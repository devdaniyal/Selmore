import React, { Component } from 'react';
import './popform.css';

class Popform extends Component {
  render() {
    return (
        <div>
              <div className="container" style={{marginTop:'12%'}}>
                <div className="row" style={{margin:'0px'}}>
                    <div className="col-md-5"></div>
                    <div className="col-md-2">
                        <img src="./images/selmore-logo.png" height="70px"/>
                    </div>
                    <div className="col-md-4">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <div className="row" style={{margin:'0px'}}>
                    <div className="col-md-2"></div>
                    <div className="col-md-8 redable1">
                        <h4><span className="redable2">Start Bidding Now!</span></h4>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                  <div className="row" style={{margin:'0px'}}>
                      <div className="col-md-2"></div>
                      <div className="col-md-4 redable1">
                          <h5><span className="redable2">Already have an account?</span></h5>
                          <button className="btn redable3" type="button"><span className="redable4">Log in Here</span></button>
                      </div>
                      <div className="col-md-4 redable5">
                          <h5><span className="redable2">New To Our Site?</span></h5>
                          <button className="btn redable3" type="button"><span className="redable4">Register Today!</span></button>
                      </div>
                      <div className="col-md-2"></div>
                  </div>
              </div>
  		  </div> 
    );
  }
}
export default Popform;