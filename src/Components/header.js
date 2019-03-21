import React, { Component } from 'react';
import './headerfooter.css';


class Header extends Component {
  render() {
    return (
      <div>
            
                <div className="container">
                    <div className="row">
                        <div className="col-4 col-md-4 col-lg-4 col-xl-4">
                          <img src="../images/selmore-logo.png" className="selmorelogo"/>
                        </div>
                        <div className="col-md-8 col-lg-8 col-xl-8 d-none d-sm-block">
                            <ul className="nav navsm">
                                <li className="nav-item navmargin" >
                                  <a className="nav-link" href="#">HOME</a>
                                </li>
                                <li className="nav-item navmargin">
                                  <a className="nav-link" href="#">ABOUT</a>
                                </li>
                                <li className="nav-item navmargin">
                                  <a className="nav-link" href="#">AGENCIES</a>
                                </li>
                                <li className="nav-item navmargin">
                                  <a className="nav-link" href="#">FAQ</a>
                                </li>
                                <li className="nav-item navmargin">
                                  <a className="nav-link" href="#">BLOG</a>
                                </li>
                                <li className="nav-item navmargin12">
                                  <button type="button" class="btn btn-primary btn-sm"><span> LIST AD</span></button>
                                </li>
                                <li className="nav-item navbtnmargin">
                                  <button type="button" className="btn btn-primary btn-sm"><span>Login/Signup</span></button>
                                </li>
                                <li className="nav-item navbiddbtn">
                                  <button type="button" className="btn btn-primary btn-sm"><span>BIDDING</span></button>
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
