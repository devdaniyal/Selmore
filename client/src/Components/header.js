import React, { Component } from 'react';
import './headerfooter.css';
import { Link, withRouter } from 'react-router-dom';
import Dropdown from '../constant/dropdownmenu/Dropdown';




class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const value = localStorage.getItem("loggedIn");
    // console.log(value)
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-4 col-md-4 col-lg-3 col-xl-4">
              <img src="../images/selmore-logo.png" className="selmorelogo" />
            </div>
            <div className="col-md-8 col-lg-9 col-xl-8 d-none d-sm-block">
              <ul className="nav navsm">
                <li className="nav-item navmargin" >
                  <Link rel="noopener noreferrer" to={`/`}>
                    HOME
                  </Link>
                </li>
                <li className="nav-item navmargin">
                  <Link rel="noopener noreferrer" to={`/about`}>
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item navmargin">
                  <Link rel="noopener noreferrer" to={`/advertising_agency`}>
                    AGENCY
                  </Link>
                </li>
                <li className="nav-item navmargin">
                  <Link rel="noopener noreferrer" to={`/faq`}>
                    FAQ
                  </Link>
                </li>
                <li className="nav-item navmargin" style={{ marginTop: "28px" }}>
                  <a className="nav-link" href="#">
                    BLOG
                  </a>
                </li>
                <li className="nav-item navmargin12">
                  <Link rel="noopener noreferrer" to={`/list_add`}><button type="button" className="btn btn-primary btn-sm">
                    <span> LIST AD </span>
                  </button>
                  </Link>
                </li>
                <li className="nav-item navbiddbtn">
                  <button type="button" className="btn btn-primary btn-sm">
                    <Link rel="noopener noreferrer" to={`/bidding`} style={{ color: "white" }}>
                      <span>BIDDING</span>
                    </Link>
                  </button>
                </li>
                {value
                  ?
                  <li className="nav-item navbtnmargin">
                <Dropdown />
                  </li>
                  :
                  <li className="nav-item navbtnmargin">
                    <button type="button" className="btn btn-primary btn-sm">
                      <Link rel="noopener noreferrer" to={`/signin`} style={{ color: "white" }}>
                        Login/Signup
                        </Link>
                    </button>
                  </li>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
