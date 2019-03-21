import React, { Component } from 'react';
import './loginform.css';

class Form extends Component {
  render() {
    return (
      <div className="container">
	      		<div className="row school1" style={{marginRight: '0px'}}>
                  <div className="col-md-1">
                  </div>
                  <div className="col-md-5 school7">
                    <img src="../images/log-in.png" style={{width:'100%',height:'257px'}}/>
                  </div>
                  <div className="col-md-4 school6">
                      <form>
                          <div className="form-group">
                              <label for="exampleInputEmail1" style={{marginBottom:'0px'}}><span className="school3">Email address:</span></label>
                              <input type="email" className="form-control" id="exampleInputEmail1" style={{marginTop:'-2%'}} />
                          </div>
                          <div class="form-group">
                              <label for="exampleInputPassword1" style={{marginBottom:'0px'}}><span className="school3">Password:</span></label>
                              <input type="password" className="form-control" id="exampleInputPassword1" style={{marginTop:'-2%'}} />
                          </div>
                            <p style={{marginTop:'-4%'}}><span className="school8">Forget Password!?</span></p>
                              <button type="submit" className="btn school4"><span className="school5">Login</span></button>
                      </form>
                  </div>
                  <div className="col-md-1">
                  </div>
	      		</div>
      </div>
    );
  }
}

export default Form;