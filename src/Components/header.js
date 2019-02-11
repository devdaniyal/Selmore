import React, { Component } from 'react';
import './home.css';


class Header extends Component {
  render() {
    return (
      <div>
            
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <img src="../images/selmore-logo.png" className="selmorelogo"/>
                    </div>
                      <div className="col-md-8 d-none d-sm-block">
                        <ul className="nav">
                          <li className="nav-item navmargin" >
                            <a className="nav-link" href="#">Home</a>
                          </li>
                          <li className="nav-item navmargin">
                            <a className="nav-link" href="#">About</a>
                          </li>
                          <li className="nav-item navmargin">
                            <a className="nav-link" href="#">Agencies</a>
                          </li>
                          <li className="nav-item navmargin">
                            <a className="nav-link" href="#">FAQ</a>
                          </li>
                          <li className="nav-item navmargin">
                            <a className="nav-link" href="#">Blog</a>
                          </li>
                          <li className="nav-item navmargin">
                            <button type="button" class="btn btn-primary btn-sm"><i className="fa fa-plus"></i> LIST AD</button>
                          </li>
                          <li className="nav-item navbtnmargin">
                            <button type="button" className="btn btn-primary btn-sm">Login/Signup</button>
                          </li>
                          <li className="nav-item navbtnmargin">
                            <button type="button" className="btn btn-primary btn-sm">BIDDING</button>
                          </li>
                        </ul>
                      </div>
                      
                  </div>      
                </div>



      </div>
    );
  }
}

export default Header;
